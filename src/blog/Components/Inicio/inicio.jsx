import React from 'react';
import {Link} from 'react-router-dom';
import './inicio.css';

function Inicio(){
    return <section id="inicio-blog">
       <div className="container">                                 
                <div id="carouselExampleInterval" className="carousel carousel-dark  slide" data-bs-ride="carousel">            
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="3000">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img src="/Images/Certidoesnegativas/capaprincipal.png" />
                                </div>                
                                <div className="col-lg-6">
                                    <h3>Bancos exigem <span className="terceiro-h3">Certidões Negativas de Débitos</span><span className="terceiro-h3"></span> caso você queira um financiamento para sua empresa</h3>                
                                    <h6>Saiba como tirar as certidões que são exigidas para o financiamento de recursos via bancos públicos (Caixa Econômica Federal, Banco do Brasil, e etc.), em ações judiciais, e licitações.</h6>
                                    <a href="/blog-certidoes-negativas#certidoes-negativas" className="btn btn-success btn-lg btn-capa-certidoes-negativas">Continue lendo</a>
                                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-certidoes-negativas">Área do Cliente</a>
                                </div>               
                            </div>    
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img src="/Images/DIRPF22/RestituicaoIR/capaprincipal.png" />
                                </div>                
                                <div className="col-lg-6">
                                    <h3>Saiu o segundo lote de restituição do<span className="terceiro-h3"> Imposto de Renda 2022</span></h3>                
                                    <h6>Saiba como consultar se o seu nome está na lista do segundo lote de restituição, mas não se preocupe, caso não esteja nesse, logo teremos as liberações dos próximos, e nós nos comprometemos a avisá-los assim que forem liberados.</h6>
                                    <a href="/blog-restituicao-ir#restituicao-IR" className="btn btn-success btn-lg btn-capa-restituicao-IR">Continue lendo</a>
                                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-restituicao-IR">Área do Cliente</a>
                                </div>               
                            </div>    
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                        <div className="row">
                                <div className="col-lg-6">
                                    <img src="/Images/Notasfiscais/capaprincipal.png" />
                                </div>                
                                <div className="col-lg-6">
                                    <h3>Emitir <span className="terceiro-h3">Nota Fiscal,</span><span className="terceiro-h3"></span> quem tem essa obrigação?</h3>                
                                    <h6>Todo empreendedor deve emitir a nota fiscal ao fazer qualquer operação negocial. A obrigação vale para o microempreendedor (ME), empresas de pequeno porte (EPPs) e para os microempreendedores individuais (MEIs), salvo quando estes venderem ou prestarem serviços para pessoa física.</h6>
                                    <a href="/blog-obrigatoriedade-de-emitir-nota-fiscal#obrigatoriedade-de-emitir-nota-fiscal" className="btn btn-success btn-lg btn-capa-obrigatoriedade-de-emitir-nota-fiscal">Continue lendo</a>
                                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-obrigatoriedade-de-emitir-nota-fiscal">Área do Cliente</a>
                                </div>               
                            </div>    
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img src="/Images/DIRPF22/Obrigatoriedade/capaprincipal.png" />
                                </div>                
                                <div className="col-lg-6">
                                    <h3>Saiba se você está obrigado a apresentar<span className="terceiro-h3"> declaração do Imposto de Renda</span></h3>                
                                    <h6>Entramos no último mês do prazo de entrega da Declaração do Imposto de Renda Pessoa Física 2022, mas muita gente ainda não sabe se está obrigado a prestar contas com o leão! É importante se atualizar anualmente, pois todos os anos a Receita Federal faz alterações para adequar o imposto à realidade do país.</h6>
                                    <a href="/blog-saiba-se-voce-esta-obrigado-a-apresentar-a-dirpf-22#obrigatoriedade" className="btn btn-success btn-lg btn-capa-obrigatoriedade">Continue lendo</a>
                                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-obrigatoriedade">Área do Cliente</a>
                                </div>               
                            </div>    
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="row">   
                                <div className="col-lg-6">
                                    <img src="/Images/Microempreendedor/Mircroempreendedorestemareceber/capaprincipal.png" />
                                </div>
                                <div className="col-lg-6">
                                    <h3><span className="terceiro-h3">Microempreendedores individuais</span> e<span className="terceiro-h3"> Trabalhadores Informais</span> terão direito a um Microcrédito Digital</h3>                
                                    <h6>O crédito corresponderá de até R$ 1 mil para pessoa física e até R$ 3 mil para Microempreendedor Individual. Com juros de 1,95% ao mês, e a pessoa física ainda poderá dividir em até 24 parcelas. O crédito para o MEI terá juros de 1,99% ao mês, também com quitação em até 24 parcelas.</h6>
                                    <a href="/blog-microempreendedor-e-trabalhador-informal-tem-direito-a-receber#microempreendedor" className="btn btn-success btn-lg btn-capa-microempreendedor">Continue lendo</a>
                                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-microempreendedor">Área do Cliente</a>
                                </div>
                            </div>    
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="row">   
                                <div className="col-lg-6">
                                    <img src="/Images/DIRPF22/Deducoeslegaisoudescontosimplificado/capaprincipal.png" />
                                </div>
                                    <div className="col-lg-6">
                                    <h3><span className="terceiro-h3">Deduções legais</span> ou<span className="terceiro-h3"> desconto simplificado</span> saiba fazer a escolha certa</h3>                
                                    <h6>Tudo depende do total de despesas dedutíveis que você tem em relação à renda. Com base nessas informações você pode avaliar se é mais vantajoso optar por deduções legais ou desconto simplificado, ou seja, verificar qual pode reduzir o imposto devido ou garantir a restituição.</h6>
                                    <a href="/blog-deducoes-legais-desconto-simplificado-irpf-22#deducoes-legais-desonto-simplificado" className="btn btn-success btn-lg btn-capa-deducoes-legais-desonto-simplificado">Continue lendo</a>
                                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-deducoes-legais-desonto-simplificado">Área do Cliente</a>
                                </div> 
                            </div>    
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="row">   
                                <div className="col-lg-6">
                                    <img src="/Images/DIRPF22/Documentosnecessarios/capaprincipal.png" />
                                </div>                
                                <div className="col-lg-6">
                                    <h3>Veja quais são os<span className="terceiro-h3"> documentos</span> necessários para a <span className="terceiro-h3">DIRPF 2022</span></h3>                
                                    <h6>Quanto antes você juntar os documentos, mais tempo terá para correr atrás de alguma informação que faltou, e também deverá guardar os papéis por no mínimo cinco anos, caso a Receita Federal peça para você comprovar a veracidade das informações.</h6>
                                    <a href="/blog-documentosnecessarios-irpf-22#documentos-necessarios" className="btn btn-success btn-lg btn-capa-documentos-necessarios">Continue lendo</a>
                                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-documentos-necessarios">Área do Cliente</a>
                                </div> 
                            </div>    
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="row">   
                                <div className="col-lg-6">
                                    <img src="/Images/Novidadesnadeclaracaoirpf22/capaprincipal.png" />
                                </div>                
                                <div className="col-lg-6">
                                    <h3>Novidades na<span className="terceiro-h3"> declaração do Imposto de Renda</span> em 2022</h3>                
                                    <h6>Atenção para o prazo de entrega da Declaração do Imposto de Renda Pessoa Física 2022 que começou na última segunda-feira, são várias mudanças, e a que chama mais atenção será o recebimento da restituição ou o pagamento do imposto por meio de Pix.</h6>
                                    <a href="/blog-novidades-na-declaracao-irpf-22#novidades-na-declaracao-irpf-22" className="btn btn-success btn-lg btn-capa-consulta-ao-sistema-valores-a-receber-bcb">Continue lendo</a>
                                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-consulta-ao-sistema-valores-a-receber-bcb">Área do Cliente</a>
                                </div> 
                            </div>    
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="row">   
                                <div className="col-lg-6">
                                    <img src="/Images/Consultasaosistemavaloresareceberbcb/capaprincipal.png" />
                                </div>                
                                <div className="col-lg-6">
                                    <h3>Já estão disponíveis as<span className="terceiro-h3">  consultas ao Sistema Valores a Receber</span></h3>                
                                    <h6>Através desta consulta você saberá se tem valor a receber ou não, caso tenha, ficará por dentro da data e o período para consultar e solicitar o resgate do saldo existente.</h6>
                                    <a href="/blog-consulta-ao-sistema-valores-a-receber-bcb#consulta-ao-sistema-valores-a-receber-bcb" className="btn btn-success btn-lg btn-capa-consulta-ao-sistema-valores-a-receber-bcb">Continue lendo</a>
                                    <a href="/" className="btn btn-outline-primary btn-lg btn-capa-consulta-ao-sistema-valores-a-receber-bcb">Área do Cliente</a>
                                </div>
                            </div>    
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="row">   
                                <div className="col-lg-6">
                                    <img src="/Images/Mei/capaprincipal.png" />
                                </div>                                
                                <div className="col-lg-6">
                                    <h3>O que significa MEI?</h3>                  
                                    <h3><span className="terceiro-h3">MEI é o Micro Empreendedor Individual</span> </h3>
                                    <h6>O MEI tem facilidades com a abertura de conta bancária, no pedido de empréstimos e na emissão de notas fiscais, além de possuir algums direitos de uma pessoa física como: auxilio-maternidade, afastamento remunerado por problemas de saude e aposentadoria...</h6>
                                    <a href="/blog-mei#mei" className="btn btn-success btn-lg btn-inicio-blog">Continue lendo</a>
                                    <a href="/" className="btn btn-outline-primary btn-lg btn-inicio-blog">Area do Cliente</a>
                                </div> 
                            </div>    
                        </div> 
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="row">   
                                <div className="col-lg-6">
                                    <img src="/Images/Autonomo/capaprincipal.png" />
                                </div>                        
                                <div className="col-lg-6">
                                    <h3>Autônomo</h3>   
                                    <h3><span className="terceiro-h3">Conhecido como trabalhador autônomo</span></h3>               
                                    <h6>É o profissional que trabalha por conta própria e desempenha uma atividade remunerada sem vínculo empregatício.</h6>
                                    <h6>O autônomo é a pessoa física que possui a sua própria atividade econômica com maior independência financeira, não recebe um salário fixo, mas sim uma remuneração específica e previamente estabelecida por um contrato de prestação de serviços de âmbito temporário...</h6>
                                    <a href="/blog-autonomo#autonomo" className="btn btn-success btn-lg btn-inicio-blog">Continue lendo</a>
                                    <a href="/" className="btn btn-outline-primary btn-lg btn-inicio-blog">Área do Cliente</a>
                                </div>   
                            </div>    
                        </div>   
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="row">   
                                <div className="col-lg-6">
                                    <img src="/Images/Abrirempresa/capaprincipal.png" />
                                </div>                                    
                                <div className="col-lg-6">
                                    <h3>Como abrir uma empresa?</h3>   
                                    <h3><span className="terceiro-h3">Veja como fazer o registro da sua microempresa.</span></h3>               
                                    <h6>Antes de tudo é preciso se informar. Faça uma pesquisa antecipada sobre a existência de empresas constituídas com nomes empresariais idênticos ou semelhantes ao nome pesquisado.</h6>
                                    <h6>Essa é uma etapa obrigatória, que deve ser preenchida no site da junta comercial...</h6>
                                    <a href="/blog-abrir-empresa#abrirempresa" className="btn btn-success btn-lg btn-inicio-blog">Continue lendo</a>
                                    <a href="/" className="btn btn-outline-primary btn-lg btn-inicio-blog">Área do Cliente</a>
                                </div>   
                            </div>    
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="row">   
                                <div className="col-lg-6">
                                    <img src="/Images/Simplesnacional/capaprincipal.png" />
                                </div>                                    
                                <div className="col-lg-6">
                                    <h3>O que é Simples Nacional?</h3>   
                                    <h3><span className="terceiro-h3">Conheça um regime tributário exclusivo para micro e pequenas empresas.</span></h3>               
                                    <h6>O Simples Nacional foi criado em 2007 para descomplicar a vida dos micro e pequenos empresários, que tinham que se preocupar com inúmeras guias diferentes de tributos para se manterem regularizados perante a Receita Federal...</h6>
                                    <a href="/blog-simples-nacional#simplesnacional" className="btn btn-success btn-lg btn-inicio-blog">Continue lendo</a>
                                    <a href="/" className="btn btn-outline-primary btn-lg btn-inicio-blog">Área do Cliente</a>
                                </div>    
                            </div>    
                        </div>  
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="row">   
                                <div className="col-lg-6">
                                    <img src="/Images/Slu/capaprincipal.png" />
                                </div>                                                
                                <div className="col-lg-6">
                                    <h3>Sociedade Limitada Unipessoal (SLU)</h3>   
                                    <h3><span className="terceiro-h3">um Marco no Mundo dos Negócios</span></h3>               
                                    <h6>Pensando em uma natureza juridica que não precisasse ter sócios, não houvesse a exigência de um valor mínimo para o capital social, além de o patrimônio do empreendedor pudesse ficar separado do patrimônio da empresa. Então foi criado um formato de empresa que pode ser aberta abranjendo tudo isso.</h6>
                                    <a href="/blog-sociedade-limitada-unipessoal#sociedadelimitadaunipessoal" className="btn btn-success btn-lg btn-inicio-blog">Continue lendo</a>
                                    <a href="/" className="btn btn-outline-primary btn-lg btn-inicio-blog">Área do Cliente</a>
                                </div>     
                            </div>    
                        </div>  
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="row">   
                                <div className="col-lg-6">
                                    <img src="/Images/Ei/capaprincipal.png" />
                                </div>                                            
                                <div className="col-lg-6">
                                    <h3>Empresário Individual (EI)</h3>   
                                    <h3><span className="terceiro-h3">O que é e como funciona?</span></h3>               
                                    <h6>Também conhecido como "firma individual", esse formato é diferente de MEI e ideal para quem quer exercer em nome próprio uma atividade empresarial, sem a necessidade de um sócio. Entre as vantagens, não há necessidade de Capital Social mínimo, é possível se enquadrar no Simples Nacional, além de ser permitido contratar vários funcionários.</h6>
                                    <a href="/blog-empresario-individual#empresarioindividual" className="btn btn-success btn-lg btn-inicio-blog">Continue lendo</a>
                                    <a href="/" className="btn btn-outline-primary btn-lg btn-inicio-blog">Área do Cliente</a>
                                </div>     
                            </div>    
                        </div>   
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="row">   
                                <div className="col-lg-6">
                                    <img src="/Images/Diferecasform/capaprincipal.png" />
                                </div>
                                
                                <div className="col-lg-6">
                                    <h3>Diferenças entre EI, MEI, Eireli e SLU</h3>   
                                    <h3><span className="terceiro-h3">Parece iguais mas não são!</span></h3>               
                                    <h6>Apesar de parecidos, existem algumas particularides de um para o outro que devemos analisar com calma, se possivél com ajuda de um contador, para que possamos escolher o melhor formato de empresa.</h6>
                                    <h6>Continue lendo e veja algumas caracteristas importantes que as diferenciam.</h6>
                                    <a href="/blog-diferencas-mei-eireli-slu-ei#diferencasmeieirelisluei" className="btn btn-success btn-lg btn-inicio-blog">Continue lendo</a>
                                    <a href="/" className="btn btn-outline-primary btn-lg btn-inicio-blog">Área do Cliente</a>
                                </div>     
                            </div>    
                        </div>   
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="row">   
                                <div className="col-lg-6">
                                    <img src="/Images/Eireli/capaprincipal.png" />
                                </div>                                        
                                <div className="col-lg-6">
                                    <h3>EIRELI</h3>   
                                    <h3><span className="terceiro-h3">Empresa Individual de Responsabilidade Limitada</span></h3>               
                                    <h6>Criado em 2011 com o objetivo de legalizar seu negócio como sociedade limitada, a Eireli tornou-se uma excelente alternativa para os profissionais que não se enquadram no MEI ou na EI, além da vantagem de separar o patrimônio pessoal do patrimônio da empresa, o que já não acontece na empresa individual.</h6>
                                    <a href="/blog-eireli#eireli" className="btn btn-success btn-lg btn-inicio-blog">Continue lendo</a>
                                    <a href="/" className="btn btn-outline-primary btn-lg btn-inicio-blog">Área do Cliente</a>
                                </div>     
                            </div>    
                        </div>   
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="row">   
                                <div className="col-lg-6">
                                    <img src="/Images/Inssmudacasexo/capaprincipal.png" />
                                </div>                                        
                                <div className="col-lg-6">
                                    <h3>INSS</h3>   
                                    <h3><span className="terceiro-h3">Entenda como fica a aposentadoria para as pessoas que trocou de sexo</span></h3>               
                                    <h6>A idade é um requisito importante a ser analisado pelo sistema previdenciário. Atualmente, a regra geral é de 65 anos para homens e 62 anos para mulheres. Mas o contribuinte do INSS pode ter mudanças nessas referências quando são transgêneros. Entenda...</h6>
                                    <a href="/blog-inss-entenda-como-e-a-aposentadoria-de-quem-muda-de-sexo#inssentendacomoeaaposentadoriadequemmudadesexo" className="btn btn-success btn-lg btn-inicio-blog">Continue lendo</a>
                                    <a href="/" className="btn btn-outline-primary btn-lg btn-inicio-blog">Área do Cliente</a>
                                </div>      
                            </div>    
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="row">   
                                <div className="col-lg-6">
                                    <img src="/Images/Dicasparaoanonovo/capaprincipal.png" />
                                </div>                                        
                                <div className="col-lg-6">
                                    <h3>Dicas para planejar o ano novo da sua empresa <span className="terceiro-h3"> e estruturar os principais pilares do seu negócio.</span></h3>                
                                    <h6>Com o final do ano se aproximando é comum querer planejar um novo ciclo com metas a conquistar nos próximos 365 dias, para que tudo ocorra conforme o esperado, é importante montar ações para cada pilar do seu negócio: finanças, marketing, vendas, pessoas e estratégias. Confira algumas dicas...</h6>
                                    <a href="/blog-dicas-para-planejar-o-ano-novo-da-sua-empresa#dicasparaplanejaroanonovodasuaempresa" className="btn btn-success btn-lg btn-inicio-blog">Continue lendo</a>
                                    <a href="/" className="btn btn-outline-primary btn-lg btn-inicio-blog">Área do Cliente</a>
                                </div>       
                            </div>    
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="row">   
                                <div className="col-lg-6">
                                    <img src="/Images/Profissionaisautonomosestaoemcrescimento/capaprincipal.png" />
                                </div>                                        
                                <div className="col-lg-6">
                                    <h3>Profissionais autônomos estão em crescimento<span className="terceiro-h3"> e já somam mais de 24,8 milhões de brasileiros</span></h3>                
                                    <h6>De acordo com dados da Pnad Contínua, divulgada pelo IBGE em setembro, o trabalho por conta própria, conhecidos como profissionais autônomos, atingiu 4,2% a mais comparado ao trimestre anterior, isso corresponde a 28,3% de toda a população ativa no mercado de trabalho.</h6>
                                    <a href="/blog-profissionais-autonomos-estao-em-crescimento#profissionaisautonomosestaoemcrescimento" className="btn btn-success btn-lg btn-inicio-blog">Continue lendo</a>
                                    <a href="/" className="btn btn-outline-primary btn-lg btn-inicio-blog">Área do Cliente</a>
                                </div>    
                            </div>    
                        </div>                              
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="row">   
                                <div className="col-lg-6">
                                    <img src="/Images/Normasparaemissao/capaprincipal.png" />
                                </div>                                        
                                <div className="col-lg-6">
                                    <h3>Normas para emissão e entrega<span className="terceiro-h3"> do Comprovante de Rendimentos 2022</span></h3>                
                                    <h6>Por meio da <a href="http://www.normaslegais.com.br/legislacao/instrucao-normativa-rfb-2060-2021.htm" className="segundo-a"> Instrução Normativa RFB 2.060/2021</a> foram estabelecidas normas sobre o comprovante de rendimentos pagos e de imposto sobre a renda retido na fonte a vigorar a partir de 01.01.2022.</h6>
                                    <a href="/blog-normas-para-emissao-e-entrega-do-comprovante-de-rendimentos#normasparaemissaoeentregadocomprovantederendimentos" className="btn btn-success btn-lg btn-inicio-blog">Continue lendo</a>
                                    <a href="/" className="btn btn-outline-primary btn-lg btn-inicio-blog">Área do Cliente</a>
                                </div>      
                            </div>    
                        </div>   
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="row">   
                                <div className="col-lg-6">
                                    <img src="/Images/Comoaproveitaraomaximoo/capaprincipal.png" />
                                </div>                                        
                                <div className="col-lg-6">
                                    <h3>Como aproveitar ao máximo<span className="terceiro-h3"> o contrato de experiência de trabalho com o empregado?</span></h3>                
                                    <h6>Todas as contratações de empregados são feitas com um período de experiência para que o empregador possa avaliar se as aptidões do novo contratado atendem efetivamente as necessidades da empresa, pois é insuficiente avaliar...</h6>
                                    <a href="/blog-como-aproveitar-ao-maximo-o-contrato-de-experiencia-de-trabalho-com-o-empregado#comoaproveitaraomaximoocontratodeexperienciadetrabalhocomoempregado" className="btn btn-success btn-lg btn-inicio-blog">Continue lendo</a>
                                    <a href="/" className="btn btn-outline-primary btn-lg btn-inicio-blog">Área do Cliente</a>
                                </div>        
                            </div>    
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="row">   
                                < div className="col-lg-6">
                                    <img src="/Images/Brasileirospreferemcomprasonline/capaprincipal.png" />
                                </div>                                        
                                <div className="col-lg-6">
                                    <h3>Pesquisa aponta que 71% dos brasileiros preferem compras online<span className="terceiro-h3"> pandemia ajudou a mudar a forma de consumo</span></h3>                
                                    <h6>Uma pesquisa realizada pela ConQuist Consultoria mostrou que a pandemia mudou a maneira como os consumidores fazem compras ou contratam um serviços. O estudo mapeou o que mudou no atendimento prestado ao consumidor na pandemia.</h6>
                                    <a href="/blog-brasileiros-preferem-compras-online#brasileirospreferemcomprasonline" className="btn btn-success btn-lg btn-inicio-blog">Continue lendo</a>
                                    <a href="/" className="btn btn-outline-primary btn-lg btn-inicio-blog">Área do Cliente</a>
                                </div>       
                            </div>    
                        </div>    
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>               
            </div>
    </section>;
  }

export default Inicio;