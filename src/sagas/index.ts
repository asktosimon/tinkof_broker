import { fork } from 'redux-saga/effects';
import orders from './orders';

export default function* rootSaga() {
  yield fork(orders);
}
