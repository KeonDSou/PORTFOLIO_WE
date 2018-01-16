import React from 'react';
import { withRouter, Link} from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Link as Go, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Projects = ({scrollTo}) => {

  const backgroundImage = '../../assets/screenshot_landing.jpg';

  return(
    <Row className="projects-section section container-fluid">
      <Element name="project-4" className="element" id="projects">
        <Row className="project-4">
          <Col xs={12} sm={10} smOffset={1} md={10} mdOffset={1} lg={10} lgOffset={1} className="project-tile">
            <div className="projects-heading-top center-text">
              <h3 className="span-pink"><span className="large-font">Projects...</span></h3>
              <h3 className="span-green">Some of my past work</h3>
            </div>

            <Col xs={12} sm={12} md={12} lg={6} className="project-image-left img-container">
              <img src={backgroundImage} alt="image04" className="project-img"/>
              <div className="img-middle-layer">
                <Link to="/project4"><div className="img-text-layer">TRACE</div></Link>
              </div>
            </Col>

            <Col xs={12} sm={12} md={12} lg={6} className="project-text-right">
              <h1 className="span-white"><span className="span-yellow">'TRACE'</span><span className="span-pink"> - </span><span className="span-blue text-small">Project 4</span></h1>

              <h2 className="span-green">MERN stack application</h2>

              <p className="span-white small-font">I created a competitive <span className="medium-font">running app</span> that encourages users to compete and upload the best running traces they’ve saved on the exercise app, <span className="medium-font">Strava</span>.</p>

              <p className="span-white small-font">The app uses the <span className="medium-font">Strava</span> and <span className="medium-font">Google Maps</span> APIs to help visualise the trace of real-life runs. People can the <span className="medium-font">comment</span> and <span className="medium-font">rate</span> runs submitted by the TRACE community.</p>

              <div className="projects-icons-box span-blue">
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-html5-plain-wordmark skill-icon"></i>
                <i className="devicon-css3-plain-wordmark"></i>
                <i className="devicon-react-original-wordmark"></i>
                <i className="devicon-sass-original"></i>
                <i className="devicon-bootstrap-plain-wordmark"></i>
                <i className="devicon-nodejs-plain-wordmark"></i>
                <i className="devicon-mongodb-plain-wordmark"></i>
                <i className="devicon-gulp-plain"></i>
                <i className="devicon-webpack-plain-wordmark"></i>
                <i className="devicon-git-plain-wordmark"></i>
                <i className="devicon-github-plain-wordmark"></i>
                <i className="devicon-heroku-line-wordmark"></i>
                <i className="devicon-trello-plain-wordmark"></i>
              </div>

            </Col>
          </Col>
        </Row>

        <Row className="project-3">
          <Col xs={12} sm={10} smOffset={1} md={10} mdOffset={1} lg={10} lgOffset={1} className="project-tile">
            <Col xs={12} sm={12} md={12} lg={6} className="project-image-left img-container">
              <img src="../../assets/screenshot_landingpage_project3.png" alt="image03" className="project-img"/>
              <div className="img-middle-layer">
                <Link to="/project3"><div className="img-text-layer">Gig.ly</div></Link>
              </div>
            </Col>

            <Col xs={12} sm={12} md={12} lg={6} className="project-text-right">
              <h1 className="span-white"><span className="span-yellow">'Gig.ly'</span><span className="span-pink"> - </span><span className="span-blue text-small">Project 3</span></h1>

              <h2 className="span-green">MEAN stack group project</h2>

              <p className="span-white small-font">In my group project, we created an app to help people plan their nights when going to gigs in London. We used real-life data from the <span className="medium-font">TicketMaster</span> API and to display event information and we displayed the locations using the <span className="medium-font">Google Maps</span> API.</p>

              <p className="span-white small-font">Within the app, users can <span className="medium-font">create</span> their own groups for each event and people can leave <span className="medium-font">comments</span> for others in the group.</p>

              <div className="projects-icons-box span-blue">
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-html5-plain-wordmark skill-icon"></i>
                <i className="devicon-css3-plain-wordmark"></i>
                <i className="devicon-angularjs-plain-wordmark"></i>
                <i className="devicon-sass-original"></i>
                <i className="devicon-bootstrap-plain-wordmark"></i>
                <i className="devicon-nodejs-plain-wordmark"></i>
                <i className="devicon-mongodb-plain-wordmark"></i>
                <i className="devicon-gulp-plain"></i>
                <i className="devicon-git-plain-wordmark"></i>
                <i className="devicon-github-plain-wordmark"></i>
                <i className="devicon-heroku-line-wordmark"></i>
                <i className="devicon-mocha-plain"></i>
                <i className="devicon-trello-plain-wordmark"></i>
              </div>

            </Col>
          </Col>
        </Row>

        <Row className="project-2">
          <Col xs={12} sm={10} smOffset={1} md={10} mdOffset={1} lg={10} lgOffset={1} className="project-tile">

            <Col xs={12} sm={12} md={12} lg={6} className="project-image-left img-container">
              <img src="../../assets/screenshot_landingpage.jpg" alt="image02" className="project-img"/>
              <div className="img-middle-layer">
                <Link to="/project2"><div className="img-text-layer">KatSuper Store</div></Link>
              </div>
            </Col>

            <Col xs={12} sm={12} md={12} lg={6} className="project-text-right">
              <h1 className="span-white"><span className="span-yellow">'KatSuper Store'</span><span className="span-pink"> - </span><span className="span-blue text-small">Project 2</span></h1>

              <h2 className="span-green">RESTful app</h2>

              <p className="span-white small-font">For my second app, I created a <span className="medium-font">RESTful</span> application with authentication so that users could <span className="medium-font">login</span> and <span className="medium-font">comment</span> on their favourite Katsu Curry spots they've found in London.</p>

              <p className="span-white small-font">Creating the KatSuper Store was also the first time I got used <span className="medium-font">SASS</span> and <span className="medium-font">EJS</span> in project.</p>

              <div className="projects-icons-box span-blue">
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-html5-plain-wordmark skill-icon"></i>
                <i className="devicon-css3-plain-wordmark"></i>
                <i className="devicon-sass-original"></i>
                <i className="devicon-bootstrap-plain-wordmark"></i>
                <i className="devicon-nodejs-plain-wordmark"></i>
                <i className="devicon-mongodb-plain-wordmark"></i>
                <i className="devicon-gulp-plain"></i>
                <i className="devicon-git-plain-wordmark"></i>
                <i className="devicon-github-plain-wordmark"></i>
                <i className="devicon-heroku-line-wordmark"></i>
                <i className="devicon-trello-plain-wordmark"></i>
              </div>

            </Col>
          </Col>
        </Row>

        <Row className="project-1">
          <Col xs={12} sm={10} smOffset={1} md={10} mdOffset={1} lg={10} lgOffset={1} className="project-tile">

            <Col xs={12} sm={12} md={12} lg={6} className="project-image-left img-container">
              <img src="../../assets/screenshot_game.jpg" alt="image01" className="project-img"/>
              <div className="img-middle-layer">
                <Link to="/project1"><div className="img-text-layer">Can You Diglett?</div></Link>
              </div>
            </Col>

            <Col xs={12} sm={12} md={12} lg={6} className="project-text-right">
              <h1 className="span-white"><span className="span-yellow">'Can You Diglett?'</span><span className="span-pink"> - </span><span className="span-blue text-small">Project 1</span></h1>

              <h2 className="span-green">JavaScript game</h2>

              <p className="span-white small-font">In my first project at GA, I created a simple block moving game purely using <span className="medium-font">JavaScript</span> and <span className="medium-font">CSS</span>. I emulated a retro gaming experience and based it around one of my favourite games growing up - <span className="medium-font">Pok&eacute;mon</span>.</p>

              <div className="projects-icons-box span-blue">
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-html5-plain-wordmark skill-icon"></i>
                <i className="devicon-css3-plain-wordmark"></i>
                <i className="devicon-jquery-plain-wordmark"></i>
                <i className="devicon-git-plain-wordmark"></i>
                <i className="devicon-github-plain-wordmark"></i>
                <i className="devicon-heroku-line-wordmark"></i>
                <i className="devicon-trello-plain-wordmark"></i>
              </div>
            </Col>
          </Col>
        </Row>


      </Element>
    </Row>
  );
};

export default withRouter(Projects);
