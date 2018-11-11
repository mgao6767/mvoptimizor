import { UPDATE_MARKET } from "../constants/action-types";

export const updateMarket = value => ({
  type: UPDATE_MARKET,
  payload: value
});
