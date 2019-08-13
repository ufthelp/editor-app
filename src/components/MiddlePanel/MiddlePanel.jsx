import React, { Component } from "react";
import PropTypes from 'prop-types';
import Text from "../../UI/Text";
import ExplorerCta from "../ExplorerCta";
import SearchCta from "../SearchCta";
import ContextMenu from "../../UI/ContextMenu"
import "./MiddlePanel.scss";

const NOTIFICATION_STATES = {
  Explorer: <ExplorerCta />,
  Search: <SearchCta />
};

class MiddlePanel extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
    visibility: PropTypes.bool.isRequired
  }
  state = {
    isContextMenuVisible: false
  }

  //containerRef = React.createRef

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick)
  }

  componentWillMount() {
    document.removeEventListener('click', this.handleOutsideClick)
  }

  handleOutsideClick = evt => {
    this.setState({
      isContextMenuVisible: false,
      position: {
        x: 0,
        y: 0
      }
    })
  }

  handleContextMenu = evt => {
    evt.preventDefault();
    //find the click co-ordinates to show the context 
    const position = {
      x: evt.nativeEvent.clientX || 0, 
      y: evt.nativeEvent.clientY || 0
      // x,
      // y
    }
    this.setState({
      isContextMenuVisible: !this.state.isContextMenuVisible,
      position: position
    })
  }
  handleItemClick = item => {
    if(item === 'Rename'){
      
    }
  }
  render() {
    const { content, visibility } = this.props;
    const { isContextMenuVisible, position } = this.state
    return (
      <div 
          className={`middlePanelCta ${visibility ? 'showPanel' : 'hidePanel'}`} 
          ref={ref => { this.containerRef = ref }} 
          onContextMenu={this.handleContextMenu}>

        <Text content={content} />
        {NOTIFICATION_STATES[content]}

        {
          isContextMenuVisible ? 
                <ContextMenu 
                    items={['aplha', 'beta', 'gamma', 'Rename']} position={position} 
                    handleItemClick={this.handleItemClick}/> 
            : null
        }
      </div>
    );
  }
}

export default MiddlePanel;
