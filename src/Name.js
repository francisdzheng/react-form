import React, { Component } from 'react';

export default class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {first: '', last: ''};

    this.handleFirst = this.handleFirst.bind(this);
    this.handleLast = this.handleLast.bind(this);

    this.handleFirstSubmit = this.handleFirstSubmit.bind(this);
    this.handleLastSubmit = this.handleLastSubmit.bind(this);
  }

  handleFirst(event) {
    this.setState({first: event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1).toLowerCase()});
  }

  handleLast(event) {
    this.setState({last: event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1).toLowerCase()});
  }

  handleFirstSubmit(event) {
      alert("'" + this.state.first + "' was submitted as your first name.");
      event.preventDefault();
  }

  handleLastSubmit(event) {
      alert("'" + this.state.last + "' was submitted as your last name.");
      event.preventDefault();
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleFirstSubmit}>
          <label>
            First Name:
            <input type="text" value={this.state.first} onChange={this.handleFirst} placeholder="First Name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <form onSubmit={this.handleLastSubmit}>
          <label>
            Last Name:
            <input type="text" value={this.state.last} onChange={this.handleLast} placeholder="Last Name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
