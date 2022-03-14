import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Tourism from './Components/Tourism';
import Technology from './Components/Technology'
import Food from './Components/Food';
import Fitness from './Components/Fitness';
import Bollywood from './Components/Bollywood';
import Navigator from './Components/Navigator';




const App = () => {
  return (
    <>
      <Router>
        <Navigator />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/technology' element={<Technology />} />
          <Route path='/Food' element={<Food />} />
          <Route path='/bollywood' element={<Bollywood />} />
          <Route path='/tourism' element={<Tourism />} />
          <Route path='/fitness' element={<Fitness />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
