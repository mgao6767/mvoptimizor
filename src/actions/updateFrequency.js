import { UPDATE_FREQUENCY } from "../constants/action-types";

export const updateFrequency = freq => ({
  type: UPDATE_FREQUENCY,
  payload: freq
});
