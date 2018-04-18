import { delay } from 'redux-saga';
import { call } from 'redux-saga/effects';
import moducks from '~/modules';

const defaultState = {
  count: 0,
};

export const {
  counter, sagas,
  inc, dec, asyncInc, asyncDec,
} = moducks.createModule('counter', {
  INC: {
    reducer: (state, { payload }) => ({ ...state, count: state.count + payload }),
  },
  DEC: {
    reducer: (state, { payload }) => ({ ...state, count: state.count - payload }),
  },
  ASYNC_INC: {
    saga: function* ({ payload }) {
      yield call(delay, 1000);
      return inc(payload);
    },
  },
  ASYNC_DEC: {
    saga: function* ({ payload }) {
      yield call(delay, 1000);
      return dec(payload);
    },
  },
}, defaultState);

