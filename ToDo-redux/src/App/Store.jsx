import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "../Features/TodoSlice";
const store = configureStore({
  reducer: todoreducer,
});

export default store;
