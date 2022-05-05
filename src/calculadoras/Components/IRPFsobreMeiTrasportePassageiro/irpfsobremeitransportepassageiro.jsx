import React, {useState, useEffect} from 'react';
import CurrencyInputWcontec from '../Props/MaskCurrency/currencyInputWcontec';
import NavbarCalculadora from '../Navbar/navbarcalculadora';

import './irpfsobremeitransportepassageiro.css';

function IRPFsobreMeiTransportePassageiro(){  
    
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
      
    const handleChange1 = (event, value, maskedValue) => {
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
    
    const [TransportedePassageiros, setNro1] = useState(0);
    const [Extras, setNro2] = useState(0);
    const [Promocoes, setNro3] = useState(0);
    const [DeducoesLegais, setNro4] = useState(0);
    const [IRRF, setNro5] = useState(0);
    
    const [DeducaoQuarentaPorCento, setResultado1] = useState(0);
    const [operacaoDeducaoQuarentaPorCento, setOperacao1] = useState('Somar');

    const [TransportedePassageirosAposDeducao, setResultado2] = useState(0);
    const [operacaoTransportedePassageirosAposDeducao, setOperacao2] = useState('Subtrair');
  
    const [BaseCalculoAntesdaPresuncao, setResultado3] = useState(0);
    const [operacaoBaseCalculoBaseCalculoAntesdaPresuncao, setOperacao3] = useState('Somar');
    
    const [Presucao16, setResultado4] = useState(0);
    const [operacaoPresucao16, setOperacao4] = useState('Somar');

    const [LucroIsentoMei, setResultado5] = useState(0);
    const [operacaoLucroIsentoMei, setOperacao5] = useState('Somar');

    const [ReceitaBrua, setResultado6] = useState(0);
    const [operacaoReceitaBrua, setOperacao6] = useState('Somar');

    const [LucroTributavel, setResultado7] = useState(0);
    const [operacaoLucroTributavel, setOperacao7] = useState('Subtrair');

    const SituacaodosCalculos = LucroIsentoMei
    
    const comCalculo = 'Parcela do Faturamento ISENTA na DIRPF'
    const semCalculo = ''

    const MostrarCalculos = Calculos(SituacaodosCalculos)

        function Calculos(SituacaodosCalculos){
            if (SituacaodosCalculos > 0){
                return comCalculo
            } else {
            return semCalculo
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

    const calcular1 = () =>{  
        if (operacaoDeducaoQuarentaPorCento=="Somar")
        return (parseFloat(TransportedePassageiros) * 0.40);
    }
    const calcular2 = () =>{  
        if (operacaoTransportedePassageirosAposDeducao=="Subtrair")
        return (parseFloat(TransportedePassageiros) - parseFloat(DeducaoQuarentaPorCento));
    }
    const calcular3 = () =>{  
        if (operacaoBaseCalculoBaseCalculoAntesdaPresuncao=="Somar")
        return (parseFloat(TransportedePassageirosAposDeducao) + parseFloat(Extras) + parseFloat(Promocoes));
    }
    const calcular4 = () =>{  
        if (operacaoPresucao16=="Somar")
        return (parseFloat(BaseCalculoAntesdaPresuncao) * 0.16);
    }
    const calcular5 = () =>{  
        if (operacaoLucroIsentoMei=="Somar")
        return (parseFloat(Presucao16));
    }
    const calcular6 = () =>{  
        if (operacaoReceitaBrua=="Somar")
        return (parseFloat(TransportedePassageiros) + parseFloat(Extras) + parseFloat(Promocoes));
    }
    const calcular7 = () =>{  
        if (operacaoLucroTributavel=="Subtrair")
        return (parseFloat(ReceitaBrua) - parseFloat(DeducaoQuarentaPorCento) - parseFloat(LucroIsentoMei));
    }

    useEffect (() =>{setResultado1(calcular1())},[TransportedePassageiros, operacaoDeducaoQuarentaPorCento]);
    useEffect (() =>{setResultado2(calcular2())},[TransportedePassageiros, DeducaoQuarentaPorCento, operacaoTransportedePassageirosAposDeducao]);
    useEffect (() =>{setResultado3(calcular3())},[TransportedePassageirosAposDeducao, Extras, Promocoes, operacaoBaseCalculoBaseCalculoAntesdaPresuncao]);
    useEffect (() =>{setResultado4(calcular4())},[BaseCalculoAntesdaPresuncao, operacaoPresucao16]);
    useEffect (() =>{setResultado5(calcular5())},[Presucao16, operacaoLucroIsentoMei]);
    useEffect (() =>{setResultado6(calcular6())},[TransportedePassageiros, Extras, Promocoes, operacaoReceitaBrua]);
    useEffect (() =>{setResultado7(calcular7())},[ReceitaBrua, DeducaoQuarentaPorCento, LucroIsentoMei, operacaoLucroTributavel]);
      
        
        return <div>         
        
        <section id="irpf-sobre-mei-transporte-passageiro">  
        <NavbarCalculadora/>
        <div className="row text-center">
                <div className="titulo">
                    <h1>DIRPF do MEI motorista de transporte de passageiros</h1>
                    <p>Calcule o valor do imposto de renda pessoa física para o microempreendedor individual que transporta passageiros</p>
                </div>
            </div>
            <div className="container">
                <div className="row inputs-irpf-sobre-mei-transporte-passageiro">
                    
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label htmlFor="TransportedePassageiros-irpf-sobre-mei-transporte-passageiro">Transp. de Passageiros</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="TransportedePassageiros-irpf-sobre-mei-transporte-passageiro" id="TransportedePassageiros-irpf-sobre-mei-transporte-passageiro-" aria-label="Amount (to the nearest dollar)" value={TransportedePassageiros} onChange={handleChange1}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label htmlFor="Extras-irpf-sobre-mei-transporte-passageiro">Extras</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="Extras-irpf-sobre-mei-transporte-passageiro" id="Extras-irpf-sobre-mei-transporte-passageiro-" aria-label="Amount (to the nearest dollar)" value={Extras} onChange={handleChange2}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label htmlFor="Promocoes-irpf-sobre-mei-transporte-passageiro">Promoções</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="Promocoes-irpf-sobre-mei-transporte-passageiro" id="Promocoes-irpf-sobre-mei-transporte-passageiro" aria-label="Amount (to the nearest dollar)" value={Promocoes} onChange={handleChange3}/>
                            </div>                     
                        </div>  
                    </div>
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label htmlFor="Deducoeslegais-irpf-sobre-mei-transporte-passageiro">Deduções Legais</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="Deducoeslegais-irpf-sobre-mei-transporte-passageiro" id="Deducoeslegais-irpf-sobre-mei-transporte-passageiro" aria-label="Amount (to the nearest dollar)" value={DeducoesLegais} onChange={handleChange4}/>
                            </div>                     
                        </div>  
                    </div>
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label htmlFor="irrf-irpf-sobre-mei-transporte-passageiro">IRRF</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="irrf-irpf-sobre-mei-transporte-passageiro" id="irrf-irpf-sobre-mei-transporte-passageiro" aria-label="Amount (to the nearest dollar)" value={IRRF} onChange={handleChange5}/>
                            </div>                     
                        </div>  
                    </div>
                </div>  
            </div>
            <div className="container">
                <div className="row text-center">
                <p><span className="terceiro-p">{MostrarSituacaoNaoObrigatoriedadedaDIRPF}</span></p>
                <p><span className="segundo-p">*Despesas do MEI (Água, Luz, Telefone, compra de Mercadoria, Aluguel do Espaço).</span></p>
                </div>
            </div> 
            {MostrarCalculos ? <div className="table-irpf-sobre-mei-transporte-passageiro">
            <table className="table">
                <tr>
                    <th className="width80"></th>
                    <th className="width20"></th>                    
                </tr>
            <tbody>
                <tr>
                    <th scope="row" className="text-start">Base de Calculo do imposto de Renda</th>
                    <td className="bi">{[BaseCalculoAntesdaPresuncao].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
                </tr>                
                </tbody> 
            </table>
        </div> :''} 

        {MostrarCalculos ? <div>
            <div className="container">
                <div className="row text-center">
                    <div className="titulo">
                        <h1>Como ficará na declaração</h1>
                    </div>
                </div>              
                <div className="row text-center">                 
                    <div className="col-lg-6">
                        <h3>Desconto Simplificado</h3> 
                        <table className="table">
                <tr>
                    <th className="width80"></th>
                    <th className="width20"></th>                    
                </tr>
            <tbody>
                <tr>
                    <th scope="row" className="text-start">Rendimento Tributável</th>
                    <td className="bi">{[LucroTributavel].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
                </tr>
                <tr>
                    <th scope="row" className="text-start">Rendimentos Isentos e Não Tributáveis. "Ficha 24 - Rendimentos bruto, até o máximo de 40%, da prestação de serviços decorrente do transporte de passageiros"  </th>
                    <td className="bi">{[DeducaoQuarentaPorCento].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
                </tr>
                <tr>
                    <th scope="row" className="text-start">Parcela do Faturamento ISENTA na DIRPF</th>
                    <td className="bi">{[LucroIsentoMei].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
                </tr>                                                                               
            </tbody> 
            </table>
                    </div>
                    <div className="col-lg-6">
                        <h3>Deduções Legais</h3>  
                    </div>  
                </div>       
            </div>       
        </div> :''}  

        </section>       
      </div> 
    }
  
  export default IRPFsobreMeiTransportePassageiro;