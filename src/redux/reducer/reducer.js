import { initialState } from "../../Pages/Home/mockData";
export const GET_DETAIL = "GET_DETAIL";
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL:
      return state;
    default:
      return state;
  }
};

export default Reducer;
