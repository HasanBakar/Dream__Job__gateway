import React from 'react';
import { createContext } from 'react';
import Header from './components/Header/Header';
import { Outlet,useLoaderData } from "react-router-dom";
import Footer from './components/Footer/Footer';



export const CATEGORY = createContext([]);


const App = () => {
  const {category} = useLoaderData()
  
  
  return (
   <>
     <CATEGORY.Provider value={category} >
      <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </CATEGORY.Provider>
   </>
  );
};

export default App;