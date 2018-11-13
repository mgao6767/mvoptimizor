import { OPTIMIZATION_ERROR } from "../../constants/action-types";

const initialState = false;

export default function optimizationError(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case OPTIMIZATION_ERROR:
      return payload;
    default:
      return state;
  }
}
