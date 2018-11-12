import { RECEIVED_OPTIMIZATION_RESULTS } from "../../constants/action-types";

const initialState = [];

export default function receivedOptimizationResults(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case RECEIVED_OPTIMIZATION_RESULTS:
      return state.concat(payload);
    default:
      return state;
  }
}
