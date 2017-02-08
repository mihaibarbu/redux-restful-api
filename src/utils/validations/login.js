import Validator from 'validator';
import _ from 'lodash';

export default function validateInput(data) {
  let errors = {};

  if (! Validator.isEmail(data.username)) {
    errors.username = 'The email must be a valid email address.';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'The password field is required.';
  }

  return {
    errors,
    isValid: _.isEmpty(errors)
  };
}
