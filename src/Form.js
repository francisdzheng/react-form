import React, { Component } from 'react';

import Name from './Name';
import Email from './Email';
import Phone from './Phone';

export default class Form extends Component {
  render () {
    return (
      <div>
        <Name />
        <Email />
        <Phone />
      </div>
    );
  }
}
