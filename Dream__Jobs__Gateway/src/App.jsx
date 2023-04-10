import React from 'react';
import Header from './components/Header/Header';
import { Outlet } from "react-router-dom";
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default App;