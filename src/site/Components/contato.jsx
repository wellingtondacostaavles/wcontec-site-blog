import React from 'react';
import {Link} from 'react-router-dom';

function Footer(){
  var ano = new Date().getFullYear();
  
    return <section id="contato">    
          <div className="container">        
            <div className="row">
                <div className="col-lg-4"></div>
                  <div className="col-lg-4">
                    <img src="/Images/Logo-WCONTEC.P.png"/>
                  </div>
                  <div className="col-lg-4"></div>
                <div>   
                  <ul className="list-unstyled list-inline social text-center">
                      <li className="list-inline-item zoom-img"><a href="https://t.me/+bLsp1DsfZOo2M2Ix" target="_blank"><i className="fa fa-telegram fa-2x"></i></a></li>
                      <li className="list-inline-item zoom-img"><a href="https://instagram.com/wcontec?r=nametag" target="_blank"><i className="fa fa-instagram fa-2x"></i></a></li>
                      <li className="list-inline-item zoom-img"><a href="https://bit.ly/3VDpN2j" target="_blank"><i className="fas fa-comment fa-2x"></i></a></li>
                      <li className="list-inline-item zoom-img"><a href="https://youtube.com/@wcontec2017" target="_blank"><i className="fa fa-youtube fa-2x"></i></a></li>
                      <li className="list-inline-item zoom-img"><a href="https://twitter.com/w_contec" target="_blank"><i className="fa fa-twitter fa-2x"></i></a></li>
                      <li className="list-inline-item zoom-img"><a href="https://chat.whatsapp.com/Co4DkBgkhrr6XSDiRL3CBP" target="_blank"><i className="fa fa-whatsapp fa-2x"></i></a></li>
                  </ul>
              </div>
            </div>
            <div className="container-fluid" id="termos">
              <div className="row termodeuso">
                  <p className="text-center"><a className="termos-a" data-bs-toggle="collapse" href="#termos-de-uso-e-política-de-privacidade" role="button" aria-expanded="false" aria-controls="collapseExample">Termos de Uso e Política de Privacidade - </a>Copyright © 2023 Wcont serviços contábeis. Todos direitos reservados.</p>
                  <div className="collapse" id="termos-de-uso-e-política-de-privacidade" data-parent="#termos">
                  <h6><li className="sbAccessibliltyFontSize">Termos de Uso</li></h6>
                  <p>Os direitos de propriedade intelectual presentes neste site, seu conteúdo, aplicativos e marcas pertencem à Wcont Serviços Contabeis Ltda, doravante Wcont. É expressamente vedada a comercialização, reprodução, modificação, publicação ou distribuição, a qualquer título ou forma, da totalidade ou de parte das informações, dos materiais técnicos e demais conteúdos existentes neste site, sem a prévia e expressa autorização da Wcont. As informações, os materiais técnicos e demais conteúdos existentes neste site têm propósito exclusivamente informativo. A Wcont serviços contábeis não se responsabiliza por qualquer prejuízo causado pelo uso dessas informações.</p>
                  <p>Caso o cliente deixe este site através de algum link nele contido e visualize conteúdos não fornecidos pela Wcont, o cliente o fará por sua própria conta e risco. A Wcont não verifica, controla, aprova ou garante a adequação ou a exatidão do conteúdo de links. A Wcont não é responsável por prejuízos, perdas ou danos ocasionados por quaisquer atrasos, defeitos, erros ou omissões que possam existir nos sistemas, serviços, informações ou em outros conteúdos fornecidos por links contidos neste site.</p> 
                  <h6><li className="sbAccessibliltyFontSize">Política de Privacidade de Dados Pessoais</li></h6>
                  <p>Por política de privacidade de dados pessoais para clientes e usuários (a “Política de Privacidade”), a Wcont Serviços Contábeis, sociedade limitada com sede na Av. Barão de Vera Cruz, 188 D, Cruz de Rebouças, Igarassu/PE, CEP: 53.625-015, inscrita no CNPJ/MF sob o nº 30.394.935/0001-34, empresa de contabilidade em parceria com a Osayk Plataforma de Negócios e Tecnologia Ltda, CNPJ de nº 22.296.308/0001-69, situada na rua Paulo Assis Ribeiro, 103, Barra da Tijuca, Rio de Janeiro/RJ, CEP. 22621-210. Juntas oferecem o direito de uso via web (internet) de plataforma tecnológica financeira. (a “Wcont”, “nós” ou “nosso/nossa”), informa e dá ciência ao usuário (o “Usuário”, “Usuários”, “Você”) das práticas da Wcontec com relação à coleta, armazenamento e compartilhamento de dados pessoais previstos legalmente (o “Tratamento de Dados Pessoais”, se individualmente, e os “Tratamentos de Dados Pessoais”, se em conjunto) que obtidos quando você acessa e/ou interage com e/ou utiliza nosso website e aplicativo (o “Sistema”).</p>
                  <p>A Wcont realiza tratamentos de dados pessoais de titularidade dos usuários, em razão disso, determina todas as suas ações a partir de uma premissa de respeito e atenção com a privacidade e segurança desses dados pessoais. Para deixar você no controle.</p>
                  <p>1. O que é nossa política de privacidade?</p>
                  <p>1.1. A nossa Política de Privacidade fornece as informações sobre as diretrizes dos tratamentos de dados pessoais dentro da Wcont para usuários que acessam as nossas plataformas; e sobre o exercício dos direitos dos usuários, enquanto titulares dos dados pessoais.</p>
                  <p>2. Quais dados pessoais tratamos?</p>
                  <p>2.1. Em termos gerais, a Wcont solicita os seguintes dados pessoais:</p>
                  
                  <div className="row">    
                    <table className="table">
                      <thead>
                        <tr>
                            <th className="width34"><p>Categorias de Dados</p></th>
                            <th className="width66"><p>Exemplos de Dados</p></th>
                        </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <th scope="row" className="text-start"><p>Dados de Identificação</p></th>
                              <td className="bi"><p>Nome, CPF, RG e etc.</p></td>
                          </tr>
                      </tbody>   
                      <tbody>     
                          <tr>
                              <th scope="row" className="text-start"><p>Dados de Contato</p></th>
                              <td className="bi"><p>Endereço, e-mail corporativo ou pessoal, telefone corporativo ou pessoal etc.</p></td>
                          </tr>
                      </tbody>
                      <tbody>
                          <tr>
                              <th scope="row" className="text-start"><p>Dados de Autenticação</p></th>
                              <td className="bi"><p>Login, senha de acesso ou outras credenciais de autenticação etc.</p></td>
                          </tr>
                      </tbody>
                      <tbody>
                            <tr>
                              <th scope="row" className="text-start"><p>Dados de Localização</p></th>
                              <td className="bi"><p>País, coordenadas GPS/geolocalização etc.</p></td>
                            </tr>
                      </tbody>
                      <tbody>
                            <tr>
                              <th scope="row" className="text-start"><p>Dados de Rastreamento</p></th>
                              <td className="bi"><p>Cookies e informações de navegação, IPs etc.</p></td>
                            </tr>
                      </tbody>
                      <tbody>
                            <tr>
                              <th scope="row" className="text-start"><p>Dados Bancários</p></th>
                              <td className="bi"><p>Chave PIX, nome do titular da conta, agência e conta bancária etc.</p></td>
                            </tr>
                      </tbody> 
                      
                            <tr>
                              <th scope="row" className="text-start"><p>Dados de Comunicações</p></th>
                              <td className="bi"><p>E-mails/comunicações eletrônicas enviados pelos usuários; gravações telefônicas realizadas pelos usuários com a empresa, etc.</p></td>
                            </tr>
                    </table>
                  </div>

                  <p>2.2. Utilizamos os seus dados pessoais em constante observância às bases legais que autorizem o seu uso e à finalidade a que se destina, de forma proporcional às atividades de tratamentos de dados pessoais que iremos executar.</p>
                  <p>3. Para quais finalidades coletamos os seus dados pessoais?</p>
                  <p>3.1. Nós coletamos os seus dados pessoais para operar, fornecer, melhorar, personalizar, entender, oferecer suporte, anunciar serviços, acesso e uso da plataforma de gestão financeira com assessoria contábil online. </p>
                  <p>3.2. Você pode escolher não receber comunicações da Wcont para fins de marketing. Para tanto, basta gerenciar as suas preferências nas opções disponíveis no rodapé de nossos e-mails, ou entrando em contato conosco através do endereço: contato@wcontec.com.br</p>
                  <p>3.3. Outras novas atividades que demandem a execução dos tratamentos de dados pessoais pela Wcont porventura não relatadas acima serão devidamente incluídas nesta política e informadas aos titulares dos dados pessoais.</p>
                  <p>4. Como coletamos os seus dados pessoais?</p>
                  <p>4.1. A Wcont poderá coletar dados pessoais das seguintes maneiras:</p>
                  <p>4.1.1.	Dados fornecidos por você. Dados que você envia para nós de forma voluntária no momento do cadastro na plataforma de gestão financeira com assessoria contábil online, para acessar e utilizar, bem como solicitar orientação e suportes diversos. Caso você não forneça esses dados, não poderá utilizar a nossa plataforma de serviços.</p>
                  <p>5. Com quem compartilhamos seus dados pessoais?</p>
                  <p>5.1. A Wcont compartilha seus dados pessoais em casos de necessidade para nos ajudar a operar, fornecer, aprimorar, entender, personalizar, oferecer suporte e anunciar serviços:</p>
                  <p>5.1.1. Grupo Econômico. Empresas do mesmo grupo econômico do qual a Wcont faz parte, para o envio de comunicações sobre seus serviços e produtos.</p>
                  <p>5.1.2. Terceiros. Fornecedores, prestadores de serviços e/ou parceiros comerciais, quando necessário à comercialização dos nossos produtos, realização de publicidade, inclusive destes, otimização de produtos, administração de nossos negócios e concretização de objetivos comerciais. Nesses casos, esses prestadores de serviços especializados se submeterão à adoção de contrato que assegure o sigilo e a confidencialidade, bem como o tratamento adequado dos dados. </p>
                  <p>5.1.3. Órgãos governamentais. Para cumprir obrigações legais e regulatórias, em especial entidades fiscais, inclusive por ordem judicial ou solicitação do Ministério Público, de autoridade policial ou administrativa.</p>
                  <p>5.2. A Wcont não vende, aluga ou comercializa quaisquer dados pessoais para terceiros.</p>
                  <p>6. Quais os direitos dos titulares de dados pessoais?</p>
                  <p>6.1. São seus direitos, de exercício a qualquer momento:</p>
                  <p>6.1.1. Direito de informação sobre a possibilidade de não fornecer de consentimento. Você pode pedir explicações e orientações sobre a possibilidade de não fornecer consentimento e as consequências dessa decisão, caso esta seja a base legal utilizada.</p>
                  <p>6.1.2. Direito de acesso aos dados e confirmação de existência de tratamento. Você pode ter acesso facilitado às informações sobre os tratamentos que realizamos nos seus dados. Você pode obter, mediante requisição prévia, informações sobre o uso e operação que realizamos com os seus dados, seja internamente, com outras empresas ou órgãos governamentais. Você pode, ainda, solicitar uma cópia dos dados pessoais que nós possuímos sobre você.</p>
                  <p>6.1.3. Direito de correção de dados incompletos, inexatos ou desatualizados. Você pode solicitar a correção ou alteração dos seus dados pessoais, caso você identifique que alguns deles estão incorretos, incompletos ou desatualizados. Contudo, para ser efetivada essa correção, teremos que checar a validade dos dados que você nos fornecerá.</p>
                  <p>6.1.4. Direito de anonimização, bloqueio ou eliminação dos dados. Caso o tratamento se dê com base no consentimento e estes dados sejam desnecessários para as finalidades informadas, sejam excessivos ou tratados em desconformidade com a legislação, você pode solicitar a sua eliminação, bloqueio ou anonimização. Favor notar que este direito é limitado, como qualquer outro direito previsto em lei; assim, se houver razões legítimas para a sua manutenção, como eventual obrigação legal ou regulatória, exercício regular de direitos ou outra base legal que o justifique, seu tratamento será mantido.</p>
                  <p>6.1.5. Direito de portabilidade dos dados. Você pode requisitar que forneçamos seus dados pessoais a você ou a terceiros que você escolher. Isso significa que deveremos fornecer seus dados pessoais, conforme solicitado, mas não garantimos que o formato compartilhado seja compatível com o lugar de destino.</p>
                  <p>6.1.6. Direito de revogar o consentimento e solicitar a eliminação dos dados tratados com base nele. Você tem o direito de revogar o seu consentimento e/ou solicitar a eliminação dos seus dados processados de acordo com a base legal do consentimento, no entanto, isso não afetará a legalidade de qualquer tratamento realizado com seus dados antes de você revogá-lo. Se Você solicitar atendimento a um destes direitos, talvez não possam mais ser fornecidos determinados produtos, e talvez sejam comprometidos seu acesso aos sistemas e suas funcionalidades.</p>
                  <p>6.2. Nos reservamos o direito de solicitar seus dados de identificação, autenticação e contato para garantir o exercício dos seus direitos sobre dados pessoais de sua titularidade ou de pessoas que você, de forma legítima e comprovada, representa.</p>
                  <p>6.3. A Wcont pode contatar você para obter outras informações sobre a sua solicitação no canal de comunicações adequado.</p>
                  <p>6.4. A Wcont envida os maiores e melhores esforços para responder todas as solicitações legítimas dentro de um prazo razoável.</p>
                  <p>6.5. Para exercer os seus direitos, você deverá entrar em contato pelo e-mail contato@wcontec.com.br. A solicitação será analisada e, sendo pertinente, respondida em até 15 (quinze) dias, contados do recebimento, e qualquer correção, caso necessária, será realizada o mais breve possível.</p>
                  <p>7. Como armazenamos os seus dados pessoais?</p>
                  <p>7.1. A Wcont faz uso das melhores práticas de governança, técnicas, organizacionais e de segurança destinadas a proteger seus dados pessoais nos nossos servidores, na nuvem contratada com terceiro e nas estações físicas e digitais de trabalho.</p>
                  <p>7.2. A segurança das informações depende também da segurança do seu computador, dispositivo ou rede que você faça uso para se comunicar com a Wcont, bem como o nível de segurança que você utiliza para proteger seus dados pessoais (e.g.: login de Usuário e senha), sendo sua a responsabilidade de certificar a gestão adequada e necessária para proteger essas informações.</p>
                  <p>8. Por quanto tempo os seus dados pessoais ficam armazenados?</p>
                  <p>8.1. Se Você fez um cadastro nos nossos sistemas, as informações serão mantidas enquanto você mantiver a atividade da conta e por até 05 (cinco) anos, após a sua inatividade, em razão da finalidade de cumprimento de obrigação legal ou regulatória.</p>
                  <p>8.2. Nós manteremos seus dados pessoais pelo tempo que for necessário para cumprir com as finalidades para as quais são tratados. Caso você solicite a exclusão de seus dados, favor notar que estes serão mantidos se necessários ao cumprimento de uma finalidade legítima, como obrigação legal ou regulatória, exercício regular de direitos ou outra base legal que justifique a manutenção do seu tratamento.</p>
                  <p>9. Dúvidas, controle dos dados e como exercer seus direitos:</p>
                  <p>9.1. Se Você quiser falar com a Wcont sobre qualquer tipo de ocorrência e/ou pedidos de orientação e/ou curiosidades e/ou sugestões e/ou comentários e/ou críticas sobre os Tratamentos de Dados Pessoais que realizamos, Você pode entrar em contato conosco no seguinte endereço: contato@wcontec.com.br.</p>
                  <p>10. Mudanças na política</p>
                  <p>10.1. Esta Política de Privacidade será revisada e republicada periodicamente, portanto recomendamos que visite este documento frequentemente; as mudanças serão comunicadas individualmente apenas se houver alterações que alterem significativamente os direitos dos titulares à sua privacidade e a proteção de seus dados pessoais.</p>
                  <p><i className="fa fa-arrow-up"><a className="termos-a" data-bs-toggle="collapse" href="#termos-de-uso-e-política-de-privacidade" role="button" aria-expanded="false" aria-controls="collapseExample"> Voltar</a></i></p>
                </div>                
              </div> 
            </div>
          </div>
     </section>;
  }

export default Footer;