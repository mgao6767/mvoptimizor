import { UPDATE_DATERANGE } from "../constants/action-types";

export const updateDateRange = dates => ({
  type: UPDATE_DATERANGE,
  payload: dates
});
