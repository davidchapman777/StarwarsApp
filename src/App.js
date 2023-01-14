import {
  CharactersPage,
  ErrorPage,
  Ships,
  Planets
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import { useState } from "react";





function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path="/characters" element={<CharactersPage/>} />
        <Route path="/ships"  element={<Ships/>}/>
        <Route path="/planets"  element={<Planets/>}/>
        <Route path="*" element={<ErrorPage/> } />
      </Routes>
    </BrowserRouter>
  );
}




export default App;
