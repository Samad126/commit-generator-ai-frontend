export type FilePair = {
  old: string;
  new: string;
};

export type PlainTextPayload = {
  plainText: string;
  isPair: boolean;
};

export type FileChangePayload = {
  pairs: FilePair[];
  isPair: boolean;
};

export type GenerateCommitForm = {
  plainText: string;
  ""?: string;
  pairs: FilePair[];
};

export type GenerateCommitRaw = Partial<GenerateCommitForm>;

export type GenerateCommitPayload = PlainTextPayload | FileChangePayload;

export type GenerateCommitSuccessResponse = {
  aiResponse: string;
};
