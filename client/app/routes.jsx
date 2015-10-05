var DataExplorer = require("table")
var UserDatasetTable = require("user_dataset_table")
var CreateTriggerModal = require("create_trigger_modal")

var TabbedArea = ReactBootstrap.TabbedArea
var TabPane = ReactBootstrap.TabPane
var SplitButton = ReactBootstrap.SplitButton
var MenuItem= ReactBootstrap.SplitButton
var Modal= ReactBootstrap.Modal
var Button = ReactBootstrap.Button
var Thumbnail= ReactBootstrap.Thumbnail

var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;

var About = React.createClass({
  render: function () {
    return <h2>About</h2>;
  }
});

var Inbox = React.createClass({
  render: function () {
    return <h2>Inbox</h2>;
  }
});

var Navbar = React.createClass({
  render: function() {
    return (
      <header className="header" style={{paddingTop:20,paddingBottom:40}}>
        <ul className="text-muted">
          <li className="app-logo">
            <div>
            <img src="images/blaze-logo.png" style={{marginTop:4,height:18,marginLeft:-15,display:"none"}}/>
            <div style={{}} style={{color:"#000",marginLeft:-20}}> TriggerIQ</div>
            </div>
          </li>
          <div style={{display:"none"}}>
            <li style={{fontWeight:"bold",color:"#0079ff",color:"#000"}}>DATASETS</li>
            <li>USERS</li>
            <li>EXPLORE</li>
            <li>COMPUTE</li>
            <li style={{float:"right",marginRight:50}}>LOGOUT</li>
          </div>
        </ul>
      </header>
    )
  }
})

var NewDatasetPanel = React.createClass({
  render: function() {
    return (
      <div className="col-md-offset-2 col-md-8">

        <div className="panel panel-default" style={{marginTop:20}}>
            <div className="panel-body" 
                 style={{paddingLeft:50,paddingRight:50}}>
              <h2 style={{fontWeight:800}}>Step 1: Add Dataset</h2>
              <span style={{fontWeight:400}} className="text-muted">
                Add dataset url with format hdfs://
              </span>
              <br/>
              <div>
              <hr/>
              <label htmlFor="inputEmail3" className="col-sm-2 control-label"
                style={{textAlign:"left",paddingTop:3,fontSize:18,fontWeight:800,paddingLeft:0,width:40}}>
                URL</label>
              <br/>
              <br/>
              <div className="col-sm-10" style={{paddingLeft:0}}>
                <input type="email" className="form-control" id="inputEmail3" placeholder="hdfs:// or postgres:// or mongo:// or s3:// or http://" style={{width: "124%"}}/>
              </div>
              <br/>
              <br/>
              <hr/>
              <label htmlFor="inputEmail3" className="col-sm-2 control-label"
                style={{textAlign:"left",paddingTop:3,fontSize:18,fontWeight:800,paddingLeft:0,width:40}}>
                DESCRIPTION</label>
              <br/>
              <br/>
              <div className="">
                <input type="email" className="form-control" id="inputEmail3" placeholder="hdfs:// or postgres:// or mongo:// or s3:// or http://" style={{width: "100%"}}/>
              </div>
              <br/>
              <hr/>

                <div className="radio">
                    <input type="radio" name="radio2" id="radio3" value="option1" />
                    <label htmlFor="radio3">
                      <i className="fa fa-database" /> &nbsp;
                      Public </label>
                </div>
                <div className="radio">
                    <input type="radio" name="radio2" id="radio4" value="option2" />
                    <label htmlFor="radio4">
                      <i className="fa fa-lock" /> &nbsp;
                      Private </label>
                </div>
              </div>
              <br />
              <a href="#" className="btn btn-lg btn-primary center-item"
                style={{width:200}}>
                CONTINUE</a>
              <br />
            </div>
        </div>
      </div>
    )
  }
})

// TODO: update to react 0.13.
var App = React.createClass({
  render: function() {
    return (
      <div className="app" >
        <div className="home-page">
          <Navbar />
        </div>
        <div className="container">
        <RouteHandler/>
        </div>
      </div>
    )
  }
});

