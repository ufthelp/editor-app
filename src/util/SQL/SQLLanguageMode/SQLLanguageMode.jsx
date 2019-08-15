import SQLHighlightRules from '../SQLHighlightRules'
import "brace/mode/sql";

class SQLLanguageMode extends window.ace.acequire("ace/mode/sql")
  .Mode {
  constructor(rules) {
    super();
    debugger;
    this.HighlightRules = SQLHighlightRules;
  }
}


export default SQLLanguageMode;

