import { createReducer, on } from '@ngrx/store';
import { ADD_USER_DETAILS } from './user.actions';
import { initialState} from './user.state';


const _userReducer = createReducer(
    initialState,
    on(ADD_USER_DETAILS, (state, action) => {
        return { ...state, userDetails: action.userDetails}
      })
  );

export function userReducer(state, action){
return _userReducer(state, action)
}