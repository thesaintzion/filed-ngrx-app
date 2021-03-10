import { createAction, props } from '@ngrx/store';
import { UserDetails } from 'src/app/models/UserDetails';
export const ADD_USER_DETAILS = createAction('[ADD_USER_DETAILS]', props<{userDetails: UserDetails}>())
export const RESET_USER_DETAILS =  createAction('[RESET_USER_DETAILS]');





