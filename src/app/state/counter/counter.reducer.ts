import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

 const initialState = {
    count: 0
};

const _counterReducer = createReducer(
  initialState,


  on(increment, (state) => {
      return { ...state, count: state.count + 1}
    }),

  on(decrement, (state) => {
        return { ...state, count: state.count === 0 ? 0 : state.count - 1 }
      }),

      on(reset, (state) => {
        return { ...state, count: 0 }
      })
//   on(decrement, (state) => state.count - 1),
//   on(reset, (state) => 0)
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}