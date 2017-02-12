import React, { Component } from 'react';
import { connect } from 'react-redux';

import validateInput from '../../utils/validations/login';
import TextFieldGroup from '../common/TextFieldGroup';
import { login } from '../../actions/authActions';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errors: {},
    isLoading: false
  };

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
      this.props.login(this.state).then(
        (response) => {
          this.context.router.push('/');
        },
      ).catch(errors => {
        let e = { ...errors };
        this.setState({ errors: e.response.data, isLoading: false });
      });
    }
  }

  onChange = (e) => {
    if (!! this.state.errors[e.target.name]) {
      let errors = { ...this.state.error};
      delete errors[e.target.name];
      this.setState({
        [e.target.name]: e.target.value,
        errors
      });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  render() {
    const { errors, username, password, isLoading } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>

        { errors.message &&
          <div className="alert alert-danger">{errors.message}</div>
        }

        <TextFieldGroup
          field="username"
          label="Email"
          value={username}
          error={errors.username}
          onChange={this.onChange}
          type="email"
        />

        <TextFieldGroup
          field="password"
          label="Password"
          value={password}
          error={errors.password}
          onChange={this.onChange}
          type="password"
        />

        <div className="form-group">
          <button className="btn btn-primary btn-lg" disabled={isLoading}>
            Login
          </button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  login: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(null, { login })(LoginForm);
