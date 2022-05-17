import React, { useContext } from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import { AuthContext } from './app/Context/auth.jsx';

/* Paginas */
import Site from './site/site.jsx';
import Login from './app/Login/login.jsx';
import NovaConta from './app/NovaConta/novaconta.jsx';
import ResetSenha from './app/ResetSenha/resetsenha.jsx';
import Calculadorasapp from './calculadoras/calculadorasapp.jsx';
import Piscorretorahome from './calculadoras/ComponentsPro/Piscorretora/piscorretorahome.jsx';
import PiscorretoraPro from './calculadoras/ComponentsPro/Piscorretora/piscorretora.jsx';
import EditarPiscorretora from './calculadoras/ComponentsPro/Piscorretora/editarpiscorretora.jsx';
import Calculadoras from './calculadoras/calculadoras.jsx';
import Customensalcomfuncionario from './calculadoras/Components/Customensalcomfuncionario/customensalcomfuncionario.jsx';
import Customensalcomfuncionarionaooptantedosimplesnacional from './calculadoras/Components/Customensalcomfuncionarionaooptantedosimples/customensalcomfuncionarionaooptantedosimplesnacional.jsx';
import IRPFsobreMeiComercio from './calculadoras/Components/IRPFsobreMeiComercio/irpfsobremeicomercio.jsx';
import IRPFsobreAutonomoTrasportePassageiro from './calculadoras/Components/IRPFsobreAutonomoTrasportePassageiro/irpfsobreautonomotrasportepassageiro.jsx';
import IRPFsobreAutonomoTrasporteCargas from './calculadoras/Components/IRPFsobreAutonomoTrasporteCargas/irpfsobreautonomotrasportecargas.jsx';
import IRPFsobreMeiTransportePassageiro from './calculadoras/Components/IRPFsobreMeiTrasportePassageiro/irpfsobremeitransportepassageiro.jsx';
import IRPFsobreMeiTransporteCargas from './calculadoras/Components/IRPFsobreMeiTransporteCargas/irpfsobremeitransportecargas.jsx';
import IRPFsobreSocioMedico from './calculadoras/Components/IRPFsobreSocioMedico/irpfsobresociomedico.jsx';
import Distribuicaolucrosociosn from './calculadoras/Components/Distribuicaolucrosociosn/distribuicaolucrosociosn.jsx';
import Descontosimplificado from './calculadoras/Components/Descontosimplificado/descontosimplificado.jsx';
import Deducoeslegais from './calculadoras/Components/Deducoeslegais/deducoeslegais.jsx';
import Pispresumido from './calculadoras/Components/Pispresumido/pispresumido.jsx';
import Pislucroreal from './calculadoras/Components/Pislucroreal/pislucroreal.jsx';
import Piscorretora from './calculadoras/Components/Piscorretora/piscorretora.jsx';
import Cofinsreal from './calculadoras/Components/Cofinsreal/cofinsreal.jsx';
import Cofinscorretora from './calculadoras/Components/Cofinscorretora/cofinscorretora.jsx';
import Irtrimestral from './calculadoras/Components/IRPJTrimestral/irtrimestral.jsx';
import Cslltrimestral from './calculadoras/Components/CSLLTrimestral/cslltrimestral.jsx';
import Metrocubico from './calculadoras/Components/Metrocubico/metrocubico.jsx';
import Descadastrese from './descadastrese/descadastrese.jsx';
import Descadastramento from './descadastrese/descadastramento.jsx';
import Certificacaodigital from './parceiros/certificacaodigital.jsx';
import Home from './blog/Home/home.jsx';
import Naosepodeculparcargatributaria from './blog/Artigo/naosepodeculparcargatributaria.jsx';
import Mei from './blog/Artigo2/mei.jsx';
import Autonomo from './blog/Artigo3/autonomo.jsx';
import Abrirempresa from './blog/Artigo4/abrirempresa.jsx';
import Simplesnacional from './blog/Artigo5/simplesnacional.jsx';
import Sociedadelimitadaunipessoal from './blog/Artigo6/sociedadelimitadaunipessoal.jsx';
import Empresarioindividual from './blog/Artigo7/empresarioindividual.jsx';
import Diferencasmeieirelisluei from './blog/Artigo8/diferencasmeieirelisluei.jsx';
import Eireli from './blog/Artigo9/eireli.jsx';
import Inssentendacomoeaaposentadoriadequemmudadesexo from './blog/Artigo10/inssentendacomoeaaposentadoriadequemmudadesexo.jsx';
import Horaextrapassoapassodecomocalcular from './blog/Artigo11/horaextrapassoapassodecomocalcular.jsx';
import Dicasparaplanejaroanonovodasuaempresa from './blog/Artigo12/dicasparaplanejaroanonovodasuaempresa.jsx';
import Sebraeoferececapacitacao from './blog/Artigo13/sebraeoferececapacitacao.jsx';
import Profissionaisautonomosestaoemcrescimento from './blog/Artigo14/profissionaisautonomosestaoemcrescimento.jsx';
import Dicasparaquemdesejamudardecarreira from './blog/Artigo15/dicasparaquemdesejamudardecarreira.jsx';
import Normasparaemissaoeentregadocomprovantederendimentos from './blog/Artigo16/normasparaemissaoeentregadocomprovantederendimentos.jsx';
import Comoaproveitaraomaximoocontratodeexperienciadetrabalhocomoempregado from './blog/Artigo17/comoaproveitaraomaximoocontratodeexperienciadetrabalhocomoempregado.jsx';
import Transicaodooperacionalparaoempreendedorismo from './blog/Artigo18/transicaodooperacionalparaoempreendedorismo.jsx';
import Brasileirospreferemcomprasonline from './blog/Artigo19/brasileirospreferemcomprasonline.jsx';
import Senadoaprovatributacaomenorparacaminhoneiros from './blog/Artigo20/senadoaprovatributacaomenorparacaminhoneiros.jsx';
import Consultasaosistemavaloresareceberbcb from './blog/Artigo21/consultasaosistemavaloresareceberbcb.jsx';
import Novidadesnadeclaracaoirpf22 from './blog/Artigos/DIRPF22/Novidadesnadeclaracao/novidadesnadeclaracaoirpf22.jsx';
import Documentosnecessarios from './blog/Artigos/DIRPF22/Documentosnecessarios/documentosnecessarios.jsx';
import Deducoeslegaisdescontosimplificado from './blog/Artigos/DIRPF22/Deducoeslegaisdescontosimplificado/deducoeslegais-descontosimplificado.jsx';
import Microempreendedor from './blog/Artigos/Microempreendedor/microempreendedor.jsx';
import Obrigatoriedade from './blog/Artigos/DIRPF22/Obrigatoriedade/obrigatoriedade.jsx';
import Cofinspresumido from './calculadoras/Components/Cofinspresumido/cofinspresumido.jsx';


