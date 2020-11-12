import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed'
import './App.css';


function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">

        <Sidebar />
        <Feed />
        {/* Feed*/}
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
