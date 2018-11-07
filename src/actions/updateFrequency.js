import { UPDATE_FREQUENCY } from "../constants/action-types";

export const updateFrequency = freq => {
  return dispatch => {
    dispatch({
      type: UPDATE_FREQUENCY,
      payload: freq
    });
  };
};
