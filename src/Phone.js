import React, { Component } from 'react';

export default class Phone extends Component {
  render () {
    return (
      <div>
          <input
            type="text"
            name={this.props.name}
            onChange={this.props._handleChange}
            placeholder="(xxx)-xxx-xxxx"
          />
      </div>
    );
  }
}
