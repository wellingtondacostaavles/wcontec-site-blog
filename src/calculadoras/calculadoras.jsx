import Navbar from '../calculadoras/Components/Navbar/navbar';
import Parceiros from '../blog/Components/Parceiros/parceiros';
import Footer from '../blog/Components/Contato/contato';
import Metrocubico from '../calculadoras/Components/Metrocubico/metrocubico';

function Calculadoras(){
  
  return <div>
      <Navbar/> 
      <Metrocubico/>       
      <Parceiros/>   
      <Footer/>      
    </div> 
  }

export default Calculadoras;