import React, { Component } from 'react';

export default class Email extends Component {
  render () {
    return (
      <div>
        <input
          type="text"
          name={this.props.name}
          onChange={this.props._handleChange}
          placeholder="Enter"
        />
      </div>
    );
  }
}
