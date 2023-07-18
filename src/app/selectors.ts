import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppState} from "./app.state";


export const selectTaskState = createFeatureSelector<AppState>('dictionaries');
export const selectTaskList = createSelector(
  selectTaskState,
  (state: AppState) => state?.dictionaries
);
