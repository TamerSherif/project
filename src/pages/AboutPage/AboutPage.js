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
              I <span className="highlight">love Development</span> and
              everything AI.
            </p>
            <p>
              Trying out new things truly excites me. I am <span className="highlight"> beyond passionate</span> with what I do and I love diversifying myself in many fields {' '}
              . I am always seeking new challenges and comptetions in the community. I am both involved and intrigued by the fields of machine learning, full stack, VR and AR development. 
              Additionally, I'm also interested in project management, entrepenuership and business strategies. 
               I love enhancing my skills by being involved in the engineering community.
            </p>
            <p>
              I enjoy seeking ways to advance and enhance my skills and discuss new ideas. I'm always looking for opportunities that introduce me to ambitious, motivated and intelligent people. 
              I'm particularly looking for opportunities involved in software development, project management and startups.
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
