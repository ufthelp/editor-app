import React, {Component} from "react";
import AceEditor from "react-ace";
import CustomLanguageMode from '../../util/CustomLanguageMode';

import 'brace/mode/java'; //for rendering language = java in editor
import 'brace/mode/groovy';
import 'brace/theme/twilight'; //theme variable

import "./Editor.scss";

class Editor extends Component {
  aceEditor= React.createRef();
  
  componentDidMount() {
    const customMode = new CustomLanguageMode(); //custom rules, syntax highlighting
    this.aceEditor.current.editor.getSession().setMode(customMode)
  }
  render(){
    const {...props} = this.props;
    return(
        <AceEditor {...props}  
            ref={this.aceEditor}
         />
    )
  }
}


export default Editor;
