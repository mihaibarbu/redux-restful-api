import Validator from 'validator';
import _ from 'lodash';

export default function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.amount)) {
    errors.amount = 'The amount field is required.';
  }
  if (Validator.isEmpty(data.type)) {
    errors.type = 'The type field is required.';
  }
  if (Validator.isEmpty(data.note)) {
    errors.note = 'The note field is required.';
  }

  return {
    errors,
    isValid: _.isEmpty(errors)
  }
}
