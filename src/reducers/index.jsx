import { combineReducers } from "redux";
import updateDateRange from "./updateDateRange";
import updateLongOnly from "./updateLongOnly";
import updateFrequency from "./updateFrequency";
import updateMarket from "./updateMarket";
import updateSelectedAssets from "./updateSelectedAssets";
import updateExpectedReturnMethod from "./updateExpectedReturnMethod";
import updateCovarianceMethod from "./updateCovarianceMethod";
import waitingOptimizationResults from "./optimization/waitingResults";
import receivedOptimizationResults from "./optimization/receivedResults";
import optimizationError from "./optimization/optimizationError";
import updatePortfolioSelectionMethod from "./updatePortfolioSelectionMethod";

const rootReducer = combineReducers({
  dateRange: updateDateRange,
  longOnly: updateLongOnly,
  freq: updateFrequency,
  market: updateMarket,
  selectedAssets: updateSelectedAssets,
  expectedReturnMethod: updateExpectedReturnMethod,
  covarianceMethod: updateCovarianceMethod,
  waitingResults: waitingOptimizationResults,
  optimizationResults: receivedOptimizationResults,
  optimizationError: optimizationError,
  portfolioSelectionMethod: updatePortfolioSelectionMethod
});

export default rootReducer;
