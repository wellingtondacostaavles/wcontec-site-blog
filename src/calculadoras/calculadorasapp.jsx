import NavbarApp from '../app/Components/Navbar/navbar';
import Capacalculadora from './ComponentsPro/Capacalculadora/capacalculadora';
import Escolhaumacalculadora from './ComponentsPro/Escolhaumacalculadora/escolhaumacalculadora';
import Calculostrabalhistas from './ComponentsPro/Escolhaumacalculadora/calculostrabalhistas';
import DeclaracaoIRPF from './ComponentsPro/Escolhaumacalculadora/declaracaoIRPF';
import Tributos from './ComponentsPro/Escolhaumacalculadora/tributos';
import Pis from './ComponentsPro/Escolhaumacalculadora/pis';
import Cofins from './ComponentsPro/Escolhaumacalculadora/cofins';
import Construcaocivil from './ComponentsPro/Escolhaumacalculadora/construcaocivil';
import Ultimosartigosblog from '../site/Components/ultimosartigosblog';
import Parceiros from '../site/Components/parceiros';
import Footer from '../site/Components/contato';

function Calculadorasapp(){
  
  return <div>
      <NavbarApp/>
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

export default Calculadorasapp;