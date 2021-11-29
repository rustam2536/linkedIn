import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import "./css/header.css";
import "./css/sidebar.css";
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app_body">
        <Sidebar/>
        <Feed/>
        <Widget/>
      </div>
    </div>
  );
}

export default App;
