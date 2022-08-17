export const USER = 'USER';
export const FORUM = 'FORUM';
export const UPDATE_THEME = 'UPDATE_THEME';
export const GET_THEME = 'GET_THEME';


export interface User {
  baseTheme: any;
  id: any;
  first_name: string;
  second_name: string;
  email: string;
  login: string;
  phone: string;
  display_name: string;
  avatar: null | string;
}

export interface Forum {
  topicId: number
  topicName: string;
  topicText: string;
  ownerId: number
  comments: any
}
