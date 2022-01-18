import { GET_RESTAURANT_MENUS, GET_RESTAURANT_MENUS_SUCCESS, RestaurantActionTypes, UPDATE_ACTIVE_MENU } from "./constants";
import { Menu } from "./types";

export function getRestaurantMenus (): RestaurantActionTypes {
  return {
    type: GET_RESTAURANT_MENUS
  }
}

export function getRestaurantMenusSuccess (activeMenu: Menu, menus: Menu[]): RestaurantActionTypes {
  return {
    type: GET_RESTAURANT_MENUS_SUCCESS,
    payload: {activeMenu, menus}
  }
}

export function updateActiveMenu (activeMenu: Menu): RestaurantActionTypes {
  return {
    type: UPDATE_ACTIVE_MENU,
    payload: activeMenu
  }
}
