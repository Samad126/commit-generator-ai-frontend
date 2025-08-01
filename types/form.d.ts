type GenerateCommitForm = {
  plainText: string;
  "": string;
  pairs: FilePair[];
};

type FilePair = {
  old: string;
  new: string;
};

export type { GenerateCommitForm };
