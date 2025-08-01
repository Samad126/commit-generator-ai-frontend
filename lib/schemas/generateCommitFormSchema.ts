import * as yup from "yup";

export const schema = yup.object().shape({
  plainText: yup.string().when("$inputType", {
    is: "plaintext",
    then: (s) => s.trim().required("Plain text description is required."),
    otherwise: (s) => s.optional(),
  }),
  pairs: yup.array().when("$inputType", {
    is: "filechange",
    then: (s) =>
      s
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
    otherwise: (s) => s.optional(),
  }),
});
