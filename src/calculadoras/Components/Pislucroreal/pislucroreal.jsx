import React, {useState, useEffect} from 'react';
import CurrencyInputWcontec from '../Props/MaskCurrency/currencyInputWcontec';

import './pislucroreal.css';

function Pislucroreal(){
    
    const currencyConfig = {
        locale: "pt-BR",
        formats: {
          number: {
            BRL: {
              currency: "BRL",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            },
          },
        },
      };

    const handleChange = (event, value, maskedValue) => {
        event.preventDefault();
        setNro1(value);        
    };
    const handleChange2 = (event, value, maskedValue) => {
        event.preventDefault();
        setNro2(value);        
    };
    const handleChange3 = (event, value, maskedValue) => {
        event.preventDefault();
        setNro3(value);        
    };
    const handleChange4 = (event, value, maskedValue) => {
        event.preventDefault();
        setNro4(value);        
    };
    const handleChange5 = (event, value, maskedValue) => {
        event.preventDefault();
        setNro5(value);        
    };
    const handleChange6 = (event, value, maskedValue) => {
        event.preventDefault();
        setNro6(value);        
    };
    const handleChange7 = (event, value, maskedValue) => {
        event.preventDefault();
        setNro7(value);        
    };
    const handleChange8 = (event, value, maskedValue) => {
        event.preventDefault();
        setNro8(value);        
    };
    const handleChange9 = (event, value, maskedValue) => {
        event.preventDefault();
        setNro9(value);        
    };
    const handleChange10 = (event, value, maskedValue) => {
        event.preventDefault();
        setNro10(value);        
    };
    const handleChange11 = (event, value, maskedValue) => {
        event.preventDefault();
        setNro11(value);        
    };
    const handleChange12 = (event, value, maskedValue) => {
        event.preventDefault();
        setNro12(value);        
    };
    const handleChange13 = (event, value, maskedValue) => {
        event.preventDefault();
        setNro13(value);        
    };
    
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
    
    const situacao1 = 'Saldo credor do PIS disponível para o mês seguinte:'
    const situacao2 = 'O PIS a recolher mensal será de:'
    const situacao3 = ''

    const SituacaoPIS = ResultadodoPIS(ResultadoPIS)

        function ResultadodoPIS(ResultadoPIS){
            if (ResultadoPIS < 0){
                return situacao1
            } else if (ResultadoPIS > 0.004250000000183718){
                return situacao2
            } else {    
            return situacao3
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

        <div className="container">
            <div className="row inputs-pis-lucro-real">
                <div className="col-sm-3">    
                    <div className="mb-3">
                        <label for="ReceitaServicos-pis-lucro-real">Receita de serviços</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control" name="ReceitaServicos-pis-lucro-real" id="ReceitaServicos-pis-lucro-real" aria-label="Amount (to the nearest dollar)" onChange={handleChange} />
                        </div>                     
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="mb-3">
                        <label for="ReceitaVendas-pis-lucro-real">Receita de vendas</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control" name="ReceitaVendas-pis-lucro-real" id="ReceitaVendas-pis-lucro-real" aria-label="Amount (to the nearest dollar)"  onChange={handleChange2}/>
                        </div>                     
                    </div>
                </div>
                <div className="col-sm-3">    
                    <div className="mb-3">
                        <label for="ReceitasFinanceiras-pis-lucro-real">Receitas Financeiras</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control" name="ReceitasFinanceiras-pis-lucro-real" id="ReceitasFinanceiras-pis-lucro-real" aria-label="Amount (to the nearest dollar)"  onChange={handleChange3}/>
                        </div>                     
                    </div> 
                </div>
                <div className="col-sm-3">     
                    <div className="mb-3">
                        <label for="ReceitasAlugueis-pis-lucro-real">Receitas de Aluguéis</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control" name="ReceitasAlugueis-pis-lucro-real" id="ReceitasAlugueis-pis-lucro-real" aria-label="Amount (to the nearest dollar)"  onChange={handleChange4}/>
                        </div>                     
                    </div>
                </div>
                <div className="col-sm-3">    
                    <div className="mb-3">
                        <label for="DevolucoesdeCompras-pis-lucro-real">Devol. de compras</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control" name="DevolucoesdeCompras-pis-lucro-real" id="DevolucoesdeCompras-pis-lucro-real" aria-label="Amount (to the nearest dollar)"  onChange={handleChange5}/>
                        </div>                     
                    </div>
                </div>
                <div className="col-sm-3">    
                    <div className="mb-3">
                        <label for="DemaisReceitasOperacionais-pis-lucro-real">Demais Receitas</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control" name="DemaisReceitasOperacionais-pis-lucro-real" id="DemaisReceitasOperacionais-pis-lucro-real" aria-label="Amount (to the nearest dollar)"  onChange={handleChange6}/>
                        </div>                     
                    </div>
                </div>
                <div className="col-sm-3">    
                    <div className="mb-3">
                        <label for="ReceitasNaoTributaveis-pis-lucro-real">Rec. não tributáveis*</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control" name="ReceitasNaoTributaveis-pis-lucro-real" id="ReceitasNaoTributaveis-pis-lucro-real" aria-label="Amount (to the nearest dollar)"  onChange={handleChange7}/>
                        </div>                     
                    </div>                    
                </div>
                <div className="col-sm-3">    
                    <div className="mb-3">
                        <label for="OperacoescomDiretoaCredito-pis-lucro-real">Operações de crédito*</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control" name="OperacoescomDiretoaCredito-pis-lucro-real" id="OperacoescomDiretoaCredito-pis-lucro-real" aria-label="Amount (to the nearest dollar)"  onChange={handleChange8}/>
                        </div>                     
                    </div>
                </div>
                <div className="col-sm-3">    
                    <div className="mb-3">
                        <label for="ICMSsobrevendas-pis-lucro-real">ICMS sobre vendas</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control" name="ICMSsobrevendas-pis-lucro-real" id="ICMSsobrevendas-pis-lucro-real" aria-label="Amount (to the nearest dollar)"  onChange={handleChange9}/>
                        </div>                     
                    </div>
                </div>
                <div className="col-sm-3">    
                    <div className="mb-3">
                        <label for="IPIsobrevendas-pis-lucro-real">IPI sobre vendas</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control" name="IPIsobrevendas-pis-lucro-real" id="IPIsobrevendas-pis-lucro-real" aria-label="Amount (to the nearest dollar)"  onChange={handleChange10}/>
                        </div>
                    </div> 
                </div>
                <div className="col-sm-3">       
                    <div className="mb-3">
                        <label for="PISpagonaimportacao-pis-lucro-real">PIS pg na importação</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control" name="PISpagonaimportacao-pis-lucro-real" id="PISpagonaimportacao-pis-lucro-real" aria-label="Amount (to the nearest dollar)"  onChange={handleChange11}/>
                        </div>                     
                    </div>
                </div>
                <div className="col-sm-3">    
                    <div className="mb-3">
                        <label for="SaldoCredordemesanterior-pis-lucro-real">Saldo Credor anterior</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control" name="SaldoCredordemesanterior-pis-lucro-real" id="SaldoCredordemesanterior-pis-lucro-real" aria-label="Amount (to the nearest dollar)"  onChange={handleChange12}/>
                        </div>                     
                    </div>
                </div>
                <div className="col-sm-3">    
                    <div className="mb-3">
                        <label for="RetençõesFeitasAnteçipacoes-pis-lucro-real">PIS retido na fonte</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text">R$</span>
                            <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control" name="RetençõesFeitasAnteçipacoes-pis-lucro-real" id="RetençõesFeitasAnteçipacoes-pis-lucro-real" aria-label="Amount (to the nearest dollar)"  onChange={handleChange13}/>
                        </div>                     
                    </div>
                </div>
            </div> 
            </div>
            <br></br>
            <div className="container">
            <div className="row text-center">
              <h3>{SituacaoPIS}</h3>
              {SituacaoPIS ? <h1>{[ResultadoFinaldoTributo].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</h1> :''}
              {SituacaoPIS ? <p>Códido do Tributo 6912</p> :''}
              <p><span className="segundo-p">Veja quais são as *Receitas não tributáveis e *Operações com direito a crédito na Lei Nº 10.833/2003.</span></p>            
              {SituacaoPIS ? <p><span className="terceiro-p">Atenção: O valor encontrado na calculadora deverá ser confirmado com o contador responsável pela empresa.</span></p> :''}
            </div>
        </div>          
        </section>       
      </div> 
    }
  
  export default Pislucroreal;