import os
import rethinkdb as r

def conn():
    if 'DEBUG' in os.environ:
        #conn = r.connect(db="triggeriq")
        conn = r.connect(db="triggeriq", 
                         auth_key="PPxYaDVvVmDhXccvM2qdGzFhyIdwcLpYSuyGIbTFD5c")
    else:
        conn = r.connect(
          host='rethinkdb_tunnel',
          #host=os.environ['RETHINKDB_HOST'],
          port=os.environ['RETHINKDB_TUNNEL_PORT_28015_TCP_PORT'],
          db=os.environ['RETHINKDB_DB'],
          auth_key=os.environ['RETHINKDB_AUTH_KEY']
        )
    return conn

def args():
    if 'DEBUG' in os.environ:
        #conn = r.connect(db="triggeriq")
        conn = {"db":"triggeriq", "auth_key":"PPxYaDVvVmDhXccvM2qdGzFhyIdwcLpYSuyGIbTFD5c"}
    else:
        conn = r.connect(
          host='rethinkdb_tunnel',
          #host=os.environ['RETHINKDB_HOST'],
          port=os.environ['RETHINKDB_TUNNEL_PORT_28015_TCP_PORT'],
          db=os.environ['RETHINKDB_DB'],
          auth_key=os.environ['RETHINKDB_AUTH_KEY']
        )

        conn = {
          "host":'rethinkdb_tunnel',
          #"host":os.environ['RETHINKDB_HOST'],
          "port":os.environ['RETHINKDB_TUNNEL_PORT_28015_TCP_PORT'],
          "db":os.environ['RETHINKDB_DB'],
          "auth_key":os.environ['RETHINKDB_AUTH_KEY']
        }
    return conn
