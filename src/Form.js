import React, { Component } from 'react';
import request from 'superagent';
import Name from './Name';
import Email from './Email';
import Phone from './Phone';

import './Form.css';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '',
      email: '',
      phone: '',
    };

    this._handleNameChange = this._handleNameChange.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleNameChange(e) {
    this.setState({[e.target.name]: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase()});
  }

  _handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  _handleSubmit(e) {
    e.preventDefault();
    if (this.state.first === '' || this.state.last === '' || this.state.email === '' || this.state.phone === '') {
      alert("Please fill out all blanks.");
      return;
    }

    let error = false;

    if (!this.checkEmail(this.state.email) && !this.checkPhone(this.state.phone)) {
      error = true;
      alert("Your e-mail address and phone number were not entered correctly. Please enter your e-mail address as *@*.*, and your phone number as (xxx)-xxx-xxxx.")
    } else if (!this.checkEmail(this.state.email)) {
      error = true;
      alert("Your e-mail address was not entered in the correct format. Please enter your e-mail address as follows: *@*.*");
    } else if (!this.checkPhone(this.state.phone)) {
      error = true;
      alert("Your phone number was not entered in the correct format. Please enter your phone number using numerals only as follows: (xxx)-xxx-xxxx")
    }

    if (!error) {
      request
        .post('http://webtier.christianle.com/v1/contact')
        .send({
          first: this.state.first,
          last: this.state.last,
          email: this.state.email,
          phone: this.state.phone,
        })
        .end(function(err, res){
          if (err || !res.ok) {
            alert('Oh no! Your response could not be submitted.');
          } else {
            alert('Your response was submitted successfully!' + JSON.stringify(res.body));
          }
        });
    }
  }

  checkEmail(email) {
    return email.trim().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  }

  checkPhone(phone) {
    return phone.trim().match(/^[(]\d{3}[)][-]\d{3}[-]\d{4}$/);
  }


  render () {
    return (
      <div className="main">
        First Name:
        <Name
          name="first"
          value={this.state.first}
          placeholder="Enter First Name"
          _handleChange={this._handleNameChange}
        />
        Last Name:
        <Name
          name="last"
          value={this.state.last}
          placeholder="Enter Last Name"
          _handleChange={this._handleNameChange}
        />
        E-mail Address:
        <Email name="email" _handleChange={this._handleChange} />
        Phone Number:
        <Phone name="phone" _handleChange={this._handleChange} />
        <button onClick={this._handleSubmit}>Submit</button>
      </div>
    );
  }
}
