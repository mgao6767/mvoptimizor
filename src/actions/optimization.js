import {
  WAITING_OPTIMIZATION_RESULTS,
  RECEIVED_OPTIMIZATION_RESULTS,
  OPTIMIZATION_ERROR
} from "../constants/action-types";
import { URL_OPTIMIZATION } from "../constants/urls";

export const postOptimizationParams = params => {
  const init = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      json: true,
      start_date: params["dateRange"][0],
      end_date: params["dateRange"][1],
      tickers: params["selectedAssets"],
      long_only: params["longOnly"],
      expected_return_method: params["expectedReturnMethod"],
      cov: params["covarianceMethod"]
    })
  };
  // console.log("Optimization Parameters:", init);
  return dispatch => {
    dispatch({
      type: WAITING_OPTIMIZATION_RESULTS,
      payload: true
    });
    dispatch({
      type: OPTIMIZATION_ERROR,
      payload: false
    });
    fetch(URL_OPTIMIZATION, init)
      .then(res => res.json())
      .then(data => {
        // console.log("Optimization Results:", data);
        dispatch({
          type: RECEIVED_OPTIMIZATION_RESULTS,
          payload: data
        });
      })
      .then(() => {
        dispatch({
          type: WAITING_OPTIMIZATION_RESULTS,
          payload: false
        });
      })
      .catch(error => {
        dispatch({
          type: OPTIMIZATION_ERROR,
          payload: true
        });
        dispatch({
          type: WAITING_OPTIMIZATION_RESULTS,
          payload: false
        });
      });
  };
};
