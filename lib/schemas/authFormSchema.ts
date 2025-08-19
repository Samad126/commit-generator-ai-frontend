import * as yup from "yup";

const emailRegex =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x21\x23-\x5b\x5d-\x7f]|\\[\x21-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x21-\x5a\x53-\x7f]|\\[\x21-\x7f])+)\])/i;

export const registerformschema = yup.object().shape({
  username: yup.string().required("Username is required."),
  email: yup
    .string()
    .matches(emailRegex, "Invalid email")
    .required("Email is required."),
  password: yup.string().required("Password is required."),
  confirmPassword: yup
    .string()
    .required("Confirm password is required.")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export const loginformschema = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegex, "Invalid email")
    .required("Email is required."),
  password: yup.string().required("Password is required."),
});
