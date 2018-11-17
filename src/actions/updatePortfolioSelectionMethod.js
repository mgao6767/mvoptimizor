import { UPDATE_PORTFOLIO_SELECTION_METHOD } from "../constants/action-types";

export const updatePortfolioSelectionMethod = method => {
  return dispatch => {
    dispatch({
      type: UPDATE_PORTFOLIO_SELECTION_METHOD,
      payload: method
    });
  };
};