var DatasetDetail = React.createClass({
  render: function() {
    return (
      <div>
        <br/>
        <div className="section-title" >Test Dataset</div>
        <ul className="dataset-detail">
          <li>Type</li>
          <li>Name</li>
          <li>Shape</li>
          <li>URL</li>
          <li>Date Added</li>
        </ul>
        <div style={{float:"right",marginTop:-55,fontWeight:800}}>
          
          <div style={{display:"inline-block",width:130}}>
          <a href="javascript:" className="btn btn-xs btn-default action-btn"
              style={{borderRight:0,borderRadius: "3px 0px 0px 3px !important"}}>
            <i className="fa fa-star"/>&nbsp;STAR  
          </a>
            <span className="action-badge"
                  style={{}}> 3.2M </span>
          </div>
          <div style={{display:"inline-block",width:130}}>
            <a href="javascript:" className="btn btn-xs btn-default action-btn"
                style={{borderRight:0,borderRadius: "3px 0px 0px 3px !important"}}>
            <i className="fa fa-code-fork"/> &nbsp;ANALYZE
          </a>
          <span className="action-badge"
            style={{}}> 
            3.2M 
          </span>
          </div> 
        </div>
        <hr/>
        <span>
          Zillow is in the process of diversifying our data sources and integrating dozens of new data feeds. 
          Ultimately, this wider diversity of data sources will lead to published data that is both more comprehensive and timely. But as this new data is incorporated, the publication of select metrics may be delayed or temporarily suspended as we work to ensure this new data meets our strict quality standards and fits into our existing datasets and databases. We look forward to resuming our usual publication schedule for all of our established datasets soon, and we apologize for any inconvenience. Thank you for your patience and understanding.
        <br/>
        <br/>



        </span>

        <TabbedArea defaultActiveKey={1}>
          <TabPane eventKey={1} tab='EXPLORE'><DataExplorer/></TabPane>
          <TabPane eventKey={2} tab='DISCUSSION'>TabPane 2 content</TabPane>
          <TabPane eventKey={3} tab='ANALYSIS'>TabPane 3 content</TabPane>
          <TabPane eventKey={4} tab='COLLABORATORS'>TabPane 3 content</TabPane>
          <TabPane eventKey={5} tab='VISUALIZATIONS'>TabPane 3 content</TabPane>
        </TabbedArea>
      </div>
    )
  }
})

var DatasetDiscussion = React.createClass({
  render: function() {
    return (
      <div>
        Discussion
      </div>
    )
  }
})

var DatasetAnalysis = React.createClass({
  render: function() {
    return (
      <div>
        Analysis
      </div>
    )
  }
})

var DatasetCollaborators = React.createClass({
  render: function() {
    return (
      <div>
        Collaborators
      </div>
    )
  }
})

var DatasetVisualizations = React.createClass({
  render: function() {
    return (
      <div>
        Visualizations
      </div>
    )
  }
})

