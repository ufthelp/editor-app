import React, {Component} from 'react';
import './DetailCellRenderer.scss';

export default class DetailCellRenderer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstRecord: props.data,
            hideForm: true
        }
    }
    onClick = () => {
      console.count();
      // this.setState({
      //   hideForm: !this.state.hideForm
      //     });
      // this.props.refreshGridCallback()
          // var params = { force: true};
          // this.gridApi.refreshCells(params);

          this.setState({
            hideForm: !this.state.hideForm
            });


              // this.props.context.componentParent.methodFromParent(`Row: ${this.props.node.rowIndex}, Col: ${this.props.colDef.headerName}`)
  
      
      }

    formContent = () =>{
      return(
        <div>
        <form>
            <div>
              <p>
                <label>
                  Call Id:<br/>
                  <input type="text" value={this.state.firstRecord.account}/>
                </label>
              </p>
              <p>
                <label>
                  Number:<br/>
                  <input type="text" value={this.state.firstRecord.name}/>
                </label>
              </p>
              <p>
                <label>
                    Direction:<br/>
                    <input type="text" value={this.state.firstRecord.price}/>
                </label>
              </p>
            </div>
        </form>
        </div>
      )
    }

    refresh(params) {
      debugger
      this.setMood(params.value);
  }

    render() {
      const { hideForm } = this.state
      return (
        <span>
          <button  onClick={this.onClick} className="btn btn-info">
            Expand
          </button>
                  {!hideForm && this.formContent()}
        </span>
      );
    }
}


