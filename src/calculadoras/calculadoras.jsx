import Navbar from '../calculadoras/Components/Navbar/navbar';
import Capacalculadora from './Components/Capacalculadora/capacalculadora';
import Escolhaumacalculadora from './Components/Escolhaumacalculadora/escolhaumacalculadora';
import Parceiros from '../blog/Components/Parceiros/parceiros';
import Footer from '../calculadoras/Components/Contato/contato';
import Customensalcomfuncionario from '../calculadoras/Components/Customensalcomfuncionario/customensalcomfuncionario';
import Metrocubico from '../calculadoras/Components/Metrocubico/metrocubico';

function Calculadoras(){
  
  return <div>
      <Navbar/> 
      <Capacalculadora/>
      <Escolhaumacalculadora/>
      <Customensalcomfuncionario/>
      <Metrocubico/>       
      <Parceiros/>   
      <Footer/>      
    </div> 
  }

export default Calculadoras;