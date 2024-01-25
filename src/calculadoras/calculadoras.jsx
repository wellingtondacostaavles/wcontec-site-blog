import Navbar from './Components/Navbar/navbar'
import Capacalculadora from './Components/Capacalculadora/capacalculadora';
import Escolhaumacalculadora from './Components/Escolhaumacalculadora/escolhaumacalculadora';
import Calculostrabalhistas from './Components/Escolhaumacalculadora/calculostrabalhistas';
import DeclaracaoIRPF from './Components/Escolhaumacalculadora/declaracaoIRPF';
import Irsobreacoes from './Components/IRsobrebolsa/irsobreacoes';
import Tributos from './Components/Escolhaumacalculadora/tributos';
import Pis from './Components/Escolhaumacalculadora/pis';
import Cofins from './Components/Escolhaumacalculadora/cofins';
import Construcaocivil from './Components/Escolhaumacalculadora/construcaocivil';
import Ultimosartigosblog from '../site/Components/ultimosartigosblog';
import Parceiros from '../site/Components/parceiros';
import Footer from '../site/Components/contato';

function Calculadoras(){
  
  return <div>
      <Navbar/> 
      <Capacalculadora/>
      <Escolhaumacalculadora/>
      <Calculostrabalhistas/>
      <DeclaracaoIRPF/>
      <Tributos/>
      <Pis/>
      <Cofins/>
      <Construcaocivil/>
      <Ultimosartigosblog/>
      <Parceiros/>   
      <Footer/>      
    </div> 
  }

export default Calculadoras;