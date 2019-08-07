import React, { Component } from "react";
import "./TreeView.scss";



class TreeView extends Component {
  onExpandChange = (event) => {
    event.item.expanded = !event.item.expanded
  }

  render() {
    const { data } = this.props;
    return (
      <>
        {
          data.map(node => 
             <TreeNode node={node} onExpandChange={this.onExpandChange}/>
          )}
      </>
    );
  }
}


const TreeNode = (props) => {
  const { node, onExpandChange } = props;
  return (
   <>
      <div onClick = {onExpandChange}>
        {node.text}
      </div>
      {
        node.expanded && node.items.map((childNode, idx) => <div className="childNode" key={`${childNode}_${idx}`}>
          {childNode.text}
        </div>)
      }
   </>
  )

}
export default TreeView;
