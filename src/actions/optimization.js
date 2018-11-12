import {
  WAITING_OPTIMIZATION_RESULTS,
  RECEIVED_OPTIMIZATION_RESULTS
} from "../constants/action-types";

export const postOptimizationParams = params => {
  const init = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      json: true,
      start_date: params["dateRange"][0],
      end_date: params["dateRange"][1],
      tickers: params["selectedAssets"]
    })
  };
  console.log("Optimization Parameters:", init);
  return dispatch => {
    dispatch({
      type: WAITING_OPTIMIZATION_RESULTS,
      payload: true
    });
    fetch("http://localhost:5000/optimization", init)
      .then(res => res.json())
      .then(data => {
        console.log("Optimization Results:", data);
        return dispatch => {
          dispatch({
            type: RECEIVED_OPTIMIZATION_RESULTS,
            payload: data
          });
        };
      })
      .then(
        dispatch({
          type: WAITING_OPTIMIZATION_RESULTS,
          payload: false
        })
      );
  };
};
