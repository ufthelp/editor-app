import React, {Component} from "react";
import brace from 'brace';
import AceEditor from "react-ace";
import CustomLanguageMode from '../../util/Groovy/GroovyLanguageMode';
//import CustomLanguageMode from '../../util/SQL/SQLLanguageMode';

import 'brace/mode/sql'; //for rendering language = java in editor
import 'brace/mode/groovy';
import 'brace/theme/twilight'; //theme variable
import 'brace/ext/language_tools' //autocompletion

import "./Editor.scss";
const annotations = [
  {
    row: 1, // must be 0 based
    column: 1, // must be 0 based
    text: "error.message", // text to show in tooltip
    type: "error"
  }
];

class Editor extends Component {
  aceEditor= React.createRef(); //ref to editor element
  
  componentDidMount() {
    // const customMode = new CustomLanguageMode(); //custom rules, syntax highlighting
    // this.aceEditor.current.editor.getSession().setMode(customMode)
    //this.aceEditor.current.editor.getSession().$useWorker = false;
    
    // this.aceEditor.current.editor.getSession().setAnnotations([{
    //   row: 1,
    //   column: 0,
    //   text: "Error Message", // Or the Json reply from the parser 
    //   type: "error" // also "warning" and "information"
    // }]);
    //autocompletion logic
    // let langTools = window.ace.acequire('ace/ext/language_tools')
    // langTools.setCompleters([langTools.snippetCompleter, langTools.keyWordCompleter])
    this.updateAceEditor();
  }
 

  updateAceEditor() {
    const editor = this.aceEditor.current.editor;
   // const annotations = this._getAnnotations();
    editor.getSession().setAnnotations(annotations);
  }

  render(){
    const {props} = this;
    return(
        // <AceEditor {...props}  
        //     ref={this.aceEditor}
        //  />
        <AceEditor annotations={annotations}  setOptions={{ useWorker: true }}  ref={this.aceEditor}/>
    )
  }
}


export default Editor;
