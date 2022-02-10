import { combineReducers } from '@reduxjs/toolkit';
import { statistics } from '../modules/services/reducer';

export const rootReducer = combineReducers({
    statistics,
});
