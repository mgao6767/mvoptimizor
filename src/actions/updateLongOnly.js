import { UPDATE_LONG_ONLY } from "../constants/action-types";

export const updateLongOnly = value => ({
  type: UPDATE_LONG_ONLY,
  payload: value
});
