import React from 'react';
import PropTypes from 'prop-types';

import './style';

const Footer = (props, context) => {
  const { theme: { colorPrimary, textPrimary } } = context;
  return (
    <footer>
      <div className="content-grid">
        <div style={{ color: textPrimary }}>Improved on by <a href="https://github.com/tamersherif" target="_blank" rel="noopener noreferrer" style={{ color: colorPrimary }}>Tamer</a> <span role="img" aria-label="heart">❤️</span></div>
      </div>
    </footer>
  );
};

Footer.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default Footer;