import React, { Component } from 'react'
import SearchForm from './SearchForm'
import FillForm from './FillForm'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       globalStep:0,
//     }
//   };

//   onHandlePrev = (event) => {
//     console.log("handling prev")
//   };

//   onHandleNext = (event) => {
//     console.log("handling next")
//   };

//   render () {
//     return (
//       <div className='App navbar expand'>
//         <div className="headerBar">
//           <h1>LFS Inventory Form</h1>
//         </div>
//       </div>
//     )
//   }
// }

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const App = () => (
  <Router>
    <div>
      <ul>
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