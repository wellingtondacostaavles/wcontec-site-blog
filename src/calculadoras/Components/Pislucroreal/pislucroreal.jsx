import React, {useState, useEffect} from 'react';

import './pislucroreal.css';

function Pislucroreal(){   
    
    const [ReceitaServicos, setNro1] = useState(0);
    const [ReceitaVendas, setNro2] = useState(0);
    const [ReceitasFinanceiras, setNro3] = useState(0);
    const [ReceitasAlugueis, setNro4] = useState(0);
    const [DevolucoesdeCompras, setNro5] = useState(0);
    const [DemaisReceitasOperacionais, setNro6] = useState(0);      

    const [ReceitasNaoTributaveis, setNro7] = useState(0);
    
    const [OperacoescomDiretoaCredito, setNro8] = useState(0);
    
    const [ICMSsobrevendas, setNro9] = useState(0);
    
    const [IPIsobrevendas, setNro10] = useState(0);

    const [PISpagonaimportacao, setNro11] = useState(0);
    const [SaldoCredordemesanterior, setNro12] = useState(0);
    const [RetençõesFeitasAnteçipacoes, setNro13] = useState(0); 
    
    //Total das Receitas tributáveis
    const [TotaldasReceitasTributaveis, setResultado1] = useState(0);
    const [operacaoTotaldasReceitasTributaveis, setOperacao1] = useState('Somar');
    
    //Calculo dos tributos sobre receitas tributáveis
    const [TributosReceitadeServicos, setResultado2] = useState(0);
    const [operacaoTributosobreceitadeservicos, setOperacao2] = useState('Multiplicar');

    const [TributoReceitaVendas, setResultado3] = useState(0);
    const [operacaoTributoReceitaVendas, setOperacao3] = useState('Multiplicar');
  
    const [TributoReceitasFinanceiras, setResultado4] = useState(0);
    const [operacaoReceitasFinanceiras, setOperacao4] = useState('Multiplicar');
  
    const [TributoReceitasAlugueis, setResultado5] = useState(0);
    const [operacaoReceitasAlugueis, setOperacao5] = useState('Multiplicar');
      
    const [TributoDevolucoesdeCompras, setResultado6] = useState(0);
    const [operacaoDevolucoesdeCompras, setOperacao6] = useState('Multiplicar');
      
    const [TributoDemaisReceitasOperacionais, setResultado7] = useState(0);
    const [operacaoDemaisReceitasOperacionais, setOperacao7] = useState('Multiplicar');
  
    //Total dos Tributos da Receita Tributavel
    const [TotalTributoReceitaTributavel, setResultado8] = useState(0);
    const [operacaoTotalTributoReceitaTributavel, setOperacao8] = useState('Somar');

    //Total dos tributos sobre as Receitas NÃO tributáveis
    const [TotalTributoReceitasNaoTributaveis, setResultado9] = useState(0);
    const [operacaoTotalTributoReceitasNaoTributaveis, setOperacao9] = useState('Multiplicar');

    //Calculo dos tributos sobre as operações com direito a credito
    const [TotalTributoOperacoescomDiretoaCredito, setResultado10] = useState(0);
    const [operacaoTotalTributoOperacoescomDiretoaCredito, setOperacao10] = useState('Multiplicar');

    const [TributoICMSsobrevendas, setResultado11] = useState(0);
    const [operacaoTributoICMSsobrevendas, setOperacao11] = useState('Multiplicar');
  
    const [TributoIPIsobrevendas, setResultado12] = useState(0);
    const [operacaoTributoIPIsobrevendas, setOperacao12] = useState('Multiplicar');

    //Total ICMS + IPI como base de dedução
    const [Total_ICMS_IPIbasededucao, setResultado13] = useState(0);
    const [operacaoTotal_ICMS_IPIbasededucao, setOperacao13] = useState('Somar');

    //Total Tributos a Deduzir
    const [TotalTributosaDeduzir, setResultado14] = useState(0);
    const [operacaoTotalTributosaDeduzir, setOperacao14] = useState('Somar');

    //Resultado Final do Tributo
    const [ResultadoFinaldoTributo, setResultado15] = useState(0);
    const [operacaoResultadoFinaldoTributo, setOperacao15] = useState('Subtrair');

    const ResultadoPIS = ResultadoFinaldoTributo
    
    const situacao1 = 'O PIS a recolher mensal será de::'
    const situacao2 = ''

    const SituacaoPIS = ResultadodaCOFINS(ResultadoPIS)

        function ResultadodaCOFINS(ResultadoPIS){
            if (ResultadoPIS > 0){
                return situacao1
            } else {
            return situacao2
            }
        }

    
  
    //Total das Receitas tributáveis
    const calcular1 = () =>{  
        if (operacaoTotaldasReceitasTributaveis=="Somar")
        return (parseFloat(ReceitaServicos) + parseFloat(ReceitaVendas) + parseFloat(ReceitasFinanceiras) + parseFloat(ReceitasAlugueis) + parseFloat(DevolucoesdeCompras) + parseFloat(DemaisReceitasOperacionais));
    }    
    //Calculo dos tributos sobre receitas tributáveis
    const calcular2 = () =>{  
        if (operacaoTributosobreceitadeservicos=="Multiplicar")
        return (parseFloat(ReceitaServicos) * 0.0165);
    }
    const calcular3 = () =>{  
        if (operacaoTributoReceitaVendas=="Multiplicar")
        return (parseFloat(ReceitaVendas) * 0.0165);
    }    
    const calcular4 = () =>{  
        if (operacaoReceitasFinanceiras=="Multiplicar")
        return (parseFloat(ReceitasFinanceiras) * 0.0165);
    }
    const calcular5 = () =>{  
        if (operacaoReceitasAlugueis=="Multiplicar")
        return (parseFloat(ReceitasAlugueis) * 0.0165);
    }
    const calcular6 = () =>{  
        if (operacaoDevolucoesdeCompras=="Multiplicar")
        return (parseFloat(DevolucoesdeCompras) * 0.0165);
    }
    const calcular7 = () =>{  
        if (operacaoDemaisReceitasOperacionais=="Multiplicar")
        return (parseFloat(DemaisReceitasOperacionais) * 0.0165);
    }
    const calcular8 = () =>{  
        if (operacaoTotalTributoReceitaTributavel=="Somar")
        return (parseFloat(TributosReceitadeServicos) + parseFloat(TributoReceitaVendas) + parseFloat(TributoReceitasFinanceiras) + parseFloat(TributoReceitasAlugueis) + parseFloat(TributoDevolucoesdeCompras) + parseFloat(TributoDemaisReceitasOperacionais));
    }
    //Total dos tributos sobre as Receitas NÃO tributáveis
    const calcular9 = () =>{  
        if (operacaoTotalTributoReceitasNaoTributaveis=="Multiplicar")
        return (parseFloat(ReceitasNaoTributaveis) * 0.0165);
    }
    //Total dos tributos sobre as operações com direito a credito
    const calcular10 = () =>{  
        if (operacaoTotalTributoOperacoescomDiretoaCredito=="Multiplicar")
        return (parseFloat(OperacoescomDiretoaCredito) * 0.0165);
    }
    const calcular11 = () =>{  
        if (operacaoTributoICMSsobrevendas=="Multiplicar")
        return (parseFloat(ICMSsobrevendas) * 0.0165);
    }
    const calcular12 = () =>{  
        if (operacaoTributoIPIsobrevendas=="Multiplicar")
        return (parseFloat(IPIsobrevendas) * 0.0165);
    }
    //Total ICMS + IPI como base de dedução
    const calcular13 = () =>{  
        if (operacaoTotal_ICMS_IPIbasededucao=="Somar")
        return (parseFloat(TributoICMSsobrevendas) + parseFloat(TributoIPIsobrevendas));
    }

    //Total Tributos a Deduzir
    const calcular14 = () =>{  
        if (operacaoTotalTributosaDeduzir=="Somar")
        return (parseFloat(Total_ICMS_IPIbasededucao) + parseFloat(PISpagonaimportacao) + parseFloat(SaldoCredordemesanterior) + parseFloat(RetençõesFeitasAnteçipacoes));
    }
    
    //Resultado Final do Tributo
    const calcular15 = () =>{  
        if (operacaoResultadoFinaldoTributo=="Subtrair")
        return (parseFloat(TotalTributoReceitaTributavel) - parseFloat(TotalTributoReceitasNaoTributaveis) - parseFloat(TotalTributoOperacoescomDiretoaCredito) - parseFloat(TotalTributosaDeduzir));
    }

    //Total das Receitas tributáveis
    useEffect (() =>{setResultado1(calcular1())},[ReceitaServicos, ReceitaVendas, ReceitasFinanceiras, ReceitasAlugueis,  DevolucoesdeCompras, DemaisReceitasOperacionais, operacaoTotaldasReceitasTributaveis]);
    //Total dos tributos sobre receitas tributáveis
    useEffect (() =>{setResultado2(calcular2())},[ReceitaServicos, operacaoTributosobreceitadeservicos]);
    useEffect (() =>{setResultado3(calcular3())},[ReceitaVendas, operacaoTributoReceitaVendas]);
    useEffect (() =>{setResultado4(calcular4())},[ReceitasFinanceiras, operacaoReceitasFinanceiras]);
    useEffect (() =>{setResultado5(calcular5())},[ReceitasAlugueis, operacaoReceitasAlugueis]);
    useEffect (() =>{setResultado6(calcular6())},[DevolucoesdeCompras, operacaoDevolucoesdeCompras]);
    useEffect (() =>{setResultado7(calcular7())},[DemaisReceitasOperacionais, operacaoDemaisReceitasOperacionais]);
    useEffect (() =>{setResultado8(calcular8())},[TributosReceitadeServicos, TributoReceitaVendas, TributoReceitasFinanceiras, TributoReceitasAlugueis, TributoDevolucoesdeCompras,  TributoDemaisReceitasOperacionais, operacaoTotalTributoReceitaTributavel]);
    useEffect (() =>{setResultado9(calcular9())},[ReceitasNaoTributaveis, operacaoTotalTributoReceitasNaoTributaveis]);
    useEffect (() =>{setResultado10(calcular10())},[OperacoescomDiretoaCredito, operacaoTotalTributoOperacoescomDiretoaCredito]);
    useEffect (() =>{setResultado11(calcular11())},[ICMSsobrevendas, operacaoTributoICMSsobrevendas]);
    useEffect (() =>{setResultado12(calcular12())},[IPIsobrevendas, operacaoTributoIPIsobrevendas]);
    useEffect (() =>{setResultado13(calcular13())},[TributoICMSsobrevendas, TributoIPIsobrevendas, operacaoTotal_ICMS_IPIbasededucao]);
    useEffect (() =>{setResultado14(calcular14())},[Total_ICMS_IPIbasededucao, PISpagonaimportacao, SaldoCredordemesanterior, RetençõesFeitasAnteçipacoes, operacaoTotalTributosaDeduzir]);
    useEffect (() =>{setResultado15(calcular15())},[TotalTributoReceitaTributavel, TotalTributoReceitasNaoTributaveis, TotalTributoOperacoescomDiretoaCredito, TotalTributosaDeduzir, operacaoResultadoFinaldoTributo]);
    
        return <div>         
        
        <section id="pis-lucro-real">  

        <div className="row text-center">
                <div className="titulo">
                    <h1>PIS lucro real</h1>
                    <p>Calcule o valor do PIS mensal a pagar com base no lucro real</p>
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
                        <label>Receitas Financeiras</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={ReceitasFinanceiras} onChange={(e) => setNro3(e.target.value)}/>
                        </div>                     
                    </div>  
                    <div>
                        <label>Receitas de Aluguéis</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={ReceitasAlugueis} onChange={(e) => setNro4(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Devoluções de compras</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={DevolucoesdeCompras} onChange={(e) => setNro5(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Demais Receitas Operacionais</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={DemaisReceitasOperacionais} onChange={(e) => setNro6(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Receitas não tributáveis</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={ReceitasNaoTributaveis} onChange={(e) => setNro7(e.target.value)}/>
                        </div>                     
                    </div>                    
                    
                    <div>
                        <label>Operações com direito a crédito</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={OperacoescomDiretoaCredito} onChange={(e) => setNro8(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>ICMS sobre vendas</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={ICMSsobrevendas} onChange={(e) => setNro9(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>IPI sobre vendas</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={IPIsobrevendas} onChange={(e) => setNro10(e.target.value)}/>
                        </div>
                    </div>    
                    <div>
                        <label>PIS pago na importação</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={PISpagonaimportacao} onChange={(e) => setNro11(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>Saldo Credor de mês anterior</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={SaldoCredordemesanterior} onChange={(e) => setNro12(e.target.value)}/>
                        </div>                     
                    </div>
                    <div>
                        <label>PIS retido na fonte</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <input className="form-control" type="number" aria-label="Amount (to the nearest dollar)"  step="0.01" value={RetençõesFeitasAnteçipacoes} onChange={(e) => setNro13(e.target.value)}/>
                        </div>                     
                    </div>
                </div>
                <div className="col-sm-4"></div>    
            </div> 
            <br></br>
            <div className="container">
            <div className="row text-center">
              <h3>{SituacaoPIS}</h3>
              <h1>{[ResultadoFinaldoTributo].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</h1>
              <p>Códido do Tributo 6912</p>
              <p><span className="segundo-p">ATENÇÃO: Veja quais são as Receitas não tributáveis e Operações com direito a crédito na Lei Nº 10.833/2003. O PIS encontrado na calculadora se negativo poderá ser utilizado como crédito no proximo mês, confirme com seu contador o valor encontrado.</span></p>            
            </div>
        </div>          
        </section>       
      </div> 
    }
  
  export default Pislucroreal;