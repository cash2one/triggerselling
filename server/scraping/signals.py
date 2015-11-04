from rq import Queue
from worker import conn
q = Queue(connection=conn)
from queue import RQueue
import json
#from parse import Parse
import rethinkdb as r
from job_board.monster import Monster
from job_board.indeed import Indeed
from job_board.simply_hired import SimplyHired
from job_board.zip_recruiter import ZipRecruiter
from job_board.hiring_signal import HiringSignal
from press.press import *
import pandas as pd
import rethink_conn

from rq import Queue
from worker import conn as _conn
#q = Queue(connection=_conn)
q = Queue("low", connection=_conn)
dq = Queue("default", connection=_conn)
hq = Queue("high", connection=_conn)

class Signals:
    def _old_hiring(self, profile_id):
        qry = {'include':'profiles'}
        profiles = Parse().get('ProspectProfile/'+profile_id, qry).json()['profiles']
        for profile in profiles:
            locales, country = [""], None
            if profile['className'] == "HiringProfile": roles = profile['roles']    
            elif profile['className'] == "LocationProfile": 
                country = profile["country"]
                locales= profile['locale']
        report = HiringSignal()._generate_report(profile_id, False)
        profile = Parse()._pointer('ProspectProfile', profile_id)

    def _hiring(self, profile):
        _profile = profile
        for i in profile["profiles"]:
            if i["className"] == "HiringProfile":
                profile = i

        if "locales" not in profile.keys():
            profile["locales"] = [""]
        elif profile["locales"] == []:
            profile["locales"] = [""]

        country = ""
        print profile
        for role in profile["roles"]:
            for locale in profile["locales"]:
                _args = [role, locale, _profile["id"], country]
                print "THIS IS THE COUNTRY", country, locale
                job_3 = q.enqueue(ZipRecruiter()._signal, *_args, timeout=6000)
                job_0 = q.enqueue(Indeed()._cron, *_args, timeout=6000)
                job_2 = q.enqueue(SimplyHired()._signal, *_args, timeout=6000)
                #job_1 = q.enqueue(Monster()._signal, *_args, timeout=6000)
                """
                for job in [job_0, job_1, job_2, job_3]:
                    RQueue()._meta(job, profile_id)
                """

                '''
                CareerBuilder()._search()
                GlassDoor()._search()
                Workopolis()._search()
                Linkedin()._search()
                Angellist()._search() 
                '''
                # TODO - fix indeed paginate
                # TODO - get job_posting_link, add keyword for job posting to signal
                # TODO - eliminate recruiters posting jobs for other companies
                # TODO - when queue is done - delete duplicate companies
                break
            break

    def _clean_link(self, link):
        #link = link.links
        link = link.replace("http://","")
        link = link.replace("https://","")
        link = "http://"+link
        return link

    def _daily_cron(self):
    #def _cron(self):
        print "daily cron"
        qry = json.dumps({'list_type':'signal'})
        details = {'where':qry, 'include':'profiles', 'count':True, 'limit':1000}
        details['order'] = "-createdAt"
        profiles = Parse().get('ProspectProfile', details).json()['results']

        for index, profile in pd.DataFrame(profiles).iterrows():
            print index, profile.profiles
            _profile = pd.DataFrame(profile.profiles).className.tolist()
            if 'HiringProfile' in _profile: 
                q.enqueue(Signals()._hiring, profile.objectId, timeout=6000)
            elif 'PressProfile' in _profile:
                q.enqueue(Press()._daily_collect, profile.objectId, timeout=6000)
            elif 'IndustryPressProfile' in _profile:
                q.enqueue(Press()._daily_industry_collect, profile.objectId, 
                          timeout=6000)
            elif 'TwitterProfile' in _profile:
                q.enqueue(Twitter()._daily_collect, profile.objectId, timeout=6000)

        # TODO - Secondary news from ClearSpark
        #q.enqueue(ClearSpark()._daily_news)

    def _cron(self):
        conn = rethink_conn.conn()
        profiles = list(r.table("prospect_profiles").run(conn))
        for profile in profiles:
            _profile = [i["className"] for i in profile["profiles"]]
            #print _profile
            print "DEPLOYBOT"
            if 'HiringProfile' in _profile: 
                q.enqueue(Signals()._hiring, profile, timeout=6000)
            elif 'PressProfile' in _profile:
                q.enqueue(Press()._daily_collect, profile, timeout=6000)
            elif 'IndustryPressProfile' in _profile:
                q.enqueue(Press()._daily_industry_collect, profile, timeout=6000)
            elif 'TwitterProfile' in _profile:
                q.enqueue(Twitter()._daily_collect, profile.objectId, timeout=6000)

    def _twitter_cron(self):
        ''' '''

    def _hourly_cron(self):
        # TODO - add twitter hashtag search
        ''' '''

