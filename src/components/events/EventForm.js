import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextFieldGroup from '../common/TextFieldGroup';
import { createEvent } from '../../actions/eventActions';

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      type: '',
      note: '',
      category_id: 1,
      errors: {},
      isLoading: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.createEvent(this.state);
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
          errors={errors.amount}
          type="number"
        />
        <TextFieldGroup
          field="type"
          label="Type"
          value={type}
          onChange={this.onChange}
          errors={errors.type}
        />
        <TextFieldGroup
          field="note"
          label="Note"
          value={note}
          onChange={this.onChange}
          errors={errors.note}
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
