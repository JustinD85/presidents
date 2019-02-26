import { takeLatest, put, call } from 'redux-saga/effects'
import * as constants from '../constants'
import * as actions from '../actions'
import { getPresidents } from '../api'

function* grabPresidents() {
  const presidents = yield call(getPresidents)
  yield put(actions.setPresident(presidents))
}

export default function* listener() {
  yield takeLatest(constants.FETCH_PRESIDENTS, grabPresidents)
}
