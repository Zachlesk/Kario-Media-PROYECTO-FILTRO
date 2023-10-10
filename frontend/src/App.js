import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Nav from './components/Nav';
import ReadReportes from './pages/Reportes/ReadReportes';
import CreateReportes from './pages/Reportes/CreateReportes';
import UpdateReporte from './pages/Reportes/UpdateReporte';
import Login from './pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" />
        <Route path="/login"  element={<Login />} />
        <Route path="/reportes" element={<ReadReportes />} />
        <Route path="/createReporte" element={<CreateReportes />} />
        <Route path="/updateReporte" element={<UpdateReporte />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
