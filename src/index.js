import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { rootReducer } from '../src/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// let { lang } = store.getState().locales;
ReactDOM.render(
  <Provider store={store}>
    <IntlProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </IntlProvider>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
