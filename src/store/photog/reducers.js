
import * as types from './action_types';

const initialState = {
    gallery_id: null,
    current_image_id: null,
    is_full_screen: false,
}

export default function reduce(state = initialState, action = {}) {    
    switch (action.type) {        
        case types.PHOTOG_VIEW_GALLERY:
            return {
                ...state,
                gallery_id: action.gallery_id
            }
        case types.PHOTOG_VIEW_IMAGE:
            return {
                ...state,
                current_image_id: action.current_image_id,
                is_full_screen: action.is_full_screen
            }
        case types.PHOTOG_NEXT_IMAGE:
        case types.PHOTOG_PREV_IMAGE:
            return {
                ...state,
                current_image_id: action.current_image_id
            }
        case types.PHOTOG_VIEW_FULLSCREEN:
            return {
                ...state,
                is_full_screen: action.is_full_screen
            }
        default:
            return { ...state }
    }
}

export const getCurrentGallery = (state) => {
    return state.photog.gallery_id
}

export const getCurrentImage = (state) => {
    return state.photog.current_image_id
}

export const getIsFullScreen = (state) => {
    return state.photog.is_full_screen
}