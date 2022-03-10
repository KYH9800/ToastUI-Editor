import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// components
import reducer from '../reducers';

const loggerMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    console.log('loggerMiddleware(redux-thunk): ', action);
    return next(action);
  };

const configureStore = () => {
  const enhancer = // 배포용일떄 ? devTool 연결 X : devTool 연결 O
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware())
      : composeWithDevTools(applyMiddleware(loggerMiddleware));
  const store = createStore(reducer, enhancer); // state와 reducer를 포함하는게 store
  return store;
};
const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
}); // 두번째는 옵션 객체

export default wrapper;
