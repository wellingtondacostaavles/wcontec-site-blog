import React, {useState, useEffect} from 'react';

import './distribuicaolucromei.css';

function Distribuicaolucromei(){    

    const [ReceitaServicos, setNro1] = useState(0);
    const [ReceitaVendas, setNro2] = useState(0);
    const [TransportedeCargas, setNro3] = useState(0);
    const [TransportedePassageiros, setNro4] = useState(0);
    const [Impostosetaxas, setNro5] = useState(0);
    const [DespesasdoMEI, setNro6] = useState(0);
    
    const [Presucao32, setResultado1] = useState(0);
    const [operacaoPresucao32, setOperacao1] = useState('Somar');

    const [Presucao8, setResultado2] = useState(0);
    const [operacaoPresucao8, setOperacao2] = useState('Somar');

    const [Presucao16, setResultado3] = useState(0);
    const [operacaoPresucao16, setOperacao3] = useState('Somar');

    const [BaseCalculo, setResultado4] = useState(0);
    const [operacaoBaseCalculo, setOperacao4] = useState('Somar');

    const [LucroIsento, setResultado5] = useState(0);
    const [operacaoLucroIsento, setOperacao5] = useState('Subtrair');

    const [ReceitaBrua, setResultado6] = useState(0);
    const [operacaoReceitaBrua, setOperacao6] = useState('Somar');

    const [LucroTributavel, setResultado7] = useState(0);
    const [operacaoLucroTributavel, setOperacao7] = useState('Subtrair');

  
    const calcular = () =>{  
        if (operacaoPresucao32=="Somar")
        return (parseFloat(ReceitaServicos) * 0.32);
    }
    const calcular2 = () =>{  
        if (operacaoPresucao8=="Somar")
        return ((parseFloat(ReceitaVendas) + parseFloat(TransportedeCargas)) * 0.08);
    }
    const calcular3 = () =>{  
        if (operacaoPresucao16=="Somar")
        return (parseFloat(TransportedePassageiros) * 0.16);
    }
    const calcular4 = () =>{  
        if (operacaoBaseCalculo=="Somar")
        return (parseFloat(Presucao32) + parseFloat(Presucao8) + parseFloat(Presucao16));
    }
    const calcular5 = () =>{  
        if (operacaoLucroIsento=="Subtrair")
        return (parseFloat(BaseCalculo) - parseFloat(Impostosetaxas));
    }
    const calcular6 = () =>{  
        if (operacaoReceitaBrua=="Somar")
        return (parseFloat(ReceitaServicos) + parseFloat(ReceitaVendas) + parseFloat(TransportedeCargas) + parseFloat(TransportedePassageiros));
    }
    const calcular7 = () =>{  
        if (operacaoLucroTributavel=="Subtrair")
        return (parseFloat(ReceitaBrua) - parseFloat(DespesasdoMEI) - parseFloat(LucroIsento));
    }

    useEffect (() =>{setResultado1(calcular())},[ReceitaServicos, ReceitaVendas, operacaoPresucao32]);
    useEffect (() =>{setResultado2(calcular2())},[ReceitaVendas, TransportedeCargas, operacaoPresucao8]);
    useEffect (() =>{setResultado3(calcular3())},[TransportedePassageiros, operacaoPresucao16]);
    useEffect (() =>{setResultado4(calcular4())},[Presucao32, Presucao8, Presucao16, operacaoBaseCalculo]);
    useEffect (() =>{setResultado5(calcular5())},[BaseCalculo, Impostosetaxas, operacaoLucroIsento]);
    useEffect (() =>{setResultado6(calcular6())},[ReceitaServicos, ReceitaVendas, TransportedeCargas, TransportedePassageiros, operacaoReceitaBrua]);
    useEffect (() =>{setResultado7(calcular7())},[ReceitaBrua, DespesasdoMEI, LucroIsento, operacaoLucroTributavel]);
      
        
        return <div>         
        
        <section id="distribuicao-lucro-mei">  

        <div className="row text-center">
                <div className="titulo">
                    <h1>Lucro do MEI a ser distribuido na DIRPF</h1>
                    <p>Calcule o valor da parcela isenta e tributável a ser informada na sua declaração de imposto de renda</p>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">    
                    <div>
                        <label>Receita de serviços</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" nin="0.00" value={ReceitaServicos} onChange={(e) => setNro1(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Receita de vendas</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={ReceitaVendas} onChange={(e) => setNro2(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>R. Transporte de Cargas</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={TransportedeCargas} onChange={(e) => setNro3(e.target.value)}/>
                        </div>                     
                      </div>  
                    <div>
                        <label>R. Transporte de Passageiros</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={TransportedePassageiros} onChange={(e) => setNro4(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Impostos e taxas pagas</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={Impostosetaxas} onChange={(e) => setNro5(e.target.value)}/>
                        </div>                     
                    </div>                  
                    <div>
                        <label>Despesas do MEI*</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={DespesasdoMEI} onChange={(e) => setNro6(e.target.value)}/>
                        </div>                     
                    </div>
                    </div>                    
                <div className="col-sm-4"></div>  

                <div className="table-responsive">
            <table className="table">
                <tr>
                    <th className="width80"></th>
                    <th className="width20"></th>                    
                </tr>
            <tbody>
                <tr>
                    <th scope="row" className="text-start">Parcela do Faturamento ISENTA na DIRPF</th>
                    <td className="bi">{[LucroIsento].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
                </tr>                                                                
            </tbody> 
            </table>
        </div>
            </div><div className="container">
                <div className="row text-center">
                <h3>A parcela tributável a ser informada na DIRPF será de:</h3>
                <h1>{[LucroTributavel].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</h1>
                <p><span className="segundo-p">*DESPESAS DO MEI (Água, Luz, Telefone, compra de Mercadoria, Aluguel do Espaço).</span></p>
                <p><span className="segundo-p">Atenção: O valor encontrado na calculadora deverá ser analisado e confirmado por seu contador responsável.</span></p>
                <p><span className="segundo-p">Saiba o que é um</span><a href="/blog-mei" target="_blank" className="segundo-p"> Microempreendedor Individual,</a> <span className="segundo-p">e conheça seus benefícios.</span></p>
                </div>
            </div>          
        </section>       
      </div> 
    }
  
  export default Distribuicaolucromei;