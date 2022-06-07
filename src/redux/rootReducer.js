// import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

import wallRecordInfluentialContributors from './reducer/wallRecordInfluentialContributors'
import wallRecordMostActiveUsers from './reducer/wallRecordMostActiveUsers'

export const rootReducer = combineReducers({
    wallRecordInfluentialContributors: wallRecordInfluentialContributors,
    wallRecordMostActiveUsers: wallRecordMostActiveUsers,
});

export function* rootSaga() {
  
}
