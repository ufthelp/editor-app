import React from "react";
import AceEditor from "react-ace";

import "brace/mode/java"; //for rendering language = java in editor
import "brace/mode/groovy";
import "brace/theme/twilight"; //theme variable

import "./Source.scss";

const Source = ({...props}) => (
  <div className="editorWrapper">
    <AceEditor {...props} />
  </div>
);

export default Source;
