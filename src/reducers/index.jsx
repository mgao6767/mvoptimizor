import { combineReducers } from "redux";
import updateDateRange from "./updateDateRange";
import updateLongOnly from "./updateLongOnly";
import updateFrequency from "./updateFrequency";
import updateMarket from "./updateMarket";

const rootReducer = combineReducers({
  dateRange: updateDateRange,
  longOnly: updateLongOnly,
  freq: updateFrequency,
  market: updateMarket
});

export default rootReducer;
