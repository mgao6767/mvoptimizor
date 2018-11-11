import { UPDATE_COVARIANCE_METHOD } from "../constants/action-types";

export const updateCovarianceMethod = method => {
  return dispatch => {
    dispatch({
      type: UPDATE_COVARIANCE_METHOD,
      payload: method
    });
  };
};
