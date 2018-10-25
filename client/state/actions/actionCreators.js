import * as types from './actionTypes';

export const testing = str => ({
  type: types.testing,
  payload: str
});

export const getNotifications = obj => ({
  type: types.NOTIFICATIONS,
  payload: obj
});
