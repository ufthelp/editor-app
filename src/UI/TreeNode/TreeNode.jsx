import React, { Component } from "react";

import EditableLabel from "../EditableLabel";
import "./TreeNode.scss";

class TreeNode extends Component {
  
  state={
    data: this.props.node.text
  }

  handleChange = value => {
    this.setState({
      data: value
    })
  }

  render() {
    const { node, onExpandChange } = this.props;
    const {data} = this.state;
    return (
      <>
        <div onClick={() => onExpandChange(node)}>
          <EditableLabel data={data} save = {this.handleChange}/>
        </div>
        {node.expanded &&
          node.items.map((childNode, idx) => (
            <div className="childNode" key={`${childNode}_${idx}`}>
              {childNode.text}
            </div>
          ))}
      </>
    );
  }
}

export default TreeNode;
