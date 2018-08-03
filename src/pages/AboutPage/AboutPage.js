import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
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
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              <span className="highlight">In  love with software development and
              everything AI.</span> 
            </p>
            <p>
              Trying out new things and taking lead is what gets me up in the morning. I am <span className="highlight"> beyond passionate</span> with what I do and I love diversifying myself in interesting and evolving fields. I am both involved and intrigued by the fields of machine learning, full stack, VR and AR development. 
              Additionally, I'm very invested in project management and entrepenuership. Applying my skills by building efficient and practical solutions is my mission.
            </p>
            <p>
              I'm constantly on the lookout for new opportunities that introduce me to ambitious, motivated and intelligent people. 
              If that resonates with you, hit me up and let's chat!
            </p>

            <p className="text-emoji" style={{ color: colorPrimary }}>
              \ (•◡•) /
            </p>
            
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
