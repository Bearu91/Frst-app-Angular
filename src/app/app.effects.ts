
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {EMPTY, exhaustMap, switchMap} from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { TaskService } from './task.service';
import * as actions from './app.actions';

@Injectable()
export class AppEffects {
  loadDictionaries$ = createEffect(() => this.actions$.pipe(
    ofType(actions.loadDictionaries),
    mergeMap(() => this.taskService.fetchDictionaries().pipe(
      map(dictionaries => {console.log(dictionaries)
        return actions.loadDictionariesSuccess({ dictionaries })}),
      catchError(() => EMPTY)

    ))
  ));
  deleteTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.deleteTask),
      switchMap(action =>
        this.taskService.deleteTask(action._id).pipe(
          map(() => actions.deleteTaskSuccess({ _id: action._id })),
          catchError(() => EMPTY)
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private taskService: TaskService
  ) {}
}
