import { UPDATE_COVARIANCE_METHOD } from "../../constants/action-types";

const initialState = "sample";

export default function updateCoverianceMethod(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case UPDATE_COVARIANCE_METHOD:
      return payload;
    default:
      return state;
  }
}
