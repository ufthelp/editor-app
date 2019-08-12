import React, { Component } from "react";

import { Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./Browse.scss";

class Browse extends Component {
 // reader = new FileReader();

  // onFilesChange = event => {
  //   let file = event.target.files[0];
  //   this.reader.onload = function(event) {
    
  //     console.log(event.target.result);
  //   };

  //   this.reader.readAsText(file);
  // };

  // onFilesError = (error, file) => {
  //   console.log("error code " + error.code + ": " + error.message);
  // };

  render() {
    const { onFileSelection } = this.props;
    return (
      <>
        <Header as="h4" color="red">
          <label className="fileContainer">
            Browse
            <input type="file" onChange={e => onFileSelection(e)} />
          </label>
        </Header>
      </>
    );
  }
}

export default Browse;
