import './App.css';
import Home from './components/Home/Home';
import React from "react";


import {


  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import FriendDitall from './components/FriendDitall/FriendDitall';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/friend/:friendId' element={<FriendDitall/>}></Route>
        <Route path='*' element={<NoMatch/>}>  </Route>


      </Routes>
</Router>
   

   
  );
}

export default App;
