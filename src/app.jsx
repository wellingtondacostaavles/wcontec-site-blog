import React, { useContext } from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import { AuthContext } from './app/Context/auth.jsx';

/* Paginas */
import Site from './site/site.jsx';
import Login from './app/Login/login.jsx';
import NovaConta from './app/NovaConta/novaconta.jsx';
import ResetSenha from './app/ResetSenha/resetsenha.jsx';
/* Calculadoras */
import Calculadorasapp from './calculadoras/calculadorasapp.jsx';
import Piscorretorahome from './calculadoras/ComponentsPro/Piscorretora/piscorretorahome.jsx';
import PiscorretoraPro from './calculadoras/ComponentsPro/Piscorretora/piscorretora.jsx';
import EditarPiscorretora from './calculadoras/ComponentsPro/Piscorretora/editarpiscorretora.jsx';
import Calculadoras from './calculadoras/calculadoras.jsx';
import Customensalcomfuncionario from './calculadoras/Components/Customensalcomfuncionario/customensalcomfuncionario.jsx';
import Customensalcomfuncionarionaooptantedosimplesnacional from './calculadoras/Components/Customensalcomfuncionarionaooptantedosimples/customensalcomfuncionarionaooptantedosimplesnacional.jsx';
import IrpfsobreempregadocltEscolhaoAnodaDeclaracao from './calculadoras/Components/IRPFsobreEmpregadoCLT/irpfsobreempregadocltEscolhaoAnodaDeclaracao.jsx';
import IRPFsobreEmpregadoCLT from './calculadoras/Components/IRPFsobreEmpregadoCLT/irpfsobreempregadoclt.jsx';
import IrpfsobreempregadocltApartirdoExercicio2024AnoCalendariode2023 from './calculadoras/Components/IRPFsobreEmpregadoCLT/irpfsobreempregadocltApartirdoExercicio2024AnoCalendariode2023.jsx';
import IrpfsobreempregadocltApartirdoExercicio2025AnoCalendariode2024 from './calculadoras/Components/IRPFsobreEmpregadoCLT/irpfsobreempregadocltApartirdoExercicio2025AnoCalendariode2024.jsx';
import IrpfsobreempregadocltApartirdoExercicio2026AnoCalendariode2025 from './calculadoras/Components/IRPFsobreEmpregadoCLT/irpfsobreempregadocltApartirdoExercicio2026AnoCalendariode2025.jsx';
import IRPFsobreServidorouEmpregadoPublico from './calculadoras/Components/IRPFsobreServidorouEmpregadoPublico/irpfsobreservidorouempregadopublico.jsx';
import IRPFsobreMeiComercio from './calculadoras/Components/IRPFsobreMeiComercio/irpfsobremeicomercio.jsx';
import IRPFsobreMeiServico from './calculadoras/Components/IRPFsobreMeiServico/irpfsobremeiservico.jsx';
import IrpfsobremeiservicoEscolhaoAnodaDeclaracao from './calculadoras/Components/IRPFsobreMeiServico/irpfsobremeiservicoEscolhaoAnodaDeclaracao.jsx';
import IrpfsobremeiservicoApartirdoExercicio2024AnoCalendáriode2023 from './calculadoras/Components/IRPFsobreMeiServico/irpfsobremeiservicoApartirdoExercicio2024AnoCalendáriode2023.jsx';
import IrpfsobremeiservicoApartirdoExercicio2025AnoCalendáriode2024 from './calculadoras/Components/IRPFsobreMeiServico/irpfsobremeiservicoApartirdoExercicio2025AnoCalendáriode2024.jsx';
import IrpfsobremeiservicoApartirdoExercicio2026AnoCalendáriode2025 from './calculadoras/Components/IRPFsobreMeiServico/irpfsobremeiservicoApartirdoExercicio2026AnoCalendáriode2025.jsx';
import IRPFsobreSocioMedico from './calculadoras/Components/IRPFsobreSocioMedico/irpfsobresociomedico.jsx';
import IrpfsobretrabalhadorautonomogeralEscolhaoAnodaDeclaracao from './calculadoras/Components/IRPFsobreTrabalhadorAutonomoGeral/irpfsobretrabalhadorautonomogeralEscolhaoAnodaDeclaracao.jsx';
import IRPFsobreTrabalhadorAutonomoGeral from './calculadoras/Components/IRPFsobreTrabalhadorAutonomoGeral/irpfsobretrabalhadorautonomogeral.jsx';
import IrpfsobretrabalhadorautonomogeralApartirdoExercicio2024AnoCalendariode2023 from './calculadoras/Components/IRPFsobreTrabalhadorAutonomoGeral/irpfsobretrabalhadorautonomogeralApartirdoExercicio2024AnoCalendariode2023.jsx';
import IrpfsobretrabalhadorautonomogeralApartirdoExercicio2025AnoCalendáriode2024 from './calculadoras/Components/IRPFsobreTrabalhadorAutonomoGeral/irpfsobretrabalhadorautonomogeralApartirdoExercicio2025AnoCalendáriode2024.jsx';
import IrpfsobretrabalhadorautonomogeralApartirdoExercicio2026AnoCalendariode2025 from './calculadoras/Components/IRPFsobreTrabalhadorAutonomoGeral/irpfsobretrabalhadorautonomogeralApartirdoExercicio2026AnoCalendáriode2025.jsx';
import IRPFsobreAutonomoTrasportePassageiro from './calculadoras/Components/IRPFsobreAutonomoTrasportePassageiro/irpfsobreautonomotrasportepassageiro.jsx';
import IRPFsobreAutonomoTrasporteCargas from './calculadoras/Components/IRPFsobreAutonomoTrasporteCargas/irpfsobreautonomotrasportecargas.jsx';
import IRPFsobreMeiTransportePassageiro from './calculadoras/Components/IRPFsobreMeiTrasportePassageiro/irpfsobremeitransportepassageiro.jsx';
import IRPFsobreMeiTransporteCargas from './calculadoras/Components/IRPFsobreMeiTransporteCargas/irpfsobremeitransportecargas.jsx';
import IrpfsobreadvogadoEscolhaoAnodaDeclaracao from './calculadoras/Components/IRPFsobreAdvogado/irpfsobreadvogadoEscolhaoAnodaDeclaracao.jsx';
import IRPFsobreAdvogado from './calculadoras/Components/IRPFsobreAdvogado/irpfsobreadvogado.jsx';
import IrpfsobreadvogadoApartirdoExercicio2024AnoCalendariode2023 from './calculadoras/Components/IRPFsobreAdvogado/irpfsobreadvogadoApartirdoExercicio2024AnoCalendáriode2023.jsx';
import IrpfsobreadvogadoApartirdoExercicio2025AnoCalendariode2024 from './calculadoras/Components/IRPFsobreAdvogado/irpfsobreadvogadoApartirdoExercicio2025AnoCalendáriode2024.jsx';
import IrpfsobreadvogadoApartirdoExercicio2026AnoCalendariode2025 from './calculadoras/Components/IRPFsobreAdvogado/irpfsobreadvogadoApartirdoExercicio2026AnoCalendáriode2025.jsx';
import IRPFsobreAposentado from './calculadoras/Components/IRPFsobreAposentado/irpfsobreaposentado.jsx';
import irpfsobreaposentadoEscolhaoAnodaDeclaracao from './calculadoras/Components/IRPFsobreAposentado/irpfsobreaposentadoEscolhaoAnodaDeclaracao.jsx';
import IrpfsobreaposentadoApartirdoExercicio2024AnoCalendariode2023 from './calculadoras/Components/IRPFsobreAposentado/irpfsobreaposentadoApartirdoExercicio2024AnoCalendáriode2023.jsx';
import IrpfsobreaposentadoApartirdoExercicio2025AnoCalendariode2024 from './calculadoras/Components/IRPFsobreAposentado/irpfsobreaposentadoApartirdoExercicio2025AnoCalendariode2024.jsx';
import IrpfsobreaposentadoApartirdoExercicio2026AnoCalendariode2025 from './calculadoras/Components/IRPFsobreAposentado/irpfsobreaposentadoApartirdoExercicio2026AnoCalendariode2025.jsx';
import Irsobreacoes from './calculadoras/Components/IRsobrebolsa/irsobreacoes.jsx';
import IRdaytrader from './calculadoras/Components/IRsobrebolsa/irsobredaytrader.jsx';
import Distribuicaolucrosociosn from './calculadoras/Components/Distribuicaolucrosociosn/distribuicaolucrosociosn.jsx';
import Descontosimplificado from './calculadoras/Components/Descontosimplificado/descontosimplificado.jsx';
import Deducoeslegais from './calculadoras/Components/Deducoeslegais/deducoeslegais.jsx';
import Pispresumido from './calculadoras/Components/Pispresumido/pispresumido.jsx';
import Pislucroreal from './calculadoras/Components/Pislucroreal/pislucroreal.jsx';
import Piscorretora from './calculadoras/Components/Piscorretora/piscorretora.jsx';
import Cofinspresumido from './calculadoras/Components/Cofinspresumido/cofinspresumido.jsx';
import Cofinsreal from './calculadoras/Components/Cofinsreal/cofinsreal.jsx';
import Cofinscorretora from './calculadoras/Components/Cofinscorretora/cofinscorretora.jsx';
import Irtrimestral from './calculadoras/Components/IRPJTrimestral/irtrimestral.jsx';
import Cslltrimestral from './calculadoras/Components/CSLLTrimestral/cslltrimestral.jsx';
import Metrocubico from './calculadoras/Components/Metrocubico/metrocubico.jsx';
/* Blog */
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
import Novidadesnadeclaracaoirpf from './blog/Artigos/DIRPF22/Novidadesnadeclaracao/novidadesnadeclaracaoirpf22.jsx';
import Documentosnecessarios from './blog/Artigos/DIRPF22/Documentosnecessarios/documentosnecessarios.jsx';
import Deducoeslegaisdescontosimplificado from './blog/Artigos/DIRPF22/Deducoeslegaisdescontosimplificado/deducoeslegais-descontosimplificado.jsx';
import Microempreendedor from './blog/Artigos/Microempreendedor/microempreendedor.jsx';
import Obrigatoriedade from './blog/Artigos/DIRPF22/Obrigatoriedade/obrigatoriedade.jsx';
import Obrigatoriedadedeemitirnotafiscal from './blog/Artigos/Notasfiscais/obrigatoriedadedeemitirnotafiscal.jsx';
import Tiposdenotaspermitidasparaomei from './blog/Artigos/Microempreendedor/Tiposdenotaspermitidasparaomei/tiposdenotaspermitidasparaomei.jsx';
import RestituicaoIR from './blog/Artigos/DIRPF22/RestituicaoIR/restituicaoIR.jsx';
import Certidoesnegativas from './blog/Artigos/Certidoesnegativas/certidoesnegativas.jsx';
import Pronampe2022 from './blog/Artigos/Pronampe2022/pronampe2022.jsx';
import Contabilidadeeleitoral from './blog/Artigos/Contabilidadeeleitoral/contabilidadeeleitoral.jsx';
import Aposentadoriaporidade2023 from './blog/Artigos/Previdencia-Social/aposentadoriaporidade2023.jsx';
import Aimportranciadasretencoesnareinf from './blog/Artigos/Aimportranciadasretencoesnareinf/aimportranciadasretencoesnareinf.jsx';
import MEIeaImportanciadoContadornaEradaEFDReinf from './blog/Artigos/Microempreendedor/MEIeaImportanciadoContadornaEradaEFDReinf/meieaImportanciadocontadornaeradaefdreinf.jsx';
import NovostributosemudancasnadeclaracaoemDCTFWebapartirdeJaneirode2024 from './blog/Artigos/NovostributosemudancasnadeclaracaoemDCTFWebapartirdeJaneirode2024/novostributosemudancasnadeclaracaoemDCTFWebapartirdeJaneirode2024.jsx';
/* Links */
import Siganos from './contacte-nos/siga-nos.jsx';
import Descadastrese from './descadastrese/descadastrese.jsx';
import Descadastramento from './descadastrese/descadastramento.jsx';
import Certificacaodigital from './parceiros/certificacaodigital.jsx';
import Fisconet from './parceiros/Fisconet/fisconet.jsx';
import Avisoferiado from './link-avisos/aviso-feriado.jsx';
import GestaoNFE from './link-marketing/getao-de-estoque-emissao-nfe/gestao-de-estoque-emissao-nfe.jsx';
import LinkDownloadPlanilhaSimplesNacional from './link-baixar-arquivos/baixar-planilha-simples-naconal.jsx';
import LinkDownloadPlanilhasAuxiliares from './link-baixar-arquivos/baixar-planilha-planilhas-auxiliares.jsx';
import LinkDownloadDeclaracaoSNparaNaoSofrerRetencoes from './link-baixar-arquivos/baixar-declaracao-sn-para-nao-sofrer-retencoes.jsx';


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
      <Route exact path='/calculadoras-irpf-sobre-empregado-clt-escolha-o-ano-da-declaracao' component={IrpfsobreempregadocltEscolhaoAnodaDeclaracao} />
      <Route exact path='/calculadoras-irpf-sobre-empregado-clt-do-exercicio-2017-ano-calendario-2016-ate-exercicio-2023-ano-calendario-2022' component={IRPFsobreEmpregadoCLT} />
      <Route exact path='/calculadoras-irpf-sobre-empregado-clt-no-exercicio-de-2024-ano-calendario-de-2023' component={IrpfsobreempregadocltApartirdoExercicio2024AnoCalendariode2023} />
      <Route exact path='/calculadoras-irpf-sobre-empregado-clt-no-exercicio-de-2025-ano-calendario-de-2024' component={IrpfsobreempregadocltApartirdoExercicio2025AnoCalendariode2024} />
      <Route exact path='/calculadoras-irpf-sobre-empregado-clt-no-exercicio-de-2026-ano-calendario-de-2025' component={IrpfsobreempregadocltApartirdoExercicio2026AnoCalendariode2025} />
      <Route exact path='/calculadoras-irpf-sobre-servidor-ou-empregado-publico' component={IRPFsobreServidorouEmpregadoPublico} />
      <Route exact path='/calculadoras-irpf-mei-comercio' component={IRPFsobreMeiComercio} />
      <Route exact path='/calculadoras-irpf-mei-servico-escolha-o-ano-da-declaracao' component={IrpfsobremeiservicoEscolhaoAnodaDeclaracao} />      
      <Route exact path='/calculadoras-irpf-mei-servico-do-exercicio-2017-ano-calendario-2016-ate-exercicio-2023-ano-calendario-2022' component={IRPFsobreMeiServico} />
      <Route exact path='/calculadoras-irpf-mei-servico-no-exercicio-de-2024-ano-calendario-de-2023' component={IrpfsobremeiservicoApartirdoExercicio2024AnoCalendáriode2023} />
      <Route exact path='/calculadoras-irpf-mei-servico-no-exercicio-de-2025-ano-calendario-de-2024' component={IrpfsobremeiservicoApartirdoExercicio2025AnoCalendáriode2024} />
      <Route exact path='/calculadoras-irpf-mei-servico-no-exercicio-de-2026-ano-calendario-de-2025' component={IrpfsobremeiservicoApartirdoExercicio2026AnoCalendáriode2025} />
      <Route exact path='/calculadoras-irpf-socio-medico' component={IRPFsobreSocioMedico} />
      <Route exact path='/calculadoras-irpf-sobre-trabalhador-autonomo-geral-escolha-o-ano-da-declaracao' component={IrpfsobretrabalhadorautonomogeralEscolhaoAnodaDeclaracao} />
      <Route exact path='/calculadoras-irpf-sobre-trabalhador-autonomo-geral-do-exercicio-2017-ano-calendario-2016-ate-exercicio-2023-ano-calendario-2022' component={IRPFsobreTrabalhadorAutonomoGeral} />
      <Route exact path='/calculadoras-irpf-sobre-trabalhador-autonomo-geral-no-exercicio-de-2024-ano-calendario-de-2023' component={IrpfsobretrabalhadorautonomogeralApartirdoExercicio2024AnoCalendariode2023} />
      <Route exact path='/calculadoras-irpf-sobre-trabalhador-autonomo-geral-no-exercicio-de-2025-ano-calendario-de-2024' component={IrpfsobretrabalhadorautonomogeralApartirdoExercicio2025AnoCalendáriode2024} />
      <Route exact path='/calculadoras-irpf-sobre-trabalhador-autonomo-geral-no-exercicio-de-2026-ano-calendario-de-2025' component={IrpfsobretrabalhadorautonomogeralApartirdoExercicio2026AnoCalendariode2025} />
      <Route exact path='/calculadoras-irpf-autonomo-transporte-passageiro' component={IRPFsobreAutonomoTrasportePassageiro} />
      <Route exact path='/calculadoras-irpf-autonomo-transporte-cargas' component={IRPFsobreAutonomoTrasporteCargas} />
      <Route exact path='/calculadoras-irpf-mei-transporte-passageiro' component={IRPFsobreMeiTransportePassageiro} />
      <Route exact path='/calculadoras-irpf-mei-transporte-cargas' component={IRPFsobreMeiTransporteCargas} />
      <Route exact path='/calculadoras-irpf-advogado-escolha-o-ano-da-declaracao' component={IrpfsobreadvogadoEscolhaoAnodaDeclaracao} />
      <Route exact path='/calculadoras-irpf-advogado-do-exercicio-2017-ano-calendario-2016-ate-exercicio-2023-ano-calendario-2022' component={IRPFsobreAdvogado} />
      <Route exact path='/calculadoras-irpf-advogado-no-exercicio-de-2024-ano-calendario-de-2023' component={IrpfsobreadvogadoApartirdoExercicio2024AnoCalendariode2023} />
      <Route exact path='/calculadoras-Irpf-advogado-no-exercicio-de-2025-ano-calendario-de-2024' component={IrpfsobreadvogadoApartirdoExercicio2025AnoCalendariode2024} />
      <Route exact path='/calculadoras-Irpf-advogado-no-exercicio-de-2026-ano-calendario-de-2025' component={IrpfsobreadvogadoApartirdoExercicio2026AnoCalendariode2025} />
      <Route exact path='/calculadoras-irpf-aposentado-escolha-o-ano-da-declaracao' component={irpfsobreaposentadoEscolhaoAnodaDeclaracao} />
      <Route exact path='/calculadoras-irpf-aposentado-do-exercicio-2017-ano-calendario-2016-ate-exercicio-2023-ano-calendario-2022' component={IRPFsobreAposentado} />
      <Route exact path='/calculadoras-irpf-aposentado-no-exercicio-de-2024-ano-calendario-de-2023' component={IrpfsobreaposentadoApartirdoExercicio2024AnoCalendariode2023} />
      <Route exact path='/calculadoras-Irpf-aposentado-no-exercicio-de-2025-ano-calendario-de-2024' component={IrpfsobreaposentadoApartirdoExercicio2025AnoCalendariode2024} />
      <Route exact path='/calculadoras-Irpf-aposentado-no-exercicio-de-2026-ano-calendario-de-2025' component={IrpfsobreaposentadoApartirdoExercicio2026AnoCalendariode2025} />
      <Route exact path='/calculadoras-day-trader' component={IRdaytrader} />      
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
      <Route exact path='/blog' component={Home} />
      <Route exact path='/blog-nao-se-pode-culpar-a-cargatributaria' component={Naosepodeculparcargatributaria} />
      <Route exact path='/blog-mei' component={Mei} />  
      <Route exact path='/blog-autonomo' component={Autonomo} />     
      <Route exact path='/blog-abrir-uma-empresa' component={Abrirempresa} />
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
      <Route exact path='/blog-novidades-na-declaracao-irpf' component={Novidadesnadeclaracaoirpf} />
      <Route exact path='/blog-documentosnecessarios-irpf' component={Documentosnecessarios} />
      <Route exact path='/blog-deducoes-legais-desconto-simplificado-irpf' component={Deducoeslegaisdescontosimplificado} />
      <Route exact path='/blog-microempreendedor-e-trabalhador-informal-tem-direito-a-receber' component={Microempreendedor} />
      <Route exact path='/blog-saiba-se-voce-esta-obrigado-a-apresentar-a-dirpf' component={Obrigatoriedade} />
      <Route exact path='/blog-como-emitir-nota-fiscal' component={Obrigatoriedadedeemitirnotafiscal} />
      <Route exact path='/blog-tipos-de-notas-permitidas-para-o-mei' component={Tiposdenotaspermitidasparaomei} />
      <Route exact path='/blog-restituicao-ir' component={RestituicaoIR} />
      <Route exact path='/blog-certidoes-negativas' component={Certidoesnegativas} />
      <Route exact path='/blog-pronampe-2022-saiba-como-ter-acesso-ao-benefício-e-veja-as-taxas' component={Pronampe2022} />
      <Route exact path='/blog-contabilidade-eleitoral' component={Contabilidadeeleitoral} />
      <Route exact path='/blog-regras-para-aposentadoria-2023' component={Aposentadoriaporidade2023} />
      <Route exact path='/blog-efd-reinf-e-as-retencoes-na-fonte-guia-essencial-para-empresas/' component={Aimportranciadasretencoesnareinf} />
      <Route exact path='/blog-mei-e-a-Importancia-do-contador-na-era-da-efd-reinf/' component={MEIeaImportanciadoContadornaEradaEFDReinf} />
      <Route exact path='/blog-novos-tributos-e-mudancas-na-declaracao-em-DCTFWeb-a-partir-de-Janeiro-de-2024/' component={NovostributosemudancasnadeclaracaoemDCTFWebapartirdeJaneirode2024} />
      <Route exact path='/siga-nos' component={Siganos} />
      <Route exact path='/descadastrese' component={Descadastrese} />
      <Route exact path='/descadastramento-realizado-com-sucesso' component={Descadastramento} />
      <Route exact path='/parceiro-fisconet-cursos-online/' component={Fisconet} />
      <Route exact path='/parceiro-certificacao-digital' component={Certificacaodigital} />
      <Route exact path='/aviso-de-feriado' component={Avisoferiado} />
      <Route exact path='/gestao-de-estoque-emissao-nfe' component={GestaoNFE} />
      <Route exact path='/download-planilha-simples-nacional' component={LinkDownloadPlanilhaSimplesNacional} />
      <Route exact path='/download-planilha-auxiliares' component={LinkDownloadPlanilhasAuxiliares} />
      <Route exact path='/download-declaracao-sn-para-nao-sofrer-retencoes' component={LinkDownloadDeclaracaoSNparaNaoSofrerRetencoes} />
    </Switch>

    </BrowserRouter>;
  }

export default App;