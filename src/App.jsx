import React from "react";
import './index.css'
import Navbar from "./Components/Navbar";
import Home from './Home.jsx'
import Create from "./Create.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogDetails from "./BlogDetails.jsx";
import NotFound from "./NotFound.jsx";

function App()
{
  return(
    <Router future={{ v7_startTransition: true , v7_relativeSplatPath: true }}> 
      <div className="App"> 
        <Navbar /> 
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      </div> 
    </Router>
  )
}
export default App;