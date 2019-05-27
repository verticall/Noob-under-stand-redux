import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './App';
import StoreGlobal from './reducers/driver'
ReactDOM.render(
  <Provider store={StoreGlobal}>
    <App />
  </Provider>
  , document.getElementById('root')
);

// store.dispatch({
//   type:'add',
//   payload:1300
// })
// store.dispatch({
//    type:'minus',
//    payload:199
// })
// store.dispatch({
//   type:'add',
//   payload:5500
// })
// store.dispatch({
//   type:'chgName',
//   payload:'bank 2019'
// })
// store.dispatch({
//   type:'chgAge',
//   payload:25.5
// })
