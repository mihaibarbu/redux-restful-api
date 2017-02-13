import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../utils/validations/category';
import { createCategory, addCategory } from '../../actions/categoriesActions';

class CategoryForm extends Component {
  state = {
    name: '',
    errors: {},
    isLoading: false
  }

  onChange = (e) => {
    if (!! this.state.errors[e.target.name]) {
      let errors = { ...this.state.errors };
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
      const { name } = this.state;
      this.setState({ errors: {}, isLoading: true });
      this.props.createCategory({ name })
      .then((response) => {
        this.props.addCategory(response.data);
        this.context.router.push('/category');
      })
      .catch((errors) => {
        let e = { ...errors };
        this.setState({ errors: e.response.data, isLoading: false });
      });
    }
  }

  render() {
    const { name, errors, isLoading } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Create new category</h1>

        <TextFieldGroup
          error={errors.name}
          field="name"
          label="Name"
          value={name}
          type="text"
          onChange={this.onChange}
        />

        <div className="form-group">
          <button disabled={isLoading} className="btn btn-primary">
            Create
          </button>
        </div>
      </form>
    );
  }
}

CategoryForm.propTypes = {
  createCategory: React.PropTypes.func.isRequired,
  addCategory: React.PropTypes.func.isRequired
}

CategoryForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(null, { createCategory, addCategory })(CategoryForm);