function App(){
    const {logado} = useContext(AuthContext);

    function SecureRoute({...params}){
      if (!logado){
        return <Redirect to="/app" />
      } else {
      return <Route {...params} />
      }
    }

    return <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Site} /> 
      <Route exact path='/app' component={Login} />   
      <Route exact path='/app/criar-conta' component={NovaConta} />
      <Route exact path='/app/recuperar-senha' component={ResetSenha} /> 
      <SecureRoute exact path='/app/calculadoras-pro' component={Calculadorasapp} />
      <SecureRoute exact path='/app/calculadoras-pro-pis-corretora-home' component={Piscorretorahome} />
      <SecureRoute exact path='/app/calculadoras-pro-pis-corretora' component={PiscorretoraPro} />
      <SecureRoute exact path='/app/calculadoras-pro-editar-pis-corretora/:id' component={EditarPiscorretora} />
      <Route exact path='/calculadoras' component={Calculadoras} />
      <Route exact path='/calculadoras-custo-mensal-com-funcionario-optante-simples-nacional' component={Customensalcomfuncionario} />
      <Route exact path='/calculadoras-custo-mensal-com-funcionario-nao-optante-simples-nacional' component={Customensalcomfuncionarionaooptantedosimplesnacional} />
      <Route exact path='/calculadoras-irpf-mei-comercio' component={IRPFsobreMeiComercio} />
      <Route exact path='/calculadoras-irpf-autonomo-transporte-passageiro' component={IRPFsobreAutonomoTrasportePassageiro} />
      <Route exact path='/calculadoras-irpf-autonomo-transporte-cargas' component={IRPFsobreAutonomoTrasporteCargas} />
      <Route exact path='/calculadoras-irpf-mei-transporte-passageiro' component={IRPFsobreMeiTransportePassageiro} />
      <Route exact path='/calculadoras-irpf-mei-transporte-cargas' component={IRPFsobreMeiTransporteCargas} />
      <Route exact path='/calculadoras-irpf-socio-medico' component={IRPFsobreSocioMedico} />
      <Route exact path='/calculadoras-distribuicao-lucro-socio-simples-nacional' component={Distribuicaolucrosociosn} />
      <Route exact path='/calculadoras-desconto-simplificado' component={Descontosimplificado} />
      <Route exact path='/calculadoras-deducoes-legais' component={Deducoeslegais} />
      <Route exact path='/calculadoras-pis-presumido' component={Pispresumido} />
      <Route exact path='/calculadoras-pis-lucro-real' component={Pislucroreal} />
      <Route exact path='/calculadoras-pis-corretora' component={Piscorretora} />
      <Route exact path='/calculadoras-cofins-presumido' component={Cofinspresumido} />
      <Route exact path='/calculadoras-cofins-lucro-real' component={Cofinsreal} />
      <Route exact path='/calculadoras-cofins-corretora' component={Cofinscorretora} />
      <Route exact path='/calculadoras-irpj-lucro-presumido' component={Irtrimestral} />
      <Route exact path='/calculadoras-csll-lucro-presumido' component={Cslltrimestral} />
      <Route exact path='/calculadoras-metro-cubico' component={Metrocubico} />
      <Route exact path='/descadastrese' component={Descadastrese} />
      <Route exact path='/descadastramento-realizado-com-sucesso' component={Descadastramento} />
      <Route exact path='/parceiro-certificacao-digital' component={Certificacaodigital} />
      <Route exact path='/blog' component={Home} />
      <Route exact path='/blog-nao-se-pode-culpar-a-cargatributaria' component={Naosepodeculparcargatributaria} />
      <Route exact path='/blog-mei' component={Mei} />  
      <Route exact path='/blog-autonomo' component={Autonomo} />     
      <Route exact path='/blog-abrir-empresa' component={Abrirempresa} />
      <Route exact path='/blog-simples-nacional' component={Simplesnacional} />
      <Route exact path='/blog-sociedade-limitada-unipessoal' component={Sociedadelimitadaunipessoal} />
      <Route exact path='/blog-empresario-individual' component={Empresarioindividual} />
      <Route exact path='/blog-diferencas-mei-eireli-slu-ei' component={Diferencasmeieirelisluei} />
      <Route exact path='/blog-eireli' component={Eireli} />
      <Route exact path='/blog-inss-entenda-como-e-a-aposentadoria-de-quem-muda-de-sexo' component={Inssentendacomoeaaposentadoriadequemmudadesexo} />
      <Route exact path='/blog-hora-extra-passo-a-passo-de-como-calcular' component={Horaextrapassoapassodecomocalcular} />
      <Route exact path='/blog-dicas-para-planejar-o-ano-novo-da-sua-empresa' component={Dicasparaplanejaroanonovodasuaempresa} />
      <Route exact path='/blog-sebrae-oferece-capacitacao' component={Sebraeoferececapacitacao} />
      <Route exact path='/blog-profissionais-autonomos-estao-em-crescimento' component={Profissionaisautonomosestaoemcrescimento} />
      <Route exact path='/blog-dicas-para-quem-deseja-mudar-de-carreira' component={Dicasparaquemdesejamudardecarreira} />
      <Route exact path='/blog-normas-para-emissao-e-entrega-do-comprovante-de-rendimentos' component={Normasparaemissaoeentregadocomprovantederendimentos} />
      <Route exact path='/blog-como-aproveitar-ao-maximo-o-contrato-de-experiencia-de-trabalho-com-o-empregado' component={Comoaproveitaraomaximoocontratodeexperienciadetrabalhocomoempregado} />
      <Route exact path='/blog-transicao-do-operacional-para-o-empreendedorismo' component={Transicaodooperacionalparaoempreendedorismo} />
      <Route exact path='/blog-brasileiros-preferem-compras-online' component={Brasileirospreferemcomprasonline} />
      <Route exact path='/blog-senado-aprova-tributacao-menor-para-caminhoneiros' component={Senadoaprovatributacaomenorparacaminhoneiros} />
      <Route exact path='/blog-consulta-ao-sistema-valores-a-receber-bcb' component={Consultasaosistemavaloresareceberbcb} />
      <Route exact path='/blog-novidades-na-declaracao-irpf-22' component={Novidadesnadeclaracaoirpf22} />
      <Route exact path='/blog-documentosnecessarios-irpf-22' component={Documentosnecessarios} />
      <Route exact path='/blog-deducoes-legais-desconto-simplificado-irpf-22' component={Deducoeslegaisdescontosimplificado} />
      <Route exact path='/blog-microempreendedor-e-trabalhador-informal-tem-direito-a-receber' component={Microempreendedor} />
      <Route exact path='/blog-saiba-se-voce-esta-obrigado-a-apresentar-a-dirpf-22' component={Obrigatoriedade} />
    </Switch>

    </BrowserRouter>;
  }

export default App;