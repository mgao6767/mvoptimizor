import { UPDATE_EXPECTED_RETURN_METHOD } from "../constants/action-types";

export const updateExpectedReturnMethod = method => {
  return dispatch => {
    dispatch({
      type: UPDATE_EXPECTED_RETURN_METHOD,
      payload: method
    });
  };
};
