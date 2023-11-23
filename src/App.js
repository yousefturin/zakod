import React from 'react';
import './App.css';
import Home from './components/pages/Home'
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Cryptography from './components/pages/Cryptograpy';
import Information from './components/pages/Informations';
import SignUp from './components/pages/SignUp';
import Atbash from './components/pages/Atbash';
import Caesar from './components/pages/Caesar';
import Affine from './components/pages/Affine';


function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/"  exact element={<Home />}/>
        <Route path="/cryptography"   element={<Cryptography />}/>
        <Route path="/information"   element={<Information />}/>
        <Route path="/sign-up"   element={<SignUp />}/>
        <Route path="/information/atbash"   element={<Atbash />}/>
        <Route path="/information/caesar"   element={<Caesar />}/>
        <Route path="/information/affine"   element={<Affine />}/>
      </Routes>
    </Router>

    </>
  );
}

export default App;
