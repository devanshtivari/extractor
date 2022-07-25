import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/header';
import Footer from './Components/footer';
import Arealocal from './Components/arealocal';
import Areasearch from './Components/areaseach';
import Login from './Components/login';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Arealocal/>}/>
        <Route exact path="/city" element={<Areasearch/>}/>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
