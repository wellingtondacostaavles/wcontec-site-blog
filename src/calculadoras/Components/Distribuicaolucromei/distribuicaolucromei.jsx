import React, {useState, useEffect} from 'react';
import CurrencyInputWcontec from '../Props/MaskCurrency/currencyInputWcontec';
import NavbarCalculadora from '../Navbar/navbarcalculadora';

import './distribuicaolucromei.css';

function Distribuicaolucromei(){  
    
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

    const SituacaodaParcelaIsenta = LucroIsento
    
    const comParcelaIsenta = 'Parcela do Faturamento ISENTA na DIRPF'
    const semParcelaIsenta = ''

    const MostrarSituacaoParcelaIsenta = SituacaoParcelaIsenta(SituacaodaParcelaIsenta)

        function SituacaoParcelaIsenta(SituacaodaParcelaIsenta){
            if (SituacaodaParcelaIsenta > 0){
                return comParcelaIsenta
            } else {
            return semParcelaIsenta
            }
        }
    
    const SituacaodoLucroTributavel = LucroTributavel

    const comParcelaTributavel = 'Parcela tributável do Microempreendedor Individual será de:'
    const semParcelaTributavel = ''

    const MostrarSituacaoParcelaTributavel = SituacaoParcelaTributavel(SituacaodoLucroTributavel)

        function SituacaoParcelaTributavel(SituacaodoLucroTributavel){
            if (SituacaodoLucroTributavel > 0) {
                return comParcelaTributavel
            } else {
            return semParcelaTributavel
            }
        }

    const SituacaoNaoObrigatoriedadedaDIRPF = LucroTributavel

    const naotaobrigada = 'Atenção: Com base no valor da parcela tributável encontrata, o MEI não está obrigado a apresentar a DIRPF'
    const taobrigada = ''

    const MostrarSituacaoNaoObrigatoriedadedaDIRPF = SituacaodaNaoObrigatoriedadedaDIRPF(SituacaoNaoObrigatoriedadedaDIRPF)

        function SituacaodaNaoObrigatoriedadedaDIRPF(SituacaoNaoObrigatoriedadedaDIRPF){
            if (SituacaoNaoObrigatoriedadedaDIRPF <= 28559.70) {
                return naotaobrigada
            } else {
            return taobrigada
            }
        }      

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
        <NavbarCalculadora/>
        <div className="row text-center">
                <div className="titulo">
                    <h1>Lucro do MEI a ser distribuido na DIRPF</h1>
                    <p>Calcule o valor da parcela isenta e tributável a ser informada na sua declaração de imposto de renda</p>
                </div>
            </div>
            <div className="container">
                <div className="row inputs-distribuicao-lucro-mei">
                    <div className="col-sm-3">
                    <div className="mb-3">
                        <label htmlFor="ReceitaServicos-distribuicao-lucro-mei">Receita de serviços</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="ReceitaServicos" id="ReceitaServicos" aria-label="Amount (to the nearest dollar)" value={ReceitaServicos} onChange={handleChange}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">   
                        <div className="mb-3">
                            <label htmlFor="ReceitaVendas-distribuicao-lucro-mei">Receita de vendas</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="ReceitaVendas-distribuicao-lucro-mei" id="ReceitaVendas-distribuicao-lucro-mei" aria-label="Amount (to the nearest dollar)" value={ReceitaVendas} onChange={handleChange2}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label htmlFor="TransportedeCargas-distribuicao-lucro-mei">R. Transp de Cargas</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="TransportedeCargas-distribuicao-lucro-mei" id="TransportedeCargas-distribuicao-lucro-mei"  aria-label="Amount (to the nearest dollar)" value={TransportedeCargas} onChange={handleChange3}/>
                            </div>                     
                        </div>  
                    </div>
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label htmlFor="TransportedePassageiros-distribuicao-lucro-mei">Transp. de Passageiros</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="TransportedePassageiros-distribuicao-lucro-mei" id="TransportedePassageiros-distribuicao-lucro-mei" aria-label="Amount (to the nearest dollar)" value={TransportedePassageiros} onChange={handleChange4}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label htmlFor="Impostosetaxas-distribuicao-lucro-mei">Impostos e taxas pagas</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="Impostosetaxas-distribuicao-lucro-mei" id="Impostosetaxas-distribuicao-lucro-mei" aria-label="Amount (to the nearest dollar)" value={Impostosetaxas} onChange={handleChange5}/>
                            </div>                     
                        </div>  
                    </div>
                    <div className="col-sm-3">                
                        <div className="mb-3">
                            <label htmlFor="DespesasdoMEI-distribuicao-lucro-mei">Despesas do MEI*</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="DespesasdoMEI-distribuicao-lucro-mei" id="DespesasdoMEI-distribuicao-lucro-mei" aria-label="Amount (to the nearest dollar)" value={DespesasdoMEI} onChange={handleChange6}/>
                            </div>                     
                        </div>
                    </div>
            </div>    
                
                

        {MostrarSituacaoParcelaIsenta ? <div className="table-distribuicao-lucro-mei">
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
        </div> :''}
            </div><div className="container">
                <div className="row text-center">
                <h3>{MostrarSituacaoParcelaTributavel}</h3>
                {MostrarSituacaoParcelaTributavel ? <h1>{[LucroTributavel].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</h1> :''}
                <p><span className="terceiro-p">{MostrarSituacaoNaoObrigatoriedadedaDIRPF}</span></p>
                <p><span className="segundo-p">*Despesas do MEI (Água, Luz, Telefone, compra de Mercadoria, Aluguel do Espaço).</span></p>
                </div>
            </div>          
        </section>       
      </div> 
    }
  
  export default Distribuicaolucromei;