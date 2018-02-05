import React, { Component } from 'react';

export default class ColorChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: true
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      allowEdit: newProps.allowEdit
    })
  }

  render() {
    return (
      <select onChange={(e)=>this.props.update(e.target.value)} 
        className="dropDownContainer" disabled={!this.state.allowEdit}>
        <option value="black"> Black </option>
        <option value="blue"> Blue </option>
        <option value="green"> Green </option>
      </select>
    )
  }
}