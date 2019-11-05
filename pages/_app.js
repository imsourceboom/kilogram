// import Helmet from 'react-helmet'
import withRedux from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '../styles';
import Layout from '../components/Layout';
import reducer from '../reducers';
import sagaMiddleware from '../sagas/middleware';
import rootSaga from '../sagas';

const RootApp = ({ Component, pageProps, store }) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  </ThemeProvider>
);

export default withRedux((initialState, options) => {
  const middlewares = [sagaMiddleware];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : compose(
      applyMiddleware(...middlewares),
      !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (f) => f,
    );
  const store = createStore(reducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
})(RootApp);
