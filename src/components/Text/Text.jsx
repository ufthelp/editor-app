import React from 'react';
import PropTypes from 'prop-types';

import './Text.css';

const Text = ({ content }) => (
    <div className="txtCta">
        {content}
    </div>
  );

  Text.propTypes = {
    content: PropTypes.string.isRequired,
}

export default Text;
