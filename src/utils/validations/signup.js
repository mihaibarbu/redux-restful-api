import Validator from 'validator';
import _ from 'lodash';

export default function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.name)) {
    errors.name = 'The name field is required.';
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = 'The email field is required.';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'The email must be a valid email address.';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'The password field is required.';
  }
  if (Validator.isEmpty(data.password_confirmation)) {
    errors.password_confirmation = 'The password confirmation field is required.';
  }
  if (!Validator.equals(data.password, data.password_confirmation)) {
    errors.password = 'The password confirmation does not match.';
  }

  return {
    errors,
    isValid: _.isEmpty(errors)
  }
}
