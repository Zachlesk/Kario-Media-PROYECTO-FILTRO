import './App.css';
import {BrowserRouter,Navigate,Route,Routes} from "react-router-dom"
import Nav from './components/Nav';
import ReadReportes from './pages/Reportes/ReadReportes';
import CreateReportes from './pages/Reportes/CreateReportes';
import UpdateReporte from './pages/Reportes/UpdateReporte';

function App() {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" />
        <Route path="/reportes" element={<ReadReportes />} />
        <Route path="/createReporte" element={<CreateReportes />} />
        <Route path="/updateReporte" element={<UpdateReporte />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
