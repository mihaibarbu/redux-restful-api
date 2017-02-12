import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextFieldGroup from '../common/TextFieldGroup';
import { createEvent } from '../../actions/eventActions';
import validateInput from '../../utils/validations/event';

class EventForm extends Component {
  state = {
    amount: '',
    type: '',
    note: '',
    category_id: 1,
    errors: {},
    isLoading: false
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (! isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.createEvent(this.state)
        .then((response) => {
          this.context.router.push('/');
        })
        .catch((errors) => {
          let e = { ...errors };
          this.setState({ errors: e.response.data, isLoading: false });
        });
    }
  }

  render() {
    const { amount, type, note, errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Create new event</h1>

        <TextFieldGroup
          field="amount"
          label="Amount"
          value={amount}
          onChange={this.onChange}
          error={errors.amount}
          type="number"
        />
        <TextFieldGroup
          field="type"
          label="Type"
          value={type}
          onChange={this.onChange}
          error={errors.type}
        />
        <TextFieldGroup
          field="note"
          label="Note"
          value={note}
          onChange={this.onChange}
          error={errors.note}
        />

        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    );
  }
}

EventForm.propTypes = {
  createEvent:  React.PropTypes.func.isRequired
}

export default connect(null, { createEvent })(EventForm);
