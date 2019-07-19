import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import './MiddlePanel.scss';


const MiddlePanel = ({ content }) => (
        <div className="middlePanelCta">
            <Text content={content} />
        </div>
    );


MiddlePanel.propTypes = {
    content: PropTypes.string.isRequired,
}

export default MiddlePanel;
