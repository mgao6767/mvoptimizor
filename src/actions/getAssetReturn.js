import {
  WAITING_ASSET_RETURN_RESULTS,
  ASSET_RETURN_ERROR,
  RECEIVED_ASSET_RETURN_RESULTS
} from "../constants/action-types";
import { URL_RETURNS } from "../constants/urls";

export const getAssetReturn = params => {
  let body = {
    json: true,
    start_date: params["dateRange"][0],
    end_date: params["dateRange"][1],
    tickers: params["tickers"],
    freq: params["freq"]
  };
  if ("weights" in params) {
    body.weights = params["weights"];
  }
  const init = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  };
  return dispatch => {
    dispatch({
      type: WAITING_ASSET_RETURN_RESULTS,
      payload: true
    });
    dispatch({
      type: ASSET_RETURN_ERROR,
      payload: false
    });
    fetch(URL_RETURNS, init)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch({
          type: RECEIVED_ASSET_RETURN_RESULTS,
          payload: data
        });
      })
      .then(() => {
        dispatch({
          type: WAITING_ASSET_RETURN_RESULTS,
          payload: false
        });
      })
      .catch(error => {
        dispatch({
          type: ASSET_RETURN_ERROR,
          payload: true
        });
        dispatch({
          type: WAITING_ASSET_RETURN_RESULTS,
          payload: false
        });
      });
  };
};
