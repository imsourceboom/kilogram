import { all, call } from 'redux-saga/effects';
import nav from './nav';

export default function* rootSaga() {
  yield all([call(nav)]);
}
