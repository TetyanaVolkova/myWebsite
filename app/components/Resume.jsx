var React = require('react');

var Resume = (props) => {
	return (
		<div className="resumeWrapper">
			<div>
				<h1 className="text-center resume-title">Resume</h1>
				<h6 className="initial subheader text-center">Front End Developer</h6>
			</div>

            <div className="callout primary">
                <h3 className="text-center">Experience Summary</h3>

                <p className="col span-3-of-4 box long-copy">
                     I have over 7 years of Experience in both the Government and Commercial sectors. 
                     Worked in both Agile and Waterfall settings. Tested front-end code in multiple browsers 
                     to ensure cross-browser compatability. I have a solid knowledge and thorough grasp of 
                     Web fundamentals: HTTP, semantics HTML, CSS3, CSS preprocessors, DOM, JavaScript, 
                     AngularJS, GIT version control system, node modules such as npm, bower, gulp, grunt. 
                     With close attention to detail, I have experience in debugging websites and web browser bugs. 
                     Familiar with Google Chrome&#8217;s Developer Tools, test strategy, test plan. 
                     Created and implemented a custom CSS grid system, with CSS media queries for mobile 
                     responsiveness. I had my hands on industry trends and best practices (data binding, 
                     responsive design, modular unit-testable JavaScript etc.). I have working knowledge of a wide 
                     variety of component libraries and helper frameworks, such as Bootstrap, JQuery, 
                     Angular Material, React, AngularJS/single page app, Knockout, etc.
                </p>
            </div>
            <div className="callout secondary">

                <h5 className="subheader">2015 &#45; Present,</h5>
                <h5 className="subheader">NET ESOLUTIONS CORP. (NETE),</h5>
                <h5 className="subheader">Front End Developer</h5>

                    <h6>
                    	<strong> Front End Developer for NETE, currently working with a team of 7 on an Angular and React
                    	applications for the NIH National Institutes of Health, responsible for:</strong>
                	</h6>
                	<ol>
		                <ol>
		                    <li>Implementation of HTML/CSS/JavaScript, use AngularJS and React frameworks.</li>
		                    <li>Writing AngularJS and JavaScript logic for few NETE projects, debugging and fixing bugs.</li>
		                    <li>Using GIT to manage code on Github. Dealing with npm, bower, gulp and grunt task runners.</li>
		                    <li>Writing unit tests using Karma runner and Jasmine.</li>
		                    <li>Best Practices Research, browser compatibility, responsive design (Angular Material)</li>
		                    <li>Accessibility and Section 508 Compliance.</li>
		                </ol>
	                </ol>
            </div>

            <div className="callout secondary">
                <h5 className="subheader">2011 &#45; 2015,</h5> 
                <h5 className="subheader">Freelance,</h5>
                <h5 className="subheader"> Designer and Front End Developer</h5>
                    <h6>
                    <strong> As a part of freelancers team working for &#8216;Hessaweb&#8217; 
                    was responsible for:</strong>
                    </h6>
                <ol>
	                <ol>
	                    <li>Working to build a personal and business web pages.</li>
	                    <li>Preparing layout and planning the primary designs of the web sites.</li>
	                    <li>Designing websites in Wordpress and from scratch.</li>
	                </ol>
                </ol>
            </div>

            <div className="callout secondary">
                <h5 className="subheader">2009 &#45; 2011,</h5>
                <h5 className="subheader">Job Continent Inc. Contract for Dept. of Labor,</h5>
                <h5 className="subheader">Junior Developer</h5>
                    <h6><strong> Worked as a Junior Developer in a consulting startup 
                    subcontracting for DOL, wearing multiple hats:</strong>
            		</h6> 
                <ol>
	                <ol>
	                    <li>Collaborated with business stakeholders on clarifying the problem definition and a vision of user experience.</li>
	                    <li>Drafted UI mockups, built individual web pages, integrated with server-side technology providing the data.</li>
	                    <li>Adhered to a style guide, worked closely as part of a team of peers solving the problems together.</li>
	                    <li>Was responsible for running time-sheets, prepared weekly and monthly reports (Microsoft Project), communicated with the client regarding work scope and schedule evaluation.</li>
	                    <li>Was involved in manual and automated testing (using Selenium). Participated in Scrum, Planning, and Demo meetings inside the team and with the client as well.</li>
	                
	                </ol>
                </ol>
            </div>

            <div className="callout secondary">

                <h5 className="subheader">2003 &#45; 2006,</h5>
                <h5 className="subheader">Tranzact&#8217;s remote R&#38;D branch in Ukraine,</h5>
                <h5 className="subheader">office administrator</h5>
                    <h6>
                    <strong>In an offshore software development shop in Ukraine, wearing multiple hats:</strong>
                	</h6>
                <ol>
	                <ol>
	                    <li>Responsible for HR paperwork, payroll, filing taxes.</li>
	                    <li>Obtaining necessary licenses and inspections.</li>
	                    <li>Maintaining office supplies.</li>
	                    <li>Was doing manual and automated testing.</li>
                	</ol>
                </ol>
            </div>

            <div className="callout secondary">
                <h5 className="subheader">1997 &#45; 2000,</h5>
                <h5 className="subheader">FIVC(First International Virtual Corporation) Ukraine,</h5>
                <h5 className="subheader">Webmaster</h5>
                    <h6>
                    <strong>As a part of Developer team in Ukraine had a Webmaster role and was responsible for:</strong>
                    </h6>
                <ol>
	                <ol>
	                    <li>Maintaining multiple websites for FIVC&#8217;s clients.</li>
	                    <li>Marked up static HTML content given a graphical design and textual materials.</li>
	                    <li>Used CSS to separate styling from content markup.</li>
	                    <li>Leveraged FTP to upload updates to clients web sites.</li>
	                    <li>Participated in brainstorming sessions to come up with design ideas.</li>
	                </ol>
                </ol>
            </div>
		</div>
	);
}
module.exports = Resume;