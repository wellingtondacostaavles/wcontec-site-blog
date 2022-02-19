import Navbar from '../calculadoras/Components/Navbar/navbar';
import Capacalculadora from './Components/Capacalculadora/capacalculadora';
import Escolhaumacalculadora from './Components/Escolhaumacalculadora/escolhaumacalculadora';
import Calculostrabalhistas from './Components/Escolhaumacalculadora/calculostrabalhistas';
import Customensalcomfuncionario from '../calculadoras/Components/Customensalcomfuncionario/customensalcomfuncionario';
import Customensalcomfuncionarionaooptantedosimplesnacional from './Components/Customensalcomfuncionarionaooptantedosimples/customensalcomfuncionarionaooptantedosimplesnacional';
import Tributos from './Components/Escolhaumacalculadora/tributos';
import Pispresumido from './Components/Pispresumido/pispresumido';
import Cofinspresumido from './Components/Cofinspresumido/cofinspresumido';
import Construcaocivil from './Components/Escolhaumacalculadora/construcaocivil';
import Metrocubico from '../calculadoras/Components/Metrocubico/metrocubico';
import Parceiros from '../blog/Components/Parceiros/parceiros';
import Footer from '../calculadoras/Components/Contato/contato';

function Calculadoras(){
  
  return <div>
      <Navbar/> 
      <Capacalculadora/>
      <Escolhaumacalculadora/>
      <Calculostrabalhistas/>
      <Customensalcomfuncionario/>
      <Customensalcomfuncionarionaooptantedosimplesnacional/>
      <Tributos/>
      <Pispresumido/>
      <Cofinspresumido/>
      <Construcaocivil/>
      <Metrocubico/>       
      <Parceiros/>   
      <Footer/>      
    </div> 
  }

export default Calculadoras;