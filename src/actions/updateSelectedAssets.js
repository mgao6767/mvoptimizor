import { UPDATE_SELECTED_ASSETS } from "../constants/action-types";

export const updateSelectedAssets = selectedAssets => {
  return dispatch => {
    dispatch({
      type: UPDATE_SELECTED_ASSETS,
      payload: selectedAssets
    });
  };
};
