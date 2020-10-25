import { call, put, takeEvery } from 'redux-saga/effects';

function* fetchUser() {
  try {
    const user = yield call(() => {});
    yield put({ type: 'USER_FETCH_SUCCEEDED', user });
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* orders() {
  yield takeEvery('USER_FETCH_REQUESTED', fetchUser);
}

export default orders;
