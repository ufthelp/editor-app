import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LeftPanel.scss';
import Icon from '../../UI/Icon';

class LeftPanel extends Component {
    static propTypes = {
        handleShowRightView: PropTypes.func.isRequired,
        selectedIndex: PropTypes.number.isRequired
    }

    render() {
        //icon types 
        const arrIconImages = ['file','search','code-branch'];
        const {handleShowRightView,selectedIndex} = this.props;
        
        return (
            <div className="leftPanelCta">
                {
                    arrIconImages.map((icon, idx) =>  
                        <div onClick={() => handleShowRightView(icon,idx)} key={idx}>
                            <Icon  
                                iconImage={icon} 
                                color={selectedIndex === idx ? 'white':''}
                            /> 
                        </div>
                    )
                }               
            </div>
        );
    }
}

export default LeftPanel;
