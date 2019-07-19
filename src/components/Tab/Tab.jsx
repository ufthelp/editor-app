import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

import './Tab.scss';

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.string
  };
  
  static defaultProps = {
    icon: 'file'
  }

  //hover state for cross icon
  state = { hover: false };
  toggleHover = () => {
    this.setState({
      hover: !this.state.hover
    })
  }

  onClick = () => {
    const { header, onClick } = this.props;
    onClick(header);
  }

  render() {
    const { 
      onClick,
      props: {
        activeTab,
        header,
        icon
      },
    } = this;
    let className = 'tabListItem';
    const isActiveTab = (activeTab === header);

    if (activeTab === header) {
      className += ' tabListActive';
    }
    const { hover } = this.state;
    //cross icon is shown only when tab is active or user hover the tab
    const showing = hover || isActiveTab;

    return (
      <li 
        className={className}
        onClick={onClick}
        title={header}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
          <Icon  
              iconImage={icon} 
              size={"1x"}
              color={'white'}
            /> 
            <span className="text">
              {header}
            </span>

            <span 
              className={`icon ${!showing?'showIcon':''}`} 
              onMouseEnter={this.toggleHover} 
              onMouseLeave={this.toggleHover}
            >
              <Icon  
                iconImage={'times'} 
                size={"1x"}
                color={!isActiveTab ? 'white' :''}
                className={showing?'showIcon':''}
                /> 
            </span>
      </li>
    );
  }
}


export default Tab;