import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.css';
import { addPost, addMessage, updateNewPostText } from './redux/state';
import state from './redux/state';
import { subscribe } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let reRenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <HashRouter>
        <App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText} />
      </HashRouter>
    </React.StrictMode>
  );
}

reRenderEntireTree(state);

subscribe(reRenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
