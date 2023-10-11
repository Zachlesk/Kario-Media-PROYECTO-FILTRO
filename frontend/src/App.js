import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Nav from './components/Nav';
import ReadReportes from './pages/Reportes/ReadReportes';
import CreateReportes from './pages/Reportes/CreateReportes';
import UpdateReporte from './pages/Reportes/UpdateReporte';
import Login from './pages/Login/Login';
import ReadIndicadores from './pages/Indicadores/ReadIndicadores';
import CreateIndicador from './pages/Indicadores/CreateIndicador';
import UpdateIndicador from './pages/Indicadores/UpdateIndicador';
import ReadAyudas from './pages/Ayudas/ReadAyudas';

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

        <Route path="/indicadores" element={<ReadIndicadores />}/>
        <Route path="/createIndicador" element={<CreateIndicador />}/>
        <Route path="/updateIndicador" element={<UpdateIndicador />}/>

        <Route path="/ayudas" element={<ReadAyudas />}/>



      </Routes>
    </BrowserRouter>
  );
}

export default App;
