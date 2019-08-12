import React, { PureComponent } from "react";
import Tabs from "../Tabs";
import NetworkGraph from "../../UI/NetworkGraph";
import Source from "../../UI/Source";
import Browse from "../Browse";
import { DataSet } from "vis-network";

import "./RightPanel.scss";

//data to be rendered in Network graph
const nodes = new DataSet([
  { id: 1, label: "Node 1" },
  { id: 2, label: "Node 2" },
  { id: 3, label: "Node 3" },
  { id: 4, label: "Node 4" },
  { id: 5, label: "Node 5" }
]);

// create an array with edges
const edges = new DataSet([
  { from: 1, to: 3 },
  { from: 1, to: 2 },
  { from: 2, to: 4 },
  { from: 2, to: 5 }
]);

const data = {
  nodes: nodes,
  edges: edges
};
const options = {
  autoResize: true,
  height: "100%",
  width: "100%"
};

class RightPanel extends PureComponent {
  state = {
    value: "//Default value",
    fileText: ""
  };

  onChange = content => {
    this.setState({
      value: content
    });
  };

  onFileSelection = event => {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onLoad = event => {
      console.log(event.target.result);
      this.setState({
        fileText : event.target.result
      })
    };
  };

  render() {
    const { fileText, value } = this.state;
    const sourceProps = {
      placeholder: "Placeholder Text",
      mode: "java",
      theme: "twilight",
      name: "source",
      fontSize: "14",
      highlightActiveLine: true,
      value,
      width: "100%",
      showGutter: false,
      height: "100%",
      setOptions: {
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2
      },
      onChange: this.onChange
    };
    return (
      <div className="rightPanelCta">
        <div className="tab">
          <Tabs>
            <div header="Index.jsx">You are on Index.jsx file</div>
            <div header="Panel.jsx">You are on Panel.jsx file</div>
            <div header="Source">
              <Browse onFileSelection={this.onFileSelection} />
              { !!fileText ?  <Source {...sourceProps} /> : null }
              {/* <Source {...sourceProps} /> */}
            </div>
            <div header="Graph">
              <NetworkGraph data={data} options={options} />
            </div>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default RightPanel;
