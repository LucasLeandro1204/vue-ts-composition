export interface ChatMessageInterface {
  id: number,
  body: string,
  time: number,
  author: string,
};

export type ChatMessageArray = ChatMessageInterface[];