var Main = React.createClass({
  getInitialState: function() {
    return {
      showCreateTriggerModal: false
    }
  },

  toggleCreateTriggerModal: function() {
    console.log("toggle")
    this.setState({ showCreateTriggerModal: !this.state.showCreateTriggerModal });
  },

  render: function() {
    return (
      <div className="container">
        <br/>
        <div className = "row">
          <div className="col-md-2">
            <span style={{fontWeight:"800"}}>TRIGGERS 
              <span style={{color:"#bbb",marginLeft:10,fontWeight:200}}>(18) </span>
            </span>

            <a href="javascript:" 
               className="btn btn-success btn-xs" 
               onClick={this.toggleCreateTriggerModal}
               style={{float:"right"}}>
              <i className="fa fa-plus"/></a>

            <hr/>
            <div style={{cursor:"pointer"}}>
              <div>
                <h5><i className="fa fa-twitter" /> &nbsp;
                  Twitter Trigger Name</h5>
                
                <h5><small>
                    <span style={{fontWeight:"bold"}}>Keywords: </span>
                      blah blah</small></h5>
              </div>
            </div>
            <hr/>
            <div style={{cursor:"pointer"}}>
              <h5> <i className="fa fa-suitcase" />&nbsp;
                Hiring Trigger Name</h5>
              <h5><small>Company Info blah blah</small></h5>
            </div>
            <hr/>
            <div style={{cursor:"pointer"}}>
              <h5> <i className="fa fa-bullhorn" />&nbsp;
                Press Trigger Name</h5>
              <h5><small>Company Info blah blah</small></h5>
            </div>
            <hr/>

          </div>
          <div className="col-md-10" style={{paddingLeft:30}}>
            <div style={{display:"block",marginLeft:"auto",marginRight:100,textAlign:"center",marginTop:8}}>
              <span style={{fontWeight:"800"}}>TODAY </span>
              <span style={{color:"#bbb"}}>August 28th</span>
            </div>
            <a href="javascript:" className="btn btn-success" style={{float:"right",marginTop:-90,display:"none"}}>Create Trigger</a>
            <a href="javascript:" className="btn btn-default btn-xs" style={{float:"right",marginTop:-25}}>List View</a>
            <br/>
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
          </div>
        </div>
        <CreateTriggerModal 
            showModal={this.state.showCreateTriggerModal}
            closeModal={this.toggleCreateTriggerModal}/>
      </div>
    )
  }
})


var CompanyDetailOverlay = React.createClass({
  render: function() {
    return (
      <div>
      </div>
    )
  }
})

var CompanyCard = React.createClass({
  render: function() {
    return (
          <div className="">
              <table>
                <tbody>
                  <tr>
                    <td>
                     <a href="#" className="thumbnail" 
                        style={{height:60,width:60,marginRight:15,float:"left",marginBottom:0}}>
                        <img src="images/radar_1.png" alt="..."/>
                      </a>
                    </td>
                    <td style={{padding:5,width:"35%"}}>
                      <h5>Company Card</h5>
                      <h5><small>Company Info blah blah</small></h5>
                    </td>
                    <td style={{padding:5,width:"35%"}}>
                      <h5></h5>
                      <h5><small>Tweeted out this workd blah blah</small></h5>
                    </td>
                    <td style={{padding:5,width:"35%"}}>
                      <h5></h5>
                      <div style={{height:25,width:25,border:"2px solid white",boxShadow:"0px 2px 4px 0px rgba(0,0,0,0.30)",backgroundImage:"url('images/user.png')",backgroundSize:"cover",borderRadius:25,display:"inline-block"}}> </div>
                      <div style={{height:25,width:25,border:"2px solid white",boxShadow:"0px 2px 4px 0px rgba(0,0,0,0.30)",backgroundImage:"url('images/user.png')",backgroundSize:"cover",borderRadius:25,display:"inline-block"}}> </div>
                      <div style={{height:25,width:25,border:"2px solid white",boxShadow:"0px 2px 4px 0px rgba(0,0,0,0.30)",backgroundImage:"url('images/user.png')",backgroundSize:"cover",borderRadius:25,display:"inline-block"}}> </div>

                    </td>
                    <td style={{padding:5}}>
                      <a href="javascript:" className="btn btn-primary btn-sm"><i className="fa fa-download"/></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
    )
  }
})

// declare our routes and their hierarchy
var routes = (
  <Route handler={App}>
    <Route path="" handler={Main}/>
    <Route path="about" handler={About}/>
    <Route path="inbox" handler={Inbox}/>
    <Route path="new_dataset" handler={NewDatasetPanel}/>
    <Route path="datasets" handler={UserDatasetTable}/>
    <Route path="/dataset/:id" handler={DatasetDetail}/>
    <Route path="/dataset/:id/discussion" handler={DatasetDiscussion}/>
    <Route path="/dataset/:id/analysis" handler={DatasetAnalysis}/>
    <Route path="/dataset/:id/collaborators" handler={DatasetCollaborators}/>
    <Route path="/dataset/:id/visualizations" handler={DatasetVisualizations}/>
  </Route>
);

module.exports = routes;
