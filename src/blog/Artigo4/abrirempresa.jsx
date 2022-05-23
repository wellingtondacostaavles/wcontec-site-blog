import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import Parceiros from '../../site/Components/parceiros';
import Footer from '../../site/Components/contato';
import Categorias from '../Components/Categorias/categorias';
import Recomendados from '../Components/Recomendados/recomendados';
import Artigos from '../Components/Artigos/artigos';
import Capa from '../Artigo4/capa';
import Artigosrelacionados from '../Artigo4/artigosrelacionados';
import Cardareadocliente from '../Components/Cardareadoclente/cardareadocliente';
import './artigo4.css';

function Abrirempresa(){
    return <div>
      <Navbar/>
      <Capa/>         
      
    <section id="abrirempresa">

        <div className="container">
            <div className="row"> 
                <h3>Alvará de Funcionamento</h3>
                <p>Além da consulta de viabilidade do nome empresarial, é importante que nesta etapa você procure a prefeitura onde sua empresa será instalada para verificar os critérios de concessão do alvará de funcionamento para o exercício da sua atividade no local escolhido.</p>
            </div> 
        </div>      
            
        
        <div className="container">
            <div className="row">                 
                <h3>Na Junta Comercial do estado ou no Cartório de Registro de Pessoa Jurídica</h3>
                <p>O registro legal de uma empresa é tirado na Junta Comercial do estado ou no Cartório de Registro de Pessoa Jurídica. Para as pessoas jurídicas, esse passo é equivalente à obtenção da Certidão de Nascimento de uma pessoa física. A partir desse registro, a empresa existe oficialmente - o que não significa que ela possa começar a operar.</p>
                <p>Será necessário apresentar uma série de documentos e formulários que podem variar de um estado para o outro para se fazer o registro. Os mais comuns são:</p>
                <p><li className="sbAccessibliltyFontSize">Documentos pessoais de cada sócio (no caso de uma sociedade);</li></p>
                <p><li className="sbAccessibliltyFontSize">Contrato Social.</li></p>   
            </div>
        </div>

                    
        <div className="container">
            <div className="row">
                <h3>O que é contrato social?</h3>
                <p>Contrato Social é a peça mais importante do início da empresa, e nele devem estar definidos claramente os seguintes itens:</p>
                <p><li className="sbAccessibliltyFontSize">Objetivo da empresa;</li></p>
                <p><li className="sbAccessibliltyFontSize">Interesse das partes;</li></p>
                <p><li className="sbAccessibliltyFontSize">Descrição do aspecto societário e a maneira de integralização das cotas.</li></p>
                <p>Para ser válido, o Contrato Social deverá ter o visto de um advogado. As micro empresas e empresas de pequeno porte são dispensadas da assinatura do advogado, conforme prevê o Estatuto da Micro e Pequena Empresa.</p>
                
                
                <div className="container">
                    <div className="row"> 
                        <div className="titulo">
                            <h3>Documentos necessários para a inscrição</h3>
                        </div>
                    </div>
                </div>

                 <div className="container">
                    <div className="row">
                        <div className="col-lg-6">             
                            <p>Se tudo estiver certo, será possível prosseguir com o arquivamento do ato constitutivo da empresa, quando geralmente serão necessários os documentos:</p>
                            <p><li className="sbAccessibliltyFontSize">Contrato Social ou Requerimento de Empresário Individual ou Estatuto, em três vias;</li></p>            
                            <p><li className="sbAccessibliltyFontSize">Cópia autenticada do RG e CPF do titular ou dos sócios;</li></p>
                            <p><li className="sbAccessibliltyFontSize">Requerimento Padrão (Capa da Junta Comercial), em uma via;</li></p>
                            <p><li className="sbAccessibliltyFontSize">FCN (Ficha de Cadastro Nacional) modelo 1 e 2, em uma via;</li></p>
                            <p><li className="sbAccessibliltyFontSize">Pagamento de taxas através de DARF.</li></p>
                            <p>Os preços e prazos para abertura variam de estado para estado. Para isso, o ideal é consultar o site da Junta Comercial do estado em que a empresa estiver localizada.</p>
                       </div> 
                        
                        <div className="col-lg-6">
                            <center><img src="/Images/Abrirempresa/capasecundaria.png" /></center>
                        </div>
                        
                        <div className="row">
                            <p>Registrada a empresa, será entregue ao seu proprietário o NIRE (Número de Identificação do Registro de Empresa).que é uma etiqueta ou um carimbo, feito pela Junta Comercial ou Cartório, contendo um número que é fixado no ato constitutivo.</p>
                        </div>
                    </div>
                </div>
                
                
                <h3>CNPJ</h3>     
                <p>Com o NIRE em mãos, chega a hora de registrar a empresa como contribuinte, ou seja, de obter o CNPJ. O registro do CNPJ é feito exclusivamente pela internet, no site da Receita Federal por meio do download de um programa específico, o Documento Básico de Entrada.</p>
                <p>Você preenche a solicitação e os documentos necessários, que são informados no site, devem ser enviados por Sedex ou pessoalmente para a Secretaria da Receita Federal, e a resposta é dada também pela Internet.</p>
                <h3>Escolha de atividades</h3>
                <p>Ao fazer o cadastro no CNPJ, é preciso escolher a atividade que a empresa irá exercer. Essa classNameificação será utilizada não apenas na tributação, mas também na fiscalização das atividades da empresa. O ideal é que você tenha uma atividade principal e, no máximo, 14 secundárias.</p>
                <p>Lembre-se que nem todas as empresas podem optar pelo Simples, principalmente as prestadoras de serviços que exigem habilitação profissional. Portanto, antes de fazer sua inscrição no CNPJ, consulte os tipos de empresa que não se enquadram no Simples.</p>    
                <h3>inscrição e Registro</h3> 
                <p>Para as empresas que trabalham com a produção de bens e/ou com venda de mercadorias é necessário o registro na Secretaria Estadual da Fazenda, a chamada Inscrição Estadual.</p> 
                <p>Ela é obrigatória para os setores do comércio, indústria e serviços de transporte intermunicipal e interestadual. Também estão incluídos os serviços de comunicação e energia. Ela é necessária para a obtenção da inscrição no ICMS (Imposto sobre Circulação de Mercadorias e Serviços)</p> 
                <p>Esta solicitação deverá ser via internet. Para isso, é necessário ter um contador, e este deve estar pré-autorizado (ter senha de acesso), pois é ele quem fará a solicitação de inscrição. </p> 
                <h3>Documentos</h3>
                <p>Em geral a documentação pedida para o cadastro é:</p>  
                <p><li className="sbAccessibliltyFontSize">DUC (Documento Único de Cadastro), em três vias;</li></p> 
                <p><li className="sbAccessibliltyFontSize">DCC (Documento Complementar de Cadastro), em 1 via;</li></p>
                <p><li className="sbAccessibliltyFontSize">Comprovante de endereços dos sócios, cópia autenticada ou original;</li></p>
                <p><li className="sbAccessibliltyFontSize">Cópia autenticada do documento que prove direito de uso do imóvel, como por exemplo o contrato de locação do imóvel ou escritura pública do imóvel;</li></p>
                <p><li className="sbAccessibliltyFontSize">Número do cadastro fiscal do contador;</li></p>
                <p><li className="sbAccessibliltyFontSize">Comprovante de contribuinte do ISS, para as prestadoras de serviços;</li></p>
                <p><li className="sbAccessibliltyFontSize">Certidão simplificada da Junta (para empresas constituídas há mais de três meses);</li></p>
                <p><li className="sbAccessibliltyFontSize">Cópia do ato constitutivo;</li></p>
                <p><li className="sbAccessibliltyFontSize">Cópia do CNPJ;</li></p>
                <p><li className="sbAccessibliltyFontSize">Cópia do alvará de funcionamento;</li></p>
                <p><li className="sbAccessibliltyFontSize">RG e CPF dos sócios.</li></p>
                <p>Vale lembrar que alguns estados a inscrição estadual pode ser solicitada depois do pedido do alvará de funcionamento.</p>
                <h3>Registro municipal</h3>
                <p>Para as empresas que trabalham com prestação de serviços é necessário o registro na Prefeitura Municipal. Na maioria dos estados esse registro sairá automaticamente após o registro da empresa na Junta Comercial. Para os demais, o processo varia de acordo com as regras de cada município. Consulte como funciona no seu.</p>
                <h3>Alvará do corpo de bombeiros</h3>
                <p>As edificações e áreas de risco de incêndio deverão possuir Alvará de Prevenção e Proteção Contra Incêndio - APPCI, expedido pelo Corpo de Bombeiros Militar do estado. Esta solicitação deverá ser protocolada juntamente ao Corpo de Bombeiros, que fará uma avaliação do grau de risco da edificação. O procedimento para liberação do alvará varia de acordo com o grau de risco de cada edificação.</p>
                <h3>Alvará de funcionamento</h3>
                <p>Todos os estabelecimentos comerciais, industriais e/ou de prestação de serviços precisam de uma licença prévia do município para funcionar. Esta licença é o Alvará de Funcionamento e Localização. Ele deve ser solicitado junto à prefeitura e o procedimento para obtenção do alvará varia de acordo com a legislação de cada município.</p>
                <p>As demais secretarias do município como as de Saúde, Meio Ambiente, Planejamento, Obras e Viação, poderão estar envolvidas no processo de legalização de uma empresa, tudo vai depender da atividade desenvolvida. A informação das exigências legais municipais você deve obter no 1º passo, no momento que fizer a consulta de viabilidade.</p>
                <h3>Documentos</h3>
                <p>Geralmente, a documentação necessária é:</p>
                <p><li className="sbAccessibliltyFontSize">Formulário próprio da prefeitura;</li></p>
                <p><li className="sbAccessibliltyFontSize">Consulta prévia de endereço aprovada;</li></p>
                <p><li className="sbAccessibliltyFontSize">Cópia do CNPJ;</li></p>
                <p><li className="sbAccessibliltyFontSize">Cópia do Contrato Social;</li></p>
                <p><li className="sbAccessibliltyFontSize">Laudo dos órgãos de vistoria, quando necessário.</li></p>
                <h3>Cadastro na previdência social</h3>
                <p>Após a concessão do alvará de funcionamento, a empresa já está apta a entrar em operação. No entanto, ainda faltam duas etapas fundamentais para o seu funcionamento. A primeira é o cadastro na Previdência Social, independente da empresa possuir funcionários.</p>
                <p>Para contratar funcionários, é preciso arcar com as obrigações trabalhistas sobre eles. Ainda que seja um único funcionário, ou apenas os sócios inicialmente, a empresa precisa estar cadastrada na Previdência Social e pagar os respectivos tributos.</p>
                <p>Assim, o representante deverá dirigir-se à Agência da Previdência de sua jurisdição para solicitar o cadastramento da empresa e seus responsáveis legais. O prazo para cadastramento é de 30 dias após o início das atividades.</p>
                <h3>Aparato Fiscal</h3>
                <p>Agora resta apenas preparar o aparato fiscal para que seu empreendimento entre em ação. Será necessário solicitar a autorização para impressão das notas fiscais e a autenticação de livros fiscais.</p>
                <p>Isso é feito na prefeitura de cada cidade. Empresas que pretendam dedicar-se às atividades de indústria e comércio deverão ir à Secretaria de Estado da Fazenda. No caso do Distrito Federal, independente do segmento de atuação da empresa, esta autorização é emitida pela Secretaria de Fazenda Estadual.</p>
                <p>Uma vez que o aparato fiscal esteja pronto e registrado, sua empresa pode começar a operar legalmente.</p>
                <br></br>
                <p>Fonte de informações: SEBRAE</p>
            </div>
            <div className="row text-center">    
                <div className="col-lg-4"></div>
                <div className="col-lg-4">  
                    <a href="/#abrir-empresa-gratis" className="btn btn-outline-primary btn-lg btn-capa-abrirempresa-link">Abrir empresa grátis</a>
                </div>
                <div className="col-lg-4"></div>                            
            </div>        
        </div>           
    </section>
    <Artigosrelacionados/>
    <Artigos/>    
    <Cardareadocliente/>
    <Categorias/>
    <Recomendados/>
    <Parceiros/>
    <Footer/>       
    </div> 
  }

export default Abrirempresa;