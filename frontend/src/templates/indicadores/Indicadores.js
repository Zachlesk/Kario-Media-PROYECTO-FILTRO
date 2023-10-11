import './styles/Indicadores.css'
import logo from '../../assets/logo.png'
import { Table } from "react-bootstrap";
import green from '../../assets/Circled Notch-Green.png'
import Navbar from '../navbar/Navbar';

export default function Indicadorest() {

    return (
        <div>
        <Navbar/>
            <div className='container-main'>
                <img src={logo} alt='logo' width={30} style={{marginTop: 30}}></img>
                <h3> Panel de indicadores </h3>
                <h5> Aqui puedes visualizar los indicadores propuestos y añadidos por tu equipo de trabajo, Si quieres ver más detalles, dale click a uno de ellos para más información. </h5>
            </div>
    <div>

    <div class="table-container">
    <Table>
      <thead>
        <tr>
          <th> Indicador </th> 
          <th> Descripcion </th> 
          <th> Categoría </th> 
          <th> Fecha de inicio </th> 
          <th> Fecha de terminación </th> 
          <th> Formula </th> 
          <th> Frecuencia </th> 
          <th> Cumplimiento </th>  
          <th> Área </th>      
        </tr>
      </thead>
      <tbody>
          <tr className='render' >
            <td>
            <div className="text">
              <b> Modelado 3d </b> 
              </div>
            </td>
            <td>
            <div className="text">
              <b> Interés por el diseño y modelado 3D </b> 
              </div>
            </td>
            <td>
            <div className="text">
              <b> Baja </b> 
              </div>
            </td>
            <td>
            <div className="text">
              <b> 12/05/21 </b> 
              </div>
            </td>
            <td>
            <div className="text">
              <b> 12/12/21 </b> 
              </div>
            </td>
            <td>
            <div className="text">
              <b> Met. Ágil </b> 
              </div>
              </td>
            <td>
              <div className="text">
              <b> 1/4 </b> 
              </div>
            </td>
            <td>
              <div className="text">
              <b> <img src={green} alt='Cumplimiento' className='alt' width={40}/> </b> 
              </div>
            </td>
            <td>
              <div className="text">
              <b> Marketing </b> 
              </div>
            </td>
            <td>
              <div className="text">
              <i class="fa fa-bars" aria-hidden="true"></i>
              </div>
            </td>
          </tr> 
          <tr className='render' >
            <td>
            <div className="text">
              <b> Modelado 3d </b> 
              </div>
            </td>
            <td>
            <div className="text">
              <b> Interés por el diseño y modelado 3D </b> 
              </div>
            </td>
            <td>
            <div className="text">
              <b> Baja </b> 
              </div>
            </td>
            <td>
            <div className="text">
              <b> 12/05/21 </b> 
              </div>
            </td>
            <td>
            <div className="text">
              <b> 12/12/21 </b> 
              </div>
            </td>
            <td>
            <div className="text">
              <b> Met. Ágil </b> 
              </div>
              </td>
            <td>
              <div className="text">
              <b> 1/4 </b> 
              </div>
            </td>
            <td>
              <div className="text">
              <b> <img src={green} alt='Cumplimiento' className='alt' width={40}/> </b> 
              </div>
            </td>
            <td>
              <div className="text">
              <b> Marketing </b> 
              </div>
            </td>
            <td>
              <div className="text">
              <i class="fa fa-bars" aria-hidden="true"></i>
              </div>
            </td>
          </tr> 
          <tr className='render' >
            <td>
            <div className="text">
              <b> Modelado 3d </b> 
              </div>
            </td>
            <td>
            <div className="text">
              <b> Interés por el diseño y modelado 3D </b> 
              </div>
            </td>
            <td>
            <div className="text">
              <b> Baja </b> 
              </div>
            </td>
            <td>
            <div className="text">
              <b> 12/05/21 </b> 
              </div>
            </td>
            <td>
            <div className="text">
              <b> 12/12/21 </b> 
              </div>
            </td>
            <td>
            <div className="text">
              <b> Met. Ágil </b> 
              </div>
              </td>
            <td>
              <div className="text">
              <b> 1/4 </b> 
              </div>
            </td>
            <td>
              <div className="text">
              <b> <img src={green} alt='Cumplimiento' className='alt' width={40}/> </b> 
              </div>
            </td>
            <td>
              <div className="text">
              <b> Marketing </b> 
              </div>
            </td>
            <td>
              <div className="text">
              <i class="fa fa-bars" aria-hidden="true"></i>
              </div>
            </td>
          </tr> 
          <tr className='render' >  
            <td>
            <div className="text">
              <b> Modelado 3d </b> 
              </div>
            </td>
            <td>
            <div className="text">
              <b> Interés por el diseño y modelado 3D </b> 
              </div>
            </td>
            <td>
            <div className="text">
              <b> Baja </b> 
              </div>
            </td>
            <td>
            <div className="text">
              <b> 12/05/21 </b> 
              </div>
            </td>
            <td>
            <div className="text">
              <b> 12/12/21 </b> 
              </div>
            </td>
            <td>
            <div className="text">
              <b> Met. Ágil </b> 
              </div>
              </td>
            <td>
              <div className="text">
              <b> 1/4 </b> 
              </div>
            </td>
            <td>
              <div className="text">
              <b> <img src={green} alt='Cumplimiento' className='alt' width={40}/> </b> 
              </div>
            </td>
            <td>
              <div className="text">
              <b> Marketing </b> 
              </div>
            </td>
            <td>
              <div className="text">
              <i class="fa fa-bars" aria-hidden="true"></i>
              </div>
            </td>
          </tr> 
          <tr className='render' >
            <td>
            <div className="text">
              <b> Modelado 3d </b> 
              </div>
            </td>
            <td>
            <div className="text">
              <b> Interés por el diseño y modelado 3D </b> 
              </div>
            </td>
            <td>
            <div className="text">
              <b> Baja </b> 
              </div>
            </td>
            <td>
            <div className="text">
              <b> 12/05/21 </b> 
              </div>
            </td>
            <td>
            <div className="text">
              <b> 12/12/21 </b> 
              </div>
            </td>
            <td>
            <div className="text">
              <b> Met. Ágil </b> 
              </div>
              </td>
            <td>
              <div className="text">
              <b> 1/4 </b> 
              </div>
            </td>
            <td>
              <div className="text">
              <b> <img src={green} alt='Cumplimiento' className='alt' width={40}/> </b> 
              </div>
            </td>
            <td>
              <div className="text">
              <b> Marketing </b> 
              </div>
            </td>
            <td>
              <div className="text">
              <i class="fa fa-bars" aria-hidden="true"></i>
              </div>
            </td>
          </tr> 
      </tbody>
    </Table>
</div>

<button className= 'botonsito'> ¿A dónde quieres ir? </button>
    
</div>
</div>

);
 
};
