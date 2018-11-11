import { UPDATE_DATERANGE } from "../constants/action-types";

export const updateDateRange = dates => {
  return dispatch => {
    dispatch({
      type: UPDATE_DATERANGE,
      payload: dates
    });
  };
};
