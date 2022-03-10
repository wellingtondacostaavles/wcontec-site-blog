import Navbar from './Components/Navbar/navbar'
import Capacalculadora from './Components/Capacalculadora/capacalculadora';
import Escolhaumacalculadora from './Components/Escolhaumacalculadora/escolhaumacalculadora';
import Calculostrabalhistas from './Components/Escolhaumacalculadora/calculostrabalhistas';
import Customensalcomfuncionario from '../calculadoras/Components/Customensalcomfuncionario/customensalcomfuncionario';
import Customensalcomfuncionarionaooptantedosimplesnacional from './Components/Customensalcomfuncionarionaooptantedosimples/customensalcomfuncionarionaooptantedosimplesnacional';
import DeclaracaoIRPF from './Components/Escolhaumacalculadora/declaracaoIRPF';
import Distribuicaolucromei from './Components/Distribuicaolucromei/distribuicaolucromei';
import Distribuicaolucrosociosn from './Components/Distribuicaolucrosociosn/distribuicaolucrosociosn';
import Descontosimplificado from './Components/Descontosimplificado/descontosimplificado';
import Deducoeslegais from './Components/Deducoeslegais/deducoeslegais';
import Tributos from './Components/Escolhaumacalculadora/tributos';
import Pis from './Components/Escolhaumacalculadora/pis';
import Cofins from './Components/Escolhaumacalculadora/cofins';
import Pispresumido from './Components/Pispresumido/pispresumido';
import Cofinspresumido from './Components/Cofinspresumido/cofinspresumido';
import Pislucroreal from './Components/Pislucroreal/pislucroreal';
import Cofinsreal from './Components/Cofinsreal/cofinsreal';
import Irtrimestral from './Components/IRPJTrimestral/irtrimestral';
import Cslltrimestral from './Components/CSLLTrimestral/cslltrimestral';
import Piscorretora from './Components/Piscorretora/piscorretora';
import Cofinscorretora from './Components/Cofinscorretora/cofinscorretora';
import Construcaocivil from './Components/Escolhaumacalculadora/construcaocivil';
import Metrocubico from '../calculadoras/Components/Metrocubico/metrocubico';
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
      <Cofins/>
      <Pispresumido/>
      <Cofinspresumido/>
      <Pislucroreal/>
      <Cofinsreal/>
      <Irtrimestral/>
      <Cslltrimestral/>
      <Piscorretora/>
      <Cofinscorretora/>
      <Construcaocivil/>
      <Metrocubico/>  
      <Ultimosartigosblog/>
      <Parceiros/>   
      <Footer/>      
    </div> 
  }

export default Calculadoras;