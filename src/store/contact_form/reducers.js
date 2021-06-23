// reducers hold the store's state (the initialState object defines it)
// reducers also handle plain object actions and modify their state (immutably) accordingly
// this is the only way to change the store's state
// the other exports in this file are selectors, which is business logic that digests parts of the store's state
// for easier consumption by views

import * as types from './action_types';


const initialState = {
    form_state: '',
    form_data: {}
}

export default function reduce(state = initialState, action = {}){    
    switch (action.type) {
        case types.FORM_SUBMITTING:
        case types.FORM_SUCCESS:
        case types.FORM_HAS_ERRORS:
            return {
                ...state,
                form_state: action.type,
            } 
        case types.FORM_UPDATE_DATA:
            return {
                ...state,
                form_data: { ...state.form_data, ...action.form_data },
                form_state: action.form_state
            }          
        case types.FORM_RESET:
            return {
                ...state,
                form_state: types.FORM_RESET,
                form_data: action.form_data
            }         
        default:
            return {
                ...state,
                form_state: "",
                form_data: {}
            }
    }
}


// selectors
export const getFormState = (state) => {
    return state.contact_form.form_state
}

export const getFormData = (state) => {
    return state.contact_form.form_data
}