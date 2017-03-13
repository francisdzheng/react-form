import React, { Component } from 'react';

export default class Phone extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  errorCheck(value) {
    return value.trim().match(/^[(]\d{3}[)][-]\d{3}[-]\d{4}$/);
  }

  handleSubmit(event) {
    if (!this.errorCheck(this.state.value)) {
      alert("'" + this.state.value + "' is not in the correct format. Please enter the");
    } else {
      alert("'" + this.state.value + "' was submitted as your phone number.");
    }

  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Phone:
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Phone Number" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
