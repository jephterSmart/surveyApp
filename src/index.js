import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import initReducer,{changeState,responseState} from './store/reducers'

// const composeEnhancers = process.env.NODE_ENV === 'development' ? 
//       window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose
const rootReducer = combineReducers({
  initStore: initReducer,
  responseStore: changeState,
  status: responseState

})
const store = createStore(rootReducer,compose(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
