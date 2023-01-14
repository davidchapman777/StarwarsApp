import {
  CharactersPage,
  ErrorPage,
  Ships,
  Planets
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar } from "./components";





function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<CharactersPage/>} />
        <Route path="/ships"  element={<Ships/>}/>
        <Route path="/planets"  element={<Planets/>}/>
        <Route path="*" element={<ErrorPage/> } />
      </Routes>
    </BrowserRouter>
  );
}




export default App;
