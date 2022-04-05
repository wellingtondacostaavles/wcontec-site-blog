import React, {useState, useEffect} from 'react';

import './pispresumido.css';

function Pispresumido(){    

    const [ReceitaServicos, setNro1] = useState();
    const [ReceitaVendas, setNro2] = useState();
    const [DevolucaoVenda, setNro3] = useState();
    const [ICMSsobreVendas, setNro4] = useState();
    const [IPIsobreVendas, setNro5] = useState();
    const [RetencoesAntecipacoes, setNro6] = useState();
    const [Competencia, setNro7] = useState();

    const [TotalReceitas, setResultado1] = useState(0);
    const [operacaoTotalReceitas, setOperacao1] = useState('Somar');

    const [BaseCalculo, setResultado2] = useState(0);
    const [operacaoBaseCalculo, setOperacao2] = useState('Subtrair');

    const [TributoAntesAntecipacao, setResultado3] = useState(0);
    const [operacaoTributoAntesAntecipacao, setOperacao3] = useState('Somar');

    const [TributoFinal, setResultado4] = useState(0);
    const [operacaoTributoFinal, setOperacao4] = useState('Subtrair');

    const ResultadoPIS = TributoFinal
    
    const situacao1 = 'O PIS a recolher mensal será de:'
    const situacao2 = ''

    const SituacaoPIS = ResultadodaCOFINS(ResultadoPIS)

        function ResultadodaCOFINS(ResultadoPIS){
            if (ResultadoPIS > 0){
                return situacao1
            } else {
            return situacao2
            }
        }   

   
  
    const calcular = () =>{  
        if (operacaoTotalReceitas=="Somar")
        return (parseFloat(ReceitaServicos) + parseFloat(ReceitaVendas));
    }

    const calcular2 = () =>{  
        if (operacaoBaseCalculo=="Subtrair")
        return (parseFloat(TotalReceitas) - parseFloat(DevolucaoVenda) - parseFloat(ICMSsobreVendas) - parseFloat(IPIsobreVendas));
    }

    const calcular3 = () =>{  
        if (operacaoTributoAntesAntecipacao=="Somar")
        return (parseFloat(BaseCalculo) * 0.0065);
    }

    const calcular4 = () =>{  
        if (operacaoTributoFinal=="Subtrair")
        return (parseFloat(TributoAntesAntecipacao) - parseFloat(RetencoesAntecipacoes));
    }

    useEffect (() =>{setResultado1(calcular())},[ReceitaServicos, ReceitaVendas, operacaoTotalReceitas]);
    useEffect (() =>{setResultado2(calcular2())},[TotalReceitas, DevolucaoVenda, ICMSsobreVendas, IPIsobreVendas, operacaoBaseCalculo]);
    useEffect (() =>{setResultado3(calcular3())},[BaseCalculo, operacaoTributoAntesAntecipacao]);
    useEffect (() =>{setResultado4(calcular4())},[TributoAntesAntecipacao, RetencoesAntecipacoes, operacaoTributoFinal]);
      
        
        return <div>         
        
        <section id="pis-lucro-presumido">  

        <div className="row text-center">
                <div className="titulo">
                    <h1>PIS presumido</h1>
                    <p>Calcule o valor do PIS mensal a pagar com base no lucro presumido</p>
                </div>
            </div>
            
            <div className="container">    
                <div className="row inputs-pis-lucro-presumido"> 
                    <div className="col-sm-3">    
                        <div className="mb-3">
                            <label for="ReceitaServicos-pis-lucro-presumido">Receita de serviços</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text">R$</span>
                                <input className="form-control" type="number" name="ReceitaServicos-pis-lucro-presumido" id="ReceitaServicos-pis-lucro-presumido" aria-label="Amount (to the nearest dollar)"  step="0.01" nin="0.00" value={ReceitaServicos} onChange={(e) => setNro1(e.target.value)}/>
                            </div>                     
                        </div>
                    </div>    
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label for="ReceitaVendas-pis-lucro-presumido">Receita de vendas</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text">R$</span>
                                <input className="form-control" type="number" name="ReceitaVendas-pis-lucro-presumido" id="ReceitaVendas-pis-lucro-presumido" aria-label="Amount (to the nearest dollar)"  step="0.01" value={ReceitaVendas} onChange={(e) => setNro2(e.target.value)}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">    
                        <div className="mb-3">
                            <label for="DevolucaoVenda-pis-lucro-presumido">Devolução de venda</label>
                            <div className="input-group mb-3">
                                <span className="input-group-text">R$</span>
                                <input className="form-control" type="number" name="DevolucaoVenda-pis-lucro-presumido" id="DevolucaoVenda-pis-lucro-presumido" aria-label="Amount (to the nearest dollar)"  step="0.01" value={DevolucaoVenda} onChange={(e) => setNro3(e.target.value)}/>
                            </div>                     
                        </div>  
                    </div>
                    <div className="col-sm-3">    
                        <div className="mb-3">
                            <label for="ICMSsobreVendas-pis-lucro-presumido">ICMS sobre vendas</label>
                            <div className="input-group mb-3">
                                <span className="input-group-text">R$</span>
                                <input className="form-control" type="number" name="ICMSsobreVendas-pis-lucro-presumido" id="ICMSsobreVendas-pis-lucro-presumido" aria-label="Amount (to the nearest dollar)"  step="0.01" value={ICMSsobreVendas} onChange={(e) => setNro4(e.target.value)}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">    
                        <div className="mb-3">
                            <label>IPI sobre vendas</label>                
                            <div for="IPIsobreVendas-pis-lucro-presumido" className="input-group mb-3">
                                <span className="input-group-text">R$</span>
                                <input className="form-control" type="number" name="IPIsobreVendas-pis-lucro-presumido" id="IPIsobreVendas-pis-lucro-presumido" aria-label="Amount (to the nearest dollar)"  step="0.01" value={IPIsobreVendas} onChange={(e) => setNro5(e.target.value)}/>
                            </div>                     
                        </div>
                   </div>
                   <div className="col-sm-3">     
                        <div className="mb-3">
                            <label for="RetencoesAntecipacoes-pis-lucro-presumido">PIS retido na fonte</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text">R$</span>
                                <input className="form-control" type="number" name="RetencoesAntecipacoes-pis-lucro-presumido" id="RetencoesAntecipacoes-pis-lucro-presumido" aria-label="Amount (to the nearest dollar)"  step="0.01" value={RetencoesAntecipacoes} onChange={(e) => setNro6(e.target.value)}/>
                            </div>                     
                        </div>                    
                    </div>
                </div>
            </div>    
                        
            <div className="container">
                <div className="row text-center">
                <h3>{SituacaoPIS}</h3>
                {SituacaoPIS ? <h1>{[TributoFinal].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</h1> : ''}
                {SituacaoPIS ? <p>Códido do Tributo 8109</p> : ''}
                {SituacaoPIS ? <p><span className="terceiro-p">Atenção: O valor encontrado na calculadora deverá ser confirmado com o contador responsável pela empresa.</span></p> : ''}
                </div>
            </div>          
        </section>       
      </div> 
    }
  
  export default Pispresumido;