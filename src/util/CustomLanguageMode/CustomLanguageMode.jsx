import CustomHighlightRules from '../CustomHighlightRules'
import "brace/mode/groovy";

class CustomLanguageMode extends window.ace.acequire("ace/mode/groovy")
  .Mode {
  constructor() {
    super();
    this.HighlightRules = CustomHighlightRules;
  }
}


export default CustomLanguageMode;

