import { UPDATE_MARKET } from "../../constants/action-types";

const initialState = "NYSE";

export default function updateMarket(state = initialState, { type, payload }) {
  switch (type) {
    case UPDATE_MARKET:
      //return { ...state, longOnly: payload };
      return payload;
    default:
      return state;
  }
}
