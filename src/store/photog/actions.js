import * as types from "./action_types"

// what about url stuff?
export const openGallery = (gallery_id, callback) => {
    callback(gallery_id)
    return {
        type: types.PHOTOG_VIEW_GALLERY,
        gallery_id: gallery_id
    }
}

export const closeGallery = (callback) => {
    callback()
    return {
        type: types.PHOTOG_VIEW_GALLERY,
        gallery_id: null
    }
}

export const openImage = (current_image_id, callback) => {
    callback(current_image_id)
    return {
        type: types.PHOTOG_VIEW_IMAGE,
        current_image_id: current_image_id,
        is_full_screen: false
    }
}
export const closeImage = (callback) => {
    callback()
    return {
        type: types.PHOTOG_VIEW_IMAGE,
        current_image_id: null,
        is_full_screen: false
    }
}

export const viewNextImage = (current_image_id, callback) => {
    const next_image = current_image_id + 1
    callback(next_image)
    return {
        type: types.PHOTOG_NEXT_IMAGE,
        current_image_id: next_image
    }
}

export const viewPrevImage = (current_image_id, callback) => {
    const prev_image = current_image_id - 1
    callback(prev_image)
    return {
        type: types.PHOTOG_PREV_IMAGE,
        current_image_id: prev_image
    }
}

export const openFullScreen = () => {
    return{
        type: types.PHOTOG_VIEW_FULLSCREEN,
        is_full_screen: true
    }
}
export const closeFullScreen = () => {
    return {
        type: types.PHOTOG_VIEW_FULLSCREEN,
        is_full_screen: false
    }
}
export const toggleFullScreen = (is_full_screen) => {    
    return {
        type: types.PHOTOG_VIEW_FULLSCREEN,
        is_full_screen: ! is_full_screen
    }
}