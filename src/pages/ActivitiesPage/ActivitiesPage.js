import React from 'react';
import PropTypes from 'prop-types';
import ScrollToPrevious from '@components/ScrollToPrevious';
import './style.scss';
import hprinc from './assets/hprinc.png'
import htn from './assets/htn.png'
import startupw from './assets/startupw.png'
import strat from './assets/strat.png'
import ibmhack from './assets/ibmhack.png'
import agewell from './assets/agewell.png'

const ActivitiesPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="activities-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
      
        <h1 style={{ color: colorPrimary }}>Activities</h1>
        <br/><br/>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>

                 <div>
								<p className="12u 12u$(mobile)">
									<img src= {ibmhack} className="small-logo jobLogoAlign" style={{width: '12%'}} />
									<span><br/>IBM North American Hackathon - Developer & Team Lead (BYOT Category Winner, 2018)</span>
								</p>
                <br/><br/>
                </div> 

                 <div>
								<p className="12u 12u$(mobile)">
									<img src= {agewell} className="small-logo jobLogoAlign" style={{width: '12%'}} />
									<span><br/>AGE-WELL National Impact Challenge - Computer Vision Developer (2018)</span>
								</p>
                <br/><br/>
                </div> 


                <div>
								<p className="12u 12u$(mobile)">
									<img src= {htn} className="small-logo jobLogoAlign" style={{width: '12%'}} />
									<span><br/>Hack the North - Developer (IBM Award Honourable Mention, 2017)</span>
								</p>
                <br/><br/>
               </div>


                <div>
								<p className="12u 12u$(mobile)">
									<img src= {hprinc} className="small-logo jobLogoAlign" style={{width: '12%'}} />
									<span><br/>HackPrinceton - Developer (2017)</span>
								</p>
                <br/><br/>
                </div>
               


                <div>
								<p className="12u 12u$(mobile)">
									<img src= {startupw} className="small-logo jobLogoAlign" style={{width: '12%'}} />
                  <br />
									<span><br/>Startup Weekend - Product Manager (2017)</span>
								</p>
                <br/><br/>
                </div>

              


          </div>
        </div>
      </div>
      <ScrollToPrevious pageSelector=".about-page" />
    </div>
  );
};

ActivitiesPage.contextTypes = {
  theme: PropTypes.any
};

export default ActivitiesPage;
