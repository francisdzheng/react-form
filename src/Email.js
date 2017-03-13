import React, { Component } from 'react';

export default class Email extends Component {
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
    return value.trim().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  }

  handleSubmit(event) {
    if (!this.errorCheck(this.state.value)) {
      alert("'" + this.state.value + "' is not in the correct format. Please enter your e-mail address in the following format: *@*.*");
    } else {
      alert("'" + this.state.value + "' was submitted as your e-mail address.");
    }

  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          E-mail:
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="E-mail Address" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
