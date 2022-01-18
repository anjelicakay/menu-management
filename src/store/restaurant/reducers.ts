import { GET_RESTAURANT_MENUS, GET_RESTAURANT_MENUS_SUCCESS, RestaurantActionTypes, UPDATE_ACTIVE_MENU } from "./constants";
import { RestaurantState } from "./types";

const initialState: RestaurantState = {
  activeMenu: {
    categories: [],
    menuItems: [],
    type: '',
  },
  menus: [],
}

export function restaurantReducer (
  state = initialState,
  action: RestaurantActionTypes
): RestaurantState {
  switch (action.type) {

    case GET_RESTAURANT_MENUS:
      return {
        ...state,
        menus: [
          ...state.menus
        ],
      }

    case GET_RESTAURANT_MENUS_SUCCESS:
      return {
        activeMenu: action.payload.activeMenu,
        menus: action.payload.menus
      }

      case UPDATE_ACTIVE_MENU:
        return {
          ...state,
          activeMenu: action.payload
        }

    default:
      return state
  }
}