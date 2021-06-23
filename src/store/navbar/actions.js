import * as types from './action_types';

export const openNavMenu = () => {
    return {
        type: types.NAVBAR_MENU_OPEN
    }
}
export const closeNavMenu = () => {
    return {
        type: types.NAVBAR_MENU_CLOSE
    }
}

export const toggleNavMenu = (current_state) => {    
    return {
        type: current_state === types.NAVBAR_MENU_CLOSE ? types.NAVBAR_MENU_OPEN : types.NAVBAR_MENU_CLOSE
    }
}