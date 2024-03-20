export interface Channel {
  id: number;
  name: string;
  members: number;
  description: string;
}

export interface Message {
  id: number;
  channelId: number;
  user: {
    name: string;
    role: string;
    avatarFilename: string;
  };
  time: string;
  content: string;
  threadMessages: number;
}

export interface Thread {
  id: number;
  parentId: number;
  user: {
    name: string;
    role: string;
    avatarFilename: string;
  };
  time: string;
  content: string;
}