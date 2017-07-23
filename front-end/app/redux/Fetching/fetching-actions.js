import { createAction } from 'redux-actions';
import { FETCH_HOUSE } from "./fetching-const.js";

export const fetchingHouses = createAction(FETCH_HOUSE)
