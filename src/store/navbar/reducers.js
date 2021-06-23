// reducers hold the store's state (the initialState object defines it)
// reducers also handle plain object actions and modify their state (immutably) accordingly
// this is the only way to change the store's state
// the other exports in this file are selectors, which is business logic that digests parts of the store's state
// for easier consumption by views

import * as types from './action_types';



const initialState = {
    toggle_nav_menu: types.NAVBAR_MENU_CLOSE,
}

export default function reduce(state = initialState, action = {}){    
    switch (action.type) {
        case types.NAVBAR_MENU_OPEN:
            return { ...state, toggle_nav_menu: types.NAVBAR_MENU_OPEN }
        case types.NAVBAR_MENU_CLOSE:
            return { ...state, toggle_nav_menu: types.NAVBAR_MENU_CLOSE }
        default:
            return {...state}
    }
}


// selectors
export const getMenuState = (state) => {
    return state.navbar.toggle_nav_menu
}