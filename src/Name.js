import React, { Component } from 'react';

export default class Name extends Component {
  render () {
    return (
      <div>
          <input
            type="text"
            name={this.props.name}
            value={this.props.value}
            onChange={this.props._handleChange}
            placeholder={this.props.placeholder}
            required="true"
          />
      </div>
    );
  }
}
