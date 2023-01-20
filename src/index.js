import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, message: 'Hello Bob', likeCounter: 0},
  {id: 1, message: 'Hello Ashley?', likeCounter: 12},
  {id: 1, message: 'Hello Poop @', likeCounter: 2},
]

let dialogs = [
  {id: 1, name: 'Jenny'},
  {id: 1, name: 'Bob Sinclar'},
  {id: 1, name: 'Emma'},
]

let messages = [
  {id: 1, message: 'Hello'},
  {id: 1, message: 'How r u?'},
  {id: 1, message: 'Wow, really?'},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
