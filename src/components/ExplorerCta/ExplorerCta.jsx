import React, { Component } from "react";
import TreeView from "../TreeView";

import "./ExplorerCta.scss";

class ExplorerCta extends Component {
  render(){
    return(
      <div className="explorerCta">
        <TreeView />
    </div>
    )
  }
}

export default ExplorerCta;
