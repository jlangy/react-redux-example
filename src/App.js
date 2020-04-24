import React from 'react';
import './App.css';
import Posts from './components/Posts'
import PostForm from './components/Postform'
import { Provider } from 'react-redux'; 

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <PostForm />
          <hr/>
          <Posts />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Provider>
  );
}

export default App;
