import React, { Component } from 'react';

import validateInput from '../../utils/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';

export default class SignupForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    errors: {},
    isLoading: false
  }

  onChange = (e) => {
    if (!! this.state.errors[e.target.name]) {
      let errors = { ...this.state.errors};
      delete errors[e.target.name];
      this.setState({
        [e.target.name]: e.target.value,
        errors
      });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (! isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });

      this.props.userSignupRequest(this.state).then(
        (response) => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'You signed up successfully. Welcome!'
          })
          this.context.router.push('/');
        },
      ).catch(errors => {
        let e = { ...errors };
        this.setState({ errors: e.response.data, isLoading: false });
      });
    }
  }

  render() {
    const { errors, name, email, password, password_confirmation, isLoading } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community!</h1>
        <TextFieldGroup
          error={errors.name}
          label="Name"
          value={name}
          onChange={this.onChange}
          field="name"
        />

        <TextFieldGroup
          error={errors.email}
          label="Email"
          value={email}
          onChange={this.onChange}
          field="email"
          type="email"
        />

        <TextFieldGroup
          error={errors.password}
          label="Password"
          value={password}
          onChange={this.onChange}
          field="password"
          type="password"
        />

        <TextFieldGroup
          error={errors.password_confirmation}
          label="Password Confirmation"
          value={password_confirmation}
          onChange={this.onChange}
          field="password_confirmation"
          type="password"
        />

        <div className="form-group">
          <button disabled={isLoading} className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

SignupForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}
