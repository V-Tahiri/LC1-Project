import React, { FC } from 'react';
import {Routes,Route} from 'react-router-dom';
import '../App.css';
import Admin from './Admin';
import IntroPage from './IntroPage';
import Page1 from '../pages/admin/Page1';
import Page2 from '../pages/admin/Page2';
import Shtetet from '../screens/Shtetet';
import Qytetet from '../screens/Qytetet';
import Repartet from '../screens/Repartet';
import Pacienti from '../screens/Pacienti';
import Dhomat from '../screens/Dhomat';
import Medikamentet from '../screens/Medikamentet';


import EmptyPropsType from '../types/EmptyPropsType';


const  App: FC<EmptyPropsType> = () => {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/admin" element={<Admin />} >
      <Route path='shtetet' element={<Shtetet/>} />
      <Route path='qytetet' element={<Qytetet/>} />
      <Route path='repartet' element={<Repartet/>} />
      <Route path='Dhomat' element={<Dhomat/>} />
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
        <Route path="pacienti" element={<Pacienti />} />
        <Route path="medikamentet" element={<Medikamentet />} />
      </Route>
    </Routes>
  );
}


export default App;
