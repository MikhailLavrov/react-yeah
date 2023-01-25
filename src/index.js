import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.css';
import store from './redux/reduxStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

let reRenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      {/* HashRouter вместо BrowserRouter использован для gh-pages фикса перезагрузки */}
      <HashRouter>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
      </HashRouter>
    </React.StrictMode>
  );
}

reRenderEntireTree(store.getState());

store.subscribe(() => {
  reRenderEntireTree(store.getState());
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
