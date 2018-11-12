import { UPDATE_DATERANGE } from "../../constants/action-types";
import moment from "moment";

const initialState = [
  moment().subtract(1, "year"),
  moment().subtract(1, "day")
];

export default function updateDateRange(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case UPDATE_DATERANGE:
      if (payload.length) return payload;
      else return [moment().subtract(1, "year"), moment().subtract(1, "day")];
    // return {
    //   ...state,
    //   dateRange: [
    //     moment().subtract(1, "month"),
    //     moment().subtract(1, "day")
    //   ]
    // };
    default:
      return state;
  }
}
