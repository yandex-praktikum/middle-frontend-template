
import axios from 'axios';
import { Dispatch } from 'react';

export const ActionType = {
  GET_TOPICS: 'GET_TOPICS',
  LOAD_TOPICS: 'LOAD_TOPICS',
  DELETE_TOPIC: 'DELETE_TOPIC',
  ADD_TOPIC: 'ADD_TOPIC',
  GET_TOPIC_BY_ID: 'GET_TOPIC_BY_ID',
  UPDATE_TOPIC: 'UPDATE_TOPIC',
  ADD_COMMENTS: 'ADD_COMMENTS', 
  DELETE_COMMENT: 'DELETE_COMMENT', 
};

const REACT_APP_API = '/api/topic'


const getTopics = (topics: any) => ({
  type: ActionType.GET_TOPICS,
  payload: topics,
});

const getTopic = (topic: any) => ({
  type: ActionType.GET_TOPIC_BY_ID,
  payload: topic,
});

const topicDeleted = () => ({
  type: ActionType.DELETE_TOPIC,
});

const topicAdded = () => ({
  type: ActionType.ADD_TOPIC,
});

const commentAdded = (comment:any) => ({
  type: ActionType.ADD_COMMENTS,
  payload: comment,
});

const topicUpdated = () => ({
  type: ActionType.UPDATE_TOPIC,
});

const commentDeleted = () => ({
  type: ActionType.DELETE_COMMENT,
});

export const loadTopics = () => {
  return async (dispatch: Dispatch<any>) => {
    await axios.get(`${REACT_APP_API}`, {withCredentials: true}) 
      .then(response => {
        dispatch(getTopics(response.data))
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const deleteTopic = (id: number) => {
  return async (dispatch: Dispatch<any>) => {
    axios.delete(`${REACT_APP_API}/${id}`)
      .then(response => {
        console.log('response', response)
          dispatch(topicDeleted());
          dispatch(loadTopics());
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const getTopicById = (id: number) => {
  return async (dispatch: Dispatch<any>) => {
    axios.get(`${REACT_APP_API}/${id}`)
      .then(response => {
        console.log('response', response.data)
        dispatch(getTopic(response.data));
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const updateTopic = (id: number, topic: any) => {
  return async (dispatch: Dispatch<any>) => {
    axios.put(`${REACT_APP_API}/${id}`, topic)
      .then(response => {
        console.log('response', response.data)
        dispatch(topicUpdated());
        dispatch(getTopicById(id));
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const addTopic = (topic: any) => {
  return async (dispatch: Dispatch<any>) => {
    await axios.post(`${REACT_APP_API}`,
      topic,
    )
      .then(response => {
        console.log('response', response.data)
        dispatch(topicAdded());
        dispatch(loadTopics());
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const addComment = (topicId: number, comment: any) => {
  return async (dispatch: Dispatch<any>) => {
    await axios.post(`${REACT_APP_API}/${topicId}/comment`,
      comment,
    )
      .then(response => {
        console.log('response', response.data)
        dispatch(commentAdded(response.data));
        dispatch(getTopicById(topicId));
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const deleteComment = (topicId: number, commentId: number) => {
  return async (dispatch: Dispatch<any>) => {
    axios.delete(`${REACT_APP_API}/${topicId}/comment/${commentId}`)
      .then(response => {
        console.log('response', response)
          dispatch(commentDeleted());
          dispatch(getTopicById(topicId));
      })
      .catch(error => {
        console.log(error)
      })
  }
}



