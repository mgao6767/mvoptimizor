import { UPDATE_EXPECTED_RETURN_METHOD } from "../../constants/action-types";

const initialState = "geometric";

export default function updateExpectedReturnMethod(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case UPDATE_EXPECTED_RETURN_METHOD:
      return payload;
    default:
      return state;
  }
}
