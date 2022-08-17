import axios from 'axios';
import { Dispatch } from 'react';

import { USER } from '../types';
import { UrlSite } from '../../services/const';


export const ActionType = {
  ADD_THEME: 'ADD_THEME',
  GET_THEME: 'GET_THEME',
  UPDATE_THEME: 'UPDATE_THEME',
  USER: 'USER',
};

const REACT_APP_API = '/api/theme'


const getProfile = (profile: any) => ({
  type: USER,
  payload: profile
});


export const loadProfile = () => {
  return async (dispatch: Dispatch<any>) => {
    await axios.get(`${UrlSite.URL}/auth/user`,

      {
        withCredentials: true,
        headers: {
          'Accept': 'application/json',
        }
      },
    )
      .then(response => {
        dispatch(getProfile(response.data))
        dispatch(loadTheme(response.data.id));
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const updateProfileData = (newData: any) => {
  return (dispatch: Dispatch<any>) => {
    fetch(`${UrlSite.URL}/user/profile`, {
      credentials: 'include',
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        dispatch({
          type: USER,
          payload: data,
        });
      });
  };
};

export const updateProfileAvatar = (newAvatar: any) => {
  return (dispatch: Dispatch<any>) => {
    fetch(`https://ya-praktikum.tech/api/v2/user/profile/avatar`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        accept: 'application/json',
      },
      body: newAvatar,
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        dispatch({
          type: USER,
          payload: data,
        });
      });
  };
};

const themeAdded = () => ({
  type: ActionType.ADD_THEME,
});

const themeUpdated = () => ({
  type: ActionType.UPDATE_THEME,
});

const getTheme = (theme: any) => ({
  type: ActionType.GET_THEME,
  payload: theme,
});

export const addTheme = (theme: any) => {
  return async (dispatch: Dispatch<any>) => {
    await axios.post(`${REACT_APP_API}`,
      theme,
    )
      .then(response => {
        console.log('response', response.data)
        dispatch(themeAdded());
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const updateTheme = (userId: number, theme: any) => {
  return async (dispatch: Dispatch<any>) => {
    axios.put(`${REACT_APP_API}/${userId}`, theme)
      .then(response => {
        console.log('response', response.data)
        dispatch(themeUpdated());
        dispatch(loadTheme(userId));
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const loadTheme = (id: number) => {
  return async (dispatch: Dispatch<any>) => {
    await axios.get(`${REACT_APP_API}/${id}`)
      .then(response => {
        dispatch(getTheme(response.data.baseTheme))
      })
      .catch(error => {
        console.log(error)
      })
  }
}
