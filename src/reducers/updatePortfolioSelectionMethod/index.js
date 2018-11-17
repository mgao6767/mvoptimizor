import { UPDATE_PORTFOLIO_SELECTION_METHOD } from "../../constants/action-types";

const initialState = "hover";

export default function updatePortfolioSelectionMethod(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case UPDATE_PORTFOLIO_SELECTION_METHOD:
      return payload;
    default:
      return state;
  }
}
