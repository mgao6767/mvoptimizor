import { UPDATE_LONG_ONLY } from "../constants/action-types";

export const updateLongOnly = value => {
  return dispatch => {
    dispatch({
      type: UPDATE_LONG_ONLY,
      payload: value
    });
  };
};
