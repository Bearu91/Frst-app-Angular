
import { Dictionary } from "./dictionary-model";
import { createAction, props } from '@ngrx/store'




export const loadDictionaries = createAction('[Dictionary] Load');
export const loadDictionariesSuccess = createAction('[Dictionary] Load Success', props<{dictionaries: Dictionary[]}>());
export const deleteTask = createAction('[Task] Delete', props<{ _id: string }>());
export const deleteTaskSuccess = createAction('[Task] Delete Success', props<{ _id: string }>());
