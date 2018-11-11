import { UPDATE_FREQUENCY } from "../../constants/action-types";

const initialState = "daily";

export default function updateFrequency(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case UPDATE_FREQUENCY:
      return payload;
    //return { ...state, freq: payload };
    default:
      return state;
  }
}
