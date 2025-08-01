import * as yup from "yup";

export const schema = yup
  .object()
  .shape({
    inputType: yup.string().oneOf(["plaintext", "filechange"]).required(),
    plainText: yup.string().when("inputType", {
        is: "plaintext",
        then: (schema) => schema.trim().required("Plain text description is required."),
        otherwise: (schema) => schema.optional(),
    }),
    pairs: yup.array().when("inputType", {
      is: "filechange",
      then: (schema) =>
        schema
          .of(
            yup.object().shape({
              old: yup.string().optional(),
              new: yup
                .string()
                .trim()
                .required("New file content cannot be empty."),
            })
          )
          .min(1, "You must provide at least one file change."),
      otherwise: (schema) => schema.optional(),
    }),
  });