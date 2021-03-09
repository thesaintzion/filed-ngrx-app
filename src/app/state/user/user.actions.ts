import { createAction, props } from '@ngrx/store';
import { UserDetails } from 'src/app/models/UserDetails';
// export const add_user_details = createAction('add_user_details');
// export const reset_user_details = createAction('reset_user_details');
// export const user_api_loading = createAction('user_api_loading');
// export const user_api_success = createAction('user_api_success');
// export const user_api_error = createAction('user_api_error');

export const ADD_USER_DETAILS = createAction('[ADD_USER_DETAILS]', props<{userDetails: UserDetails}>())
export const RESET_USER_DETAILS =  createAction('[RESET_USER_DETAILS]');





