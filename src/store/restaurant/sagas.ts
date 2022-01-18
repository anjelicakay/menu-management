import { exampleRestaurant, GET_RESTAURANT_MENUS } from "./constants";
import {all, put, takeEvery} from 'redux-saga/effects'
import { getRestaurantMenusSuccess } from "./actionCreator";

export function* getRestaurantMenusSaga () {
  yield put(getRestaurantMenusSuccess(exampleRestaurant[0], exampleRestaurant))
}

function* watchGetRestaurantMenusSaga () {
  yield takeEvery(GET_RESTAURANT_MENUS, getRestaurantMenusSaga)
}

export default function* watchAllRestaurants () {
  yield all([
    watchGetRestaurantMenusSaga()
  ])
}