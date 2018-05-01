import React, { Component } from 'react'
import SearchForm from './SearchForm'
import FillForm from './FillForm'
import Sidebar from './Sidebar'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => (
  <div className='App navbar expand'>
  <div className="headerBar">
    <h1>LFS Inventory Form: New Entry</h1>
  </div>
  <div>
    <h2>Home</h2>
  </div>
  </div>
);

const App = () => (
  <Router>
    <div>
      <ul component={Sidebar}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/newentry">New Entry</Link>
        </li>
        <li>
          <Link to="/searchorupdate">Search Or Update</Link>
        </li>
      </ul>

      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/newentry" component={FillForm} />
      <Route path="/searchorupdate" component={SearchForm} />
    </div>
  </Router>
);

export default App