import { ActionType } from "./actions";

const initialState = {
  topics: [],
  topic: [],
  loading: true,
};

export const forumReducer = (state = initialState, action: any) => {
  
  switch (action.type) {

    case ActionType.GET_TOPICS:
      return {
        ...state,
        topics: action.payload,
        loading: false,
      };
      case ActionType.DELETE_TOPIC:
      case ActionType.ADD_TOPIC:
      case ActionType.UPDATE_TOPIC:
        return {
          ...state,
          loading: false,
        };
      case ActionType.GET_TOPIC_BY_ID: 
        return {
          ...state,
          topic: action.payload,
          loading: false,
        };
      case ActionType.DELETE_COMMENT:
        return {
          ...state,
          loading: false,
        };
    default:
    return state;
  }
};


