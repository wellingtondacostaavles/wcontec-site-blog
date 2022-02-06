import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

/* Paginas */
import Site from './site/site.jsx';
import Descadastrese from './descadastrese/descadastrese.jsx';
import Descadastramento from './descadastrese/descadastramento.jsx';
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



function Blog(){
    return <BrowserRouter>
    <Route exact path='/' component={Site} />    
    <Route exact path='/descadastrese' component={Descadastrese} />
    <Route exact path='/descadastramento-realizado-com-sucesso' component={Descadastramento} />
    <Route exact path='/blog' component={Home} />
    <Route exact path='/blog/nao-se-pode-culpar-a-cargatributaria' component={Naosepodeculparcargatributaria} />
    <Route exact path='/blog/mei' component={Mei} />  
    <Route exact path='/blog/autonomo' component={Autonomo} />     
    <Route exact path='/blog/abrir-empresa' component={Abrirempresa} />
    <Route exact path='/blog/simples-nacional' component={Simplesnacional} />
    <Route exact path='/blog/sociedade-limitada-unipessoal' component={Sociedadelimitadaunipessoal} />
    <Route exact path='/blog/empresario-individual' component={Empresarioindividual} />
    <Route exact path='/blog/diferencas-mei-eireli-slu-ei' component={Diferencasmeieirelisluei} />
    <Route exact path='/blog/eireli' component={Eireli} />
    <Route exact path='/blog/inss-entenda-como-e-a-aposentadoria-de-quem-muda-de-sexo' component={Inssentendacomoeaaposentadoriadequemmudadesexo} />
    <Route exact path='/blog/hora-extra-passo-a-passo-de-como-calcular' component={Horaextrapassoapassodecomocalcular} />
    <Route exact path='/blog/dicas-para-planejar-o-ano-novo-da-sua-empresa' component={Dicasparaplanejaroanonovodasuaempresa} />
    <Route exact path='/blog/sebrae-oferece-capacitacao' component={Sebraeoferececapacitacao} />
    <Route exact path='/blog/profissionais-autonomos-estao-em-crescimento' component={Profissionaisautonomosestaoemcrescimento} />
    <Route exact path='/blog/dicas-para-quem-deseja-mudar-de-carreira' component={Dicasparaquemdesejamudardecarreira} />
    <Route exact path='/blog/normas-para-emissao-e-entrega-do-comprovante-de-rendimentos' component={Normasparaemissaoeentregadocomprovantederendimentos} />
    <Route exact path='/blog/como-aproveitar-ao-maximo-o-contrato-de-experiencia-de-trabalho-com-o-empregado' component={Comoaproveitaraomaximoocontratodeexperienciadetrabalhocomoempregado} />
    <Route exact path='/blog/transicao-do-operacional-para-o-empreendedorismo' component={Transicaodooperacionalparaoempreendedorismo} />
    <Route exact path='/blog/brasileiros-preferem-compras-online' component={Brasileirospreferemcomprasonline} />
    <Route exact path='/blog/senado-aprova-tributacao-menor-para-caminhoneiros' component={Senadoaprovatributacaomenorparacaminhoneiros} />


    </BrowserRouter>;
  }

export default Blog;

