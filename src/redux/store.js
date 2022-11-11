import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from "./reducer/rootReducer";

const Store = createStore(RootReducer, composeWithDevTools());

export default Store;
