import React, {useState, useEffect} from 'react';

import './cofinsreal.css';

function Cofinsreal(){   
    
    const [nro1, setNro1] = useState(0);
    const [nro2, setNro2] = useState(0);
    const [nro3, setNro3] = useState(0);
    const [nro4, setNro4] = useState(0);
    const [nro5, setNro5] = useState(0);
    const [nro6, setNro6] = useState(0);
    const [nro7, setNro7] = useState(0);
    const [nro8, setNro8] = useState(0);
    const [nro9, setNro9] = useState(0);
    const [nro10, setNro10] = useState(0);
    const [nro11, setNro11] = useState(0);
    const [nro12, setNro12] = useState(0);
    const [nro13, setNro13] = useState(0);
    const [nro14, setNro14] = useState(0);
    const [nro15, setNro15] = useState(0);
    const [nro16, setNro16] = useState(0);
    const [nro17, setNro17] = useState(0);
    const [nro18, setNro18] = useState(0);
    const [nro19, setNro19] = useState(0);
    const [nro20, setNro20] = useState(0);
    const [nro21, setNro21] = useState(0);
    const [nro22, setNro22] = useState(0);
    const [nro23, setNro23] = useState(0);
    const [nro24, setNro24] = useState(0);
    const [nro25, setNro25] = useState(0);
    const [nro26, setNro26] = useState(0);
    const [nro27, setNro27] = useState(0);
    const [nro28, setNro28] = useState(0);
    const [nro29, setNro29] = useState(0);
    const [nro30, setNro30] = useState(0);
    const [nro31, setNro31] = useState(0);
    const [nro32, setNro32] = useState(0);
    const [nro33, setNro33] = useState(0);
    const [nro34, setNro34] = useState(0);
    




    const [resultado1, setResultado1] = useState(0);
    const [operacao1, setOperacao1] = useState('Somar');

    const [resultado2, setResultado2] = useState(0);
    const [operacao2, setOperacao2] = useState('Somar');

    const [resultado3, setResultado3] = useState(0);
    const [operacao3, setOperacao3] = useState('Somar');

    const [resultado4, setResultado4] = useState(0);
    const [operacao4, setOperacao4] = useState('Subtrair');

    const [resultado5, setResultado5] = useState(0);
    const [operacao5, setOperacao5] = useState('Somar');

    const [resultado6, setResultado6] = useState(0);
    const [operacao6, setOperacao6] = useState('Subtrair');


  
    const calcular = () =>{  
        if (operacao1=="Somar")
        return (parseFloat(nro1) + parseFloat(nro2) + parseFloat(nro3) + parseFloat(nro4) + parseFloat(nro5) + parseFloat(nro6) + parseFloat(nro7) + parseFloat(nro8) + parseFloat(nro9));
    }

    const calcular2 = () =>{  
        if (operacao2=="Somar")
        return (parseFloat(nro10) + parseFloat(nro11) + parseFloat(nro12) + parseFloat(nro13) + parseFloat(nro14) + parseFloat(nro15) + parseFloat(nro16) + parseFloat(nro17) + parseFloat(nro18) + parseFloat(nro19));
    }

    const calcular3 = () =>{  
        if (operacao3=="Somar")
        return (parseFloat(nro20) + parseFloat(nro21) + parseFloat(nro22) + parseFloat(nro23) + parseFloat(nro24) + parseFloat(nro25) + parseFloat(nro26) + parseFloat(nro27) + parseFloat(nro28) + parseFloat(nro29) + parseFloat(nro30) + parseFloat(nro31));
    }

    
    const calcular4 = () =>{  
        if (operacao4=="Subtrair")
        return (parseFloat(resultado1) - parseFloat(resultado2) - parseFloat(resultado3));
    }

    const calcular5 = () =>{  
        if (operacao5=="Somar")
        return (parseFloat(resultado4) * 0.076);
    }

    const calcular6 = () =>{  
        if (operacao6=="Subtrair")
        return (parseFloat(resultado5) - parseFloat(nro32) - parseFloat(nro33) - parseFloat(nro34));
    }


    
    useEffect (() =>{setResultado1(calcular())},[nro1, nro2, nro3, nro4, nro5, nro6, nro7, nro8, nro9, operacao1]);
    useEffect (() =>{setResultado2(calcular2())},[nro10, nro11, nro12, nro13, nro14, nro15, nro16, nro17, nro18, nro19, operacao2]);
    useEffect (() =>{setResultado3(calcular3())},[nro20, nro21, nro22, nro23, nro24, nro25, nro26, nro27, nro28, nro29, nro30, nro31, operacao3]);
    useEffect (() =>{setResultado4(calcular4())},[resultado1, resultado2, resultado3, operacao4]);
    useEffect (() =>{setResultado5(calcular5())},[resultado4, operacao5]);
    useEffect (() =>{setResultado6(calcular6())},[resultado5, nro32, nro33, nro34, operacao6]);
    
    
      
        
        return <div>         
        
        <section id="cofins-lucro-real">  

        <div className="row text-center">
                <div className="titulo">
                    <h1>COFINS lucro real</h1>
                    <p>Calcule o valor da COFINS mensal a pagar com base no lucro real</p>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">    
                    <div>
                        <label>Receita de serviços</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" nin="0.00" value={nro1} onChange={(e) => setNro1(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Receita de vendas</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro2} onChange={(e) => setNro2(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Receitas de Renda Fixa</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro3} onChange={(e) => setNro3(e.target.value)}/>
                        </div>                     
                      </div>  
                    <div>
                        <label>Receitas de Renda Variável</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro4} onChange={(e) => setNro4(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Devoluções de compras</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro5} onChange={(e) => setNro5(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Receitas de Aluguéis</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro6} onChange={(e) => setNro6(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Recuperações de Créditos</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro7} onChange={(e) => setNro7(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Demais Receitas Operacionais</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro8} onChange={(e) => setNro8(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Vendas de Ativo Permanente</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro9} onChange={(e) => setNro9(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Receitas com Saídas Isentas, Não Alcançadas pela Incidência ou Sujeitas a Alíquota Zero</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro10} onChange={(e) => setNro10(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Receitas decorrentes das Vendas do Ativo Permanente</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro11} onChange={(e) => setNro11(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Receita de Produtos com Substituição Tributária Incluídos no Faturamento</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro12} onChange={(e) => setNro12(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Receita de Produtos de Tributação Monofásica</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro13} onChange={(e) => setNro13(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Vendas Canceladas e Descontos Incondicionais</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro14} onChange={(e) => setNro14(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Reversões e Recuperações de Créditos Baixados como Perda</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro15} onChange={(e) => setNro15(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Dividendos Recebidos e Resultado Positivo de Equivalência Patrimonial </label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro16} onChange={(e) => setNro16(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Receitas de Exportação</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro17} onChange={(e) => setNro17(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Receitas de Prestação de Serviços a PJ ou PF do Exterior</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro18} onChange={(e) => setNro18(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Vendas a Empresa Comercial Exportadora com Fim de Exportação</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro19} onChange={(e) => setNro19(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Mercadorias Adquiridas para Revenda - Exceto de Tributação Monofásica ou de Substituição Tributária</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro20} onChange={(e) => setNro20(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Bens e Serviços (Insumos) Utilizados na Prestação  de Serviços e Produção para Venda</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro21} onChange={(e) => setNro21(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Energia Elétrica - Custo ou Despesa</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro22} onChange={(e) => setNro22(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Aluguéis Pagos a PJ no Brasil (Prédios, Máquinas e Equipamentos) </label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro23} onChange={(e) => setNro23(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Despesas Financeiras (empréstimos)  e Arrendamento Pagos a PJ no Brasil, Exceto PJ optante pelo Simples </label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro24} onChange={(e) => setNro24(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Depreciação dos Bens do Ativo Imobilizado Utilizados no Processo Produtivo</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro25} onChange={(e) => setNro25(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Depreciações/Amortizações de Edificações, Benfeitorias em Imóveis e de Terceiros</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro26} onChange={(e) => setNro26(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Devoluções de Vendas Tributadas pela Não Cumulatividade</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro27} onChange={(e) => setNro27(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Gasto/Custo com Armazenagem de Produto e Frete </label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro28} onChange={(e) => setNro28(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Crédito Presumido - Mercadorias de Origem Animal ou Vegetal - 80%</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro29} onChange={(e) => setNro29(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>ICMS sobre vendas</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro30} onChange={(e) => setNro30(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>IPI sobre vendas</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro31} onChange={(e) => setNro31(e.target.value)}/>
                        </div>
                    </div>    
                    <div>
                        <label>COFINS pago na importação</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro32} onChange={(e) => setNro32(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Saldo Credor de mês anterior</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro33} onChange={(e) => setNro33(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Retenções Feitas - Anteçipações</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={nro34} onChange={(e) => setNro34(e.target.value)}/>
                        </div>                     
                    </div>
                </div>
                <div className="col-sm-4"></div>    
            </div> 
            <br></br>
            <div className="container">
            <div className="row text-center">
              <h3>A COFINS apurada no lucro real será de:</h3>
              <h1>{[resultado6].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</h1>
              <p>Códido do Tributo 5856</p>
              <p><span className="segundo-p">ATENÇÃO: A COFINS encontrado na calculadora quando negativo poderá ser utilizado como crédito no mês seguinte e tambem deverá ser confirmado com o contador responsável pela empresa.</span></p>
            </div>
        </div>          
        </section>       
      </div> 
    }
  
  export default Cofinsreal;