import React, { Component } from 'react';

export default class FamilyChanger extends Component {
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
        <option value="monospace"> Monospace </option>
        <option value="arial"> Arial </option>
        <option value="courier"> Courier </option>
      </select>
    )
  }
}