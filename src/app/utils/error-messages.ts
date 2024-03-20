import { ErrorMessage } from "@models/error-message.model"

export const errorMessages: ErrorMessage[] = [
    {
      "name": "required",
      "message" : "this field is required"
    },
    {
      "name": "email",
      "message" : "Enter a valid email"
    },
    {
      "name": "min",
      "message" : "required min length is :min"
    },
    {
      "name": "max",
      "message" : "required max value is :max"
    },
    {
      "name": "minlength",
      "message" : "required min characters is :minlength"
    },
    {
      "name": "maxlength",
      "message" : "required max characters is :maxlength"
    },
    {
      "name": "pattern",
      "message" : "Enter a valid value"
    },
    {
      "name": "emailAlreadyExists",
      "message" : "Email already taken"
    },
    {
      "name": "phoneAlreadyExists",
      "message" : "Phone number already used"
    },
    {
      "name": "confirmPasswordInvalid",
      "message" : "Passwords do not match"
    }
  ]
  