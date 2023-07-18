// app.reducer.ts
import { createReducer, on } from '@ngrx/store';
import {deleteTaskSuccess, loadDictionariesSuccess} from './app.actions';
import { AppState } from "./app.state";

export const initialState: AppState = {
  dictionaries: []
};


export const appReducer = createReducer(
  initialState,
  on(loadDictionariesSuccess, (state, action) => {  return ({ ...state, dictionaries: action.dictionaries })}),
  on(deleteTaskSuccess, (state, action) => {
  return {
    ...state,
    dictionaries: state.dictionaries.filter(dict => dict.id !== action._id)
  };
})
);
