import { initialState } from "../../Pages/Home/mockData";
import { ADD_USER, DELETE_USER, EDIT_USER } from "../type";
export const GET_DETAIL = "GET_DETAIL";
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER:
      const afterDelete = state.bodyData.filter((item) => {
        return item.id !== action.payload;
      });
      return { ...state, bodyData: afterDelete };
    case ADD_USER:
      const afterAdd = JSON.parse(JSON.stringify(state));
      afterAdd.bodyData.push(action.payload);
      return afterAdd;
    case EDIT_USER:
      const afterEdit = JSON.parse(JSON.stringify(state));
      afterEdit.bodyData.splice(action.payload.index, 1, action.payload.user);
      return afterEdit;
    default:
      return state;
  }
};

export default reducer;
