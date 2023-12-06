import { applyMiddleware, createStore } from "redux";
import { reducer } from "../productReducer/reducer";
import thunk from 'redux-thunk'

export const store = createStore(reducer, applyMiddleware())
