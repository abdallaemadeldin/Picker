import { createAction, createReducer } from '@reduxjs/toolkit';

export const generateNumbers = createAction('home/generate');
export const assignNumbers = createAction('home/assign');

const initState = {
    values: [],
}

export default createReducer(initState, {
    [assignNumbers]: (state, action) => {
        const values = action.payload.values;
        return {
            ...state,
            values
        };
    }
});