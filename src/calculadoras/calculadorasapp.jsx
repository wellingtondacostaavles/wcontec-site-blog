import Navbar from '../app/Components/Navbar/navbar';
import Capacalculadora from './ComponentsPro/Capacalculadora/capacalculadora';
import Escolhaumacalculadora from './ComponentsPro/Escolhaumacalculadora/escolhaumacalculadora';
import Calculostrabalhistas from './ComponentsPro/Escolhaumacalculadora/calculostrabalhistas';
import Customensalcomfuncionario from '../calculadoras/ComponentsPro/Customensalcomfuncionario/customensalcomfuncionario';
import Customensalcomfuncionarionaooptantedosimplesnacional from './Components/Customensalcomfuncionarionaooptantedosimples/customensalcomfuncionarionaooptantedosimplesnacional';
import DeclaracaoIRPF from './ComponentsPro/Escolhaumacalculadora/declaracaoIRPF';
import Distribuicaolucromei from './ComponentsPro/Distribuicaolucromei/distribuicaolucromei';
import Distribuicaolucrosociosn from './ComponentsPro/Distribuicaolucrosociosn/distribuicaolucrosociosn';
import Descontosimplificado from './ComponentsPro/Descontosimplificado/descontosimplificado';
import Deducoeslegais from './ComponentsPro/Deducoeslegais/deducoeslegais';
import Tributos from './ComponentsPro/Escolhaumacalculadora/tributos';
import Pis from './ComponentsPro/Escolhaumacalculadora/pis';
import Pispresumido from './ComponentsPro/Pispresumido/pispresumido';
import Pislucroreal from './ComponentsPro/Pislucroreal/pislucroreal';
import Cofins from './ComponentsPro/Escolhaumacalculadora/cofins';
import Cofinspresumido from './ComponentsPro/Cofinspresumido/cofinspresumido';
import Cofinsreal from './ComponentsPro/Cofinsreal/cofinsreal';
import Cofinscorretora from './ComponentsPro/Cofinscorretora/cofinscorretora';
import Irtrimestral from './ComponentsPro/IRPJTrimestral/irtrimestral';
import Cslltrimestral from './ComponentsPro/CSLLTrimestral/cslltrimestral';
import Construcaocivil from './ComponentsPro/Escolhaumacalculadora/construcaocivil';
import Metrocubico from '../calculadoras/ComponentsPro/Metrocubico/metrocubico';
import Ultimosartigosblog from '../site/Components/ultimosartigosblog';
import Parceiros from '../site/Components/parceiros';
import Footer from '../site/Components/contato';

function Calculadoras(){
  
  return <div>
      <Navbar/> 
      <Capacalculadora/>
      <Escolhaumacalculadora/>
      <Calculostrabalhistas/>
      <Customensalcomfuncionario/>
      <Customensalcomfuncionarionaooptantedosimplesnacional/>
      <DeclaracaoIRPF/>
      <Distribuicaolucromei/>
      <Distribuicaolucrosociosn/>
      <Descontosimplificado/>
      <Deducoeslegais/>
      <Tributos/>
      <Pis/>
      <Pispresumido/>
      <Pislucroreal/>
      <Cofins/>
      <Cofinspresumido/>
      <Cofinsreal/>
      <Cofinscorretora/>
      <Irtrimestral/>
      <Cslltrimestral/>
      <Construcaocivil/>
      <Metrocubico/>  
      <Ultimosartigosblog/>
      <Parceiros/>   
      <Footer/>      
    </div> 
  }

export default Calculadoras;