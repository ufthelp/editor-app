import React, {Component} from "react";
import AceEditor from "react-ace";
import CustomLanguageMode from '../../util/Groovy/GroovyLanguageMode';
//import CustomLanguageMode from '../../util/SQL/SQLLanguageMode';

import 'brace/mode/sql'; //for rendering language = java in editor
import 'brace/mode/groovy';
import 'brace/theme/twilight'; //theme variable
import 'brace/ext/language_tools' //autocompletion

import "./Editor.scss";

class Editor extends Component {
  aceEditor= React.createRef(); //ref to editor element
  
  componentDidMount() {
    const customMode = new CustomLanguageMode(); //custom rules, syntax highlighting
    this.aceEditor.current.editor.getSession().setMode(customMode)

    //autocompletion logic
    let langTools = window.ace.acequire('ace/ext/language_tools')
    langTools.setCompleters([langTools.snippetCompleter, langTools.keyWordCompleter])
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
