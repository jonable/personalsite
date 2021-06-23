import * as types from './action_types';

import { END_POINTS } from '../../Global'

//action creator
export const _submitContactForm = (form_data) => {
    // dispatch action    
    return dispatch => {
        const end_point = END_POINTS.CONTACT_FORM
        
        dispatch(submitContactForm())
        // dispatch(successContactForm())
        fetch(end_point, {
            method: "POST",
            body: JSON.stringify(form_data),
            mode: "cors",
        })
        .then(response => { if (!response.ok) { throw response } })
        .then(response => {
            dispatch(successContactForm())
            setTimeout(() => {
                dispatch(resetContactFormData())
            }, 5000);
        })
        .catch(error => {
            dispatch(errorContactForm(error))
            setTimeout(() => {
                dispatch(resetContactFormData())
            }, 5000);
        })
    }    
}

export const submitContactForm = () => {    
    return { 
        type: types.FORM_SUBMITTING, 
    }
}

export const successContactForm = () => {   
    return { 
        type: types.FORM_SUCCESS,
    }
}

export const errorContactForm = () => {
    return { 
        type: types.FORM_HAS_ERRORS,
    }
}

export const resetContactFormData = () => {
    return {
        type: types.FORM_RESET,
        form_state: "",
        form_data: {}
    }
}

export const updateContactFormData = (field) => {
    return {
        type: types.FORM_UPDATE_DATA,
        form_data: {...field},
        form_state: types.FORM_UPDATE_DATA,
    }
}

