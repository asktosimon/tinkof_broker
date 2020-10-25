import { call, put, takeEvery } from 'redux-saga/effects'

function* fetchUser(action: any) {
   try {
      const user = yield call(() => {});
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

export function* orders() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}