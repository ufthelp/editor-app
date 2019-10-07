import React, {Component} from 'react';

export default class DetailCellRender extends Component {
    constructor(props) {
        super(props)
    }

    handleClick = () =>{
        
    }

    render() {
        return (
            <span>
                <input type='text' value={this.props.value} />
                <button onClick={this.handleClick}> Expand </button>
            </span>
        );
    }
}

