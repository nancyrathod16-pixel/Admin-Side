
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Dashboard from "./modules/dashboard";

import Header from './components2/Header';
import Footer from './components2/Footer';
import Sidebar from './components2/Sidebar';

import Pro1 from './modules/add-new-pro';
import View1 from './modules/view-pro';
import Pro2 from './modules/add-new-category';
import View2 from './modules/view-category';
import Pro3 from './modules/add-order';
import View3 from './modules/view-order';
import Pro4 from './modules/add-new-user';
import View4 from './modules/view-user';
import Pro5 from './modules/add-new-country';
import View5 from './modules/view-country';
import Pro6 from './modules/add-new-state';
import View6 from './modules/view-state';
import Pro7 from './modules/add-new-city';
import View7 from './modules/view-city';
import Pro8 from './modules/add-new-area';
import View8 from './modules/view-area';


function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/add-new-pro' element={<Pro1 />} />
        <Route path='/view-pro' element={<View1 />} />
        <Route path='/add-new-category' element={<Pro2 />} />
        <Route path='/view-category' element={<View2 />} />
        <Route path='/add-order' element={<Pro3/>} />
        <Route path='/view-order' element={<View3/>} />
        <Route path='/add-new-user' element={<Pro4/>} />
        <Route path='/view-user' element={<View4/>} />
        <Route path='/add-new-country' element={<Pro5/>} />
        <Route path='/view-country' element={<View5/>} />
        <Route path='/add-new-state' element={<Pro6/>} />
        <Route path='/view-state' element={<View6/>} />
        <Route path='/add-new-city' element={<Pro7/>} />
        <Route path='/view-city' element={<View7/>} />
        <Route path='/add-new-area' element={<Pro8/>} />
        <Route path='/view-area' element={<View8/>} />
        

      </Routes>

      <Footer />
    </>
  );
}

export default App;
