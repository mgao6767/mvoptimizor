import { WAITING_OPTIMIZATION_RESULTS } from "../../constants/action-types";

const initialState = false;

export default function waitingOptimizationResults(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case WAITING_OPTIMIZATION_RESULTS:
      return payload;
    default:
      return state;
  }
}
