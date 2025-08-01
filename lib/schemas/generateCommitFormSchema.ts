import * as yup from "yup";

export const schema = yup
  .object()
  .shape({
    plainText: yup.string().optional(),

    pairs: yup
      .array()
      .of(
        yup.object().shape({
          old: yup.string().optional(),
          new: yup
            .string()
            .optional()
            .test(
              "required-if-present",
              "New file content cannot be empty",
              function (value) {
                if (value !== undefined && value !== null) {
                  return value.trim().length > 0;
                }
                return true;
              }
            ),
        })
      )
      .min(1),
  })
  .test(
    "plainText-or-one-new",
    "You must provide either plain text or at least one pair of file changes",
    function (value) {
      const { plainText, pairs } = value || {};

      const hasPlainText =
        typeof plainText === "string" && plainText.trim().length > 0;

      const hasNewText = Array.isArray(pairs)
        ? pairs.some((p) => p.new && p.new.trim() !== "")
        : false;

      return hasPlainText || hasNewText;
    }
  );
