//import { GET_ASSET_RETURN } from "../constants/action-types";

export const getAssetReturn = ticker => {
  return fetch("http://adrianpc.lan:5000/AAPL")
    .then(res => res.json())
    .then(data => {
      return data;
    });
};
