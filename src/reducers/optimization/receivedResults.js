import { RECEIVED_OPTIMIZATION_RESULTS } from "../../constants/action-types";

const initialState = null;

export default function receivedOptimizationResults(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case RECEIVED_OPTIMIZATION_RESULTS:
      return payload;
    default:
      return state;
  }
}
