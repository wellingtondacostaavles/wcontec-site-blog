import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

/* Paginas */
import Site from './site/site.jsx';
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
    <Route exact path='/blog' component={Home} />
    <Route exact path='/blog/naosepodeculparcargatributaria' component={Naosepodeculparcargatributaria} />
    <Route exact path='/blog/mei' component={Mei} />  
    <Route exact path='/blog/autonomo' component={Autonomo} />     
    <Route exact path='/blog/abrirempresa' component={Abrirempresa} />
    <Route exact path='/blog/simplesnacional' component={Simplesnacional} />
    <Route exact path='/blog/sociedadelimitadaunipessoal' component={Sociedadelimitadaunipessoal} />
    <Route exact path='/blog/empresarioindividual' component={Empresarioindividual} />
    <Route exact path='/blog/diferencasmeieirelisluei' component={Diferencasmeieirelisluei} />
    <Route exact path='/blog/eireli' component={Eireli} />
    <Route exact path='/blog/inssentendacomoeaaposentadoriadequemmudadesexo' component={Inssentendacomoeaaposentadoriadequemmudadesexo} />
    <Route exact path='/blog/horaextrapassoapassodecomocalcular' component={Horaextrapassoapassodecomocalcular} />
    <Route exact path='/blog/dicasparaplanejaroanonovodasuaempresa' component={Dicasparaplanejaroanonovodasuaempresa} />
    <Route exact path='/blog/sebraeoferececapacitacao' component={Sebraeoferececapacitacao} />
    <Route exact path='/blog/profissionaisautonomosestaoemcrescimento' component={Profissionaisautonomosestaoemcrescimento} />
    <Route exact path='/blog/dicasparaquemdesejamudardecarreira' component={Dicasparaquemdesejamudardecarreira} />
    <Route exact path='/blog/normasparaemissaoeentregadocomprovantederendimentos' component={Normasparaemissaoeentregadocomprovantederendimentos} />
    <Route exact path='/blog/comoaproveitaraomaximoocontratodeexperienciadetrabalhocomoempregado' component={Comoaproveitaraomaximoocontratodeexperienciadetrabalhocomoempregado} />
    <Route exact path='/blog/transicaodooperacionalparaoempreendedorismo' component={Transicaodooperacionalparaoempreendedorismo} />
    <Route exact path='/blog/brasileirospreferemcomprasonline' component={Brasileirospreferemcomprasonline} />
    <Route exact path='/blog/senadoaprovatributacaomenorparacaminhoneiros' component={Senadoaprovatributacaomenorparacaminhoneiros} />


    </BrowserRouter>;
  }

export default Blog;

