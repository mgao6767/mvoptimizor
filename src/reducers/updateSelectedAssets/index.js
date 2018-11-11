import { UPDATE_SELECTED_ASSETS } from "../../constants/action-types";

const initialState = [];

export default function UPDATE_MARKET(state = initialState, { type, payload }) {
  switch (type) {
    case UPDATE_SELECTED_ASSETS:
      return payload;
    default:
      return state;
  }
}
