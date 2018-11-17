import { UPDATE_SELECTED_ASSETS } from "../../constants/action-types";

const initialState = [];

export default function updateSelectedAssets(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case UPDATE_SELECTED_ASSETS:
      return payload;
    default:
      return state;
  }
}
