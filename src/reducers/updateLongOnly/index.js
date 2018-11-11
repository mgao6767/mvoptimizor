import { UPDATE_LONG_ONLY } from "../../constants/action-types";

const initialState = true;

export default function updateLongOnly(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case UPDATE_LONG_ONLY:
      //return { ...state, longOnly: payload };
      return payload;
    default:
      return state;
  }
}
