import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Icon.scss';

const Icon = ({ iconImage, size, color }) => (
    <div className="iconCta">
        <FontAwesomeIcon icon={iconImage} size={size} color={color}/>
    </div>
  );

  Icon.propTypes = {
    iconImage: PropTypes.string.isRequired,
    size: PropTypes.string,
    color : PropTypes.string
}

Icon.defaultProps = { 
    size: '2x',
    color: 'gray'
 };

export default Icon;
