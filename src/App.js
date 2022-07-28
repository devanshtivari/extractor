import "./App.css";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Fetchfunction from "./Components/fetchfunction";
import Arealocal from "./Components/arealocal";
import Areasearch from "./Components/areasearch";
import Search from "./Components/search";
import Login from "./Components/login";

function App() {
  var[city , setcity] = React.useState();

  return (
    <BrowserRouter>
      <Header setcity = {setcity} />
      <Routes>
        <Route exact path="/" element={<Fetchfunction />} />
        <Route exact path="/city" element={<Areasearch city = {city}/>} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
