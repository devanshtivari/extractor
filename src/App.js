import './App.css';
import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/header';
import Footer from './Components/footer';
import Arealocal from './Components/arealocal';
import Areasearch from './Components/areaseach';
import Search from './Components/search';
import Login from './Components/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <React.Fragment>
              <Header />
              <Arealocal />
            </React.Fragment>
          }
        />
        <Route
          exact
          path="/city"
          element={
            <React.Fragment>
              <Search />
              <Areasearch />
            </React.Fragment>
          }
        />
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
