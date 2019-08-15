import GroovyHighlightRules from '../GroovyHighlightRules'
import "brace/mode/groovy";

class GroovyLanguageMode extends window.ace.acequire("ace/mode/groovy")
  .Mode {
  constructor() {
    super();
    this.HighlightRules = GroovyHighlightRules;
  }
}


export default GroovyLanguageMode;

