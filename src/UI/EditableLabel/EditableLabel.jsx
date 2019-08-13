import React, { Component } from "react";
import PropTypes from "prop-types";

import "./EditableLabel.scss";

class EditableLabel extends Component {
  static propTypes = {
    data: PropTypes.string.isRequired,
    save: PropTypes.func.isRequired
}

  state = {
    view: "label",
    localData: this.props.data //coming from parent component
  };

  //listeners when user clicks outside input
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  //create ref to input
  inputRef = React.createRef()

  handleClickOutside = evt => {
    if(!!this.inputRef.current && !this.inputRef.current.contains(evt.target)){
        const { localData } = this.state
        const { save } = this.props;
        this.toggleView('label') 
        save(localData)
    }
  }
  //change state from label to input and vice-versa
  toggleView = view => {
    this.setState({
      view
    });
  };
  //keep changes local to this component
  handleChange = value => {
      this.setState({
        localData: value
      })
  }
  //hanlde esc, enter scenario
  handleKeyUp = evt => {
    const { data, save } = this.props;
    const { localData } = this.state
    const key = evt.key;
    
    if(key === 'Escape'){
      this.handleChange(data)
      this.toggleView('label')
    }
    else if(key === 'Enter'){
      this.toggleView('label')
      this.handleChange(evt.target.value) 
      save(localData)
    }
  }
  renderLabel = () => {
    const { data } = this.props;
    return (
      <div>
        <span onClick={() => this.toggleView("input")}>{data}</span>
      </div>
    );
  };

  renderInput = () => {
    const {localData} = this.state;
    return (
      <div>
        <input
          value={localData}
          type="text"
          onChange={e => this.handleChange(e.target.value)}
          onBlur={() => this.toggleView("label")}
          onKeyUp = {e => this.handleKeyUp(e)}
          ref = {this.inputRef}
        />
      </div>
    );
  };
  render() {
    const { view } = this.state;
    if (view === "label") {
      return this.renderLabel();
    } else if (view === "input") {
      return this.renderInput();
    }
  }
}

export default EditableLabel;
