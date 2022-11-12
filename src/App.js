import './App.css';
import { Routes, Route } from 'react-router-dom'
// import { useState } from 'react';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Service from './Components/Service';
// import contextTheme from './Context';
// import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'


function App() {
  // const value = useSelector(state => state.value);
  const value = useSelector(state => state.value);
  console.log(value);



  // const changeTheme = (e) => {
  //   console.log("it is working");
  //   setLight(e);
  // }


  return (
    
    <div className={value === true?"App-header light": "App-header dark"}>
      {/* <contextTheme.Provider value={{ light, changeTheme }} > */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      {/* </contextTheme.Provider> */}


    </div>
  );
}

export default App;
