import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import ReadReportes from './pages/Reportes/ReadReportes';
import CreateReportes from './pages/Reportes/CreateReportes';
import UpdateReporte from './pages/Reportes/UpdateReporte';
import Login from './pages/Login/Login';
import ReadIndicadores from './pages/Indicadores/ReadIndicadores';
import CreateIndicador from './pages/Indicadores/CreateIndicador';
import UpdateIndicador from './pages/Indicadores/UpdateIndicador';
import LoadingScreen from './components/LoadingScreen';
import Reportao from './templates/reportes/Reportes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Login />}/>

        <Route path="/loading"  element={<LoadingScreen />} />
        <Route path="/reportao"  element={<Reportao />} />
        <Route path="/reportes" element={<ReadReportes />} />
        <Route path="/createReporte" element={<CreateReportes />} />
        <Route path="/updateReporte" element={<UpdateReporte />}/>

        <Route path="/indicadores" element={<ReadIndicadores />}/>
        <Route path="/createIndicador" element={<CreateIndicador />}/>
        <Route path="/updateIndicador" element={<UpdateIndicador />}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
