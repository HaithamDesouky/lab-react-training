import React, { Component } from 'react';
import './SignUp.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      nationality: '',
      greeting: '',
      errorStyle: '5px red solid',
      emailError: false,
      passError: false,
    };
  }

  handleChange = (event) => {
    console.log('change');
    const value = event.target.value;
    const keys = event.target.name;

    let greeting = '';
    this.emailValidation();
    this.passValidation();
    this.setState({
      [keys]: value,
      greeting,
    });
  };

  emailValidation() {
    const emCheck = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    let emailError;
    if (emCheck.test(this.state.email)) {
      emailError = false;
    } else {
      emailError = true;
    }

    console.log(emailError);
    this.setState({
      emailError,
    });
  }

  passValidation() {
    const passCheck = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let passError;
    if (passCheck.test(this.state.password)) {
      passError = false;
    } else {
      passError = true;
    }

    console.log(passError);
    this.setState({
      passError,
    });
  }

  handleSubmission(event) {
    event.preventDefault();
    console.log('submitted');
  }

  render() {
    let greeting = 'hello';

    //  if (passwordRegex.test(this.state.password)) {
    //    console.log('password is ok');
    //  } else {
    //    console.log('bad pass');
    //  }

    switch (this.state.nationality) {
      case 'fr':
        greeting = 'Bonjour';
        break;
      case 'en':
        greeting = 'Whats up man!';
        break;
      case 'de':
        greeting = 'Guten Tag!';
        break;
      default:
        greeting = 'Bom Dia';
    }
    return (
      <div className="form-container">
        <h1>Please Sign Up</h1>
        <Form onSubmit={this.handleSubmission}>
          <FormGroup>
            <Label htmlFor="Email">Your email:</Label>
            <Input
              style={{
                border: this.state.emailError ? this.state.errorStyle : '',
              }}
              type="email"
              placeholder="Type your email here"
              id="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />{' '}
          </FormGroup>
          {this.state.emailError && 'You have made an error with your email'}

          <FormGroup>
            <Label htmlFor="Password">Password:</Label>
            <Input
              style={{
                border: this.state.passError ? this.state.errorStyle : '',
              }}
              type="password"
              placeholder="Please type a secure password"
              id="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </FormGroup>
          <FormGroup>
            <select
              id="nationality"
              name="nationality"
              onChange={this.handleChange}
              value={this.state.nationality}
            >
              <option value="de">German</option>
              <option value="en">English</option>
              <option value="fr">French</option>
            </select>
          </FormGroup>

          <Button>Submit</Button>
        </Form>

        <h1>{greeting}</h1>
        <p>
          <span></span> Your email is {this.state.email} and your pass is{' '}
          {this.state.password}
        </p>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default SignUp;
