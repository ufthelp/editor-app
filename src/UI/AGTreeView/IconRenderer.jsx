import React, {Component} from "react";

export default class IconRenderer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        }
    }

    formatValueToCurrency(currency, value) {
        return `${currency}${value}`
    }

    // noinspection JSUnusedGlobalSymbols
    refresh(params) {
        if(params.value !== this.state.value) {
            this.setState({
                value: params.value.toFixed(2)
            })
        }
        return true;
    }

    render() {
        return (
            // <span>{this.formatValueToCurrency('EUR', this.state.value)}</span>
            <span><img border="0" width="15" height="10" alt="sun" src="https://www.ag-grid.com/images/sun.png"/></span>
        );
    }
};
