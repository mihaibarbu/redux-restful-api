import Validator from 'validator';
import _ from 'lodash';

export default function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.name)) {
    errors.name = 'The name field is required.';
  }

  return {
    errors,
    isValid: _.isEmpty(errors)
  }
}
