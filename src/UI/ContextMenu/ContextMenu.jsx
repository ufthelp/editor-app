import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './ContextMenu.scss';


class ContextMenu extends Component {
  render(){
    const {items, position, handleItemClick} = this.props;
    const contextMenuStyle = {
      'top': position.x,
      'left': position.y,
      'position': 'fixed',
    }
    return(
      <>
      {console.log("i am called" + position.y)}
          <ul className="contextCta"style={contextMenuStyle}>
            {
              items.map(item =>
                <li  key={item} onClick={() => handleItemClick(item)}>{item}</li>
              )
            }
          </ul>
      </>
    )
  }
}

ContextMenu.propTypes = {
  items: PropTypes.array.isRequired,
}

export default ContextMenu;
