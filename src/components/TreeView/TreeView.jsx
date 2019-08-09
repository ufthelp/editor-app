import React, { Component } from "react";
import "./TreeView.scss";

class TreeView extends Component {
  state = {
    data: [
      {
        text: "Furniture",
        expanded: true,
        items: [
          { text: "Tables & Chairs" },
          { text: "Sofas" },
          { text: "Occasional Furniture" }
        ]
      },
      {
        text: "Decor",
        items: [
          { text: "Bed Linen" },
          { text: "Curtains & Blinds" },
          { text: "Carpets" }
        ]
      }
    ]
  };

  onExpandChange = node => {
    const { data } = this.state;
    if (!node.expanded) {
      node["expanded"] = false;
    }
    node.expanded = !node.expanded;

    const updatedNode = data.map(item => {
      if (item.text === node.text) {
        return node;
      }
      return item;
    });

    this.setState({
      data: updatedNode
    });
  };

  render() {
    const { data } = this.state;
    return (
      <>
        {data.map(node => (
          <TreeNode key={`node_${node.text}`}node={node} onExpandChange={this.onExpandChange} />
        ))}
      </>
    );
  }
}

const TreeNode = props => {
  const { node, onExpandChange } = props;
  return (
    <>
      <div onClick={() => onExpandChange(node)}>{node.text}</div>
      {node.expanded &&
        node.items.map((childNode, idx) => (
          <div className="childNode" key={`${childNode}_${idx}`}>
            {childNode.text}
          </div>
        ))}
    </>
  );
};
export default TreeView;
