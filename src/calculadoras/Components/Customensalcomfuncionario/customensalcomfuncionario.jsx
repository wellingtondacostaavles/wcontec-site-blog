import React, {useState, useEffect} from 'react';
import CurrencyInputWcontec from '../Props/MaskCurrency/currencyInputWcontec';
import NavbarCalculadora from '../Navbar/navbarcalculadora';
import Rodapeprodutos from '../../../site/Components/rodapeprodutos';

import './customensalcomfuncionario.css';

function Customensalcomfuncionario(){
    
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

    const [nro1, setNro1] = useState(0);
    const [nro2, setNro2] = useState(0);
    const [nro3, setNro3] = useState(0);
    const [nro4, setNro4] = useState(0);
    const [nro5, setNro5] = useState(0);


    const [resultado1, setResultado1] = useState(0);
    const [operacao1, setOperacao1] = useState('Somar');

    const [resultado2, setResultado2] = useState(0);
    const [operacao2, setOperacao2] = useState('Somar');

    const [resultado3, setResultado3] = useState(0);
    const [operacao3, setOperacao3] = useState('Somar');

    const [resultado4, setResultado4] = useState(0);
    const [operacao4, setOperacao4] = useState('Somar');

    const [resultado5, setResultado5] = useState(0);
    const [operacao5, setOperacao5] = useState('Somar');
  
    const [resultado6, setResultado6] = useState(0);
    const [operacao6, setOperacao6] = useState('Somar');
  
    const [resultado7, setResultado7] = useState(0);
    const [operacao7, setOperacao7] = useState('Somar');

    const [resultado8, setResultado8] = useState(0);
    const [operacao8, setOperacao8] = useState('Somar');

    const [resultado9, setResultado9] = useState(0);
    const [operacao9, setOperacao9] = useState('Somar');

    const [resultado10, setResultado10] = useState(0);
    const [operacao10, setOperacao10] = useState('Multiplicar');

    const [resultado11, setResultado11] = useState(0);
    const [operacao11, setOperacao11] = useState('Somar');

    const ResultadoCustoMensalFuncionario = resultado11
    
    const situacao1 = 'O custo total mensal com um funcionário será de:'
    const situacao2 = ''

    const SituacaoResultadoCustoMensalFuncionario = ResultadodoCustoMensalFuncionario(ResultadoCustoMensalFuncionario)

        function ResultadodoCustoMensalFuncionario(ResultadoCustoMensalFuncionario){
            if (ResultadoCustoMensalFuncionario > 0){
                return situacao1
            } else {
            return situacao2
            }
        }   
  
  
    const calcular = () =>{  
        if (operacao1=="Somar")
        return (parseFloat(nro1) / 12.5);
    }

    const calcular2 = () =>{  
        if (operacao2=="Somar")
        return (parseFloat(nro1)/ 12);
    }

    const calcular3 = () =>{  
        if (operacao3=="Somar")
        return parseFloat(nro1) / 36;
    }

    const calcular4 = () =>{  
        if (operacao4=="Somar")
        return parseFloat(nro1) / 12;
    }

    const calcular5 = () =>{  
        if (operacao5=="Somar")
        return parseFloat(nro1) / 150;
    }

    const calcular6 = () =>{  
        if (operacao6=="Somar")
        return parseFloat(nro1) / 454.5;
    }

    const calcular7 = () =>{  
        if (operacao7=="Somar")
        return parseFloat(nro1) / 150;
    }

    const calcular8 = () =>{  
        if (operacao8=="Somar")
        return parseFloat(nro1) / 12;
    }
  
    const calcular9 = () =>{  
        if (operacao9=="Somar")
        return parseFloat(nro1) / 150;
    }

    const calcular10 = () =>{  
        if (operacao10=="Multiplicar")
        return parseFloat(nro1) * 2 / 100;
    }

    const calcular11 = () =>{  
        if (operacao11=="Somar")
        return (parseFloat(nro1) + parseFloat(nro2) + parseFloat(nro3) + parseFloat(nro4) + parseFloat(nro5) + parseFloat(resultado1) + parseFloat(resultado2) + parseFloat(resultado3) + parseFloat(resultado4) + parseFloat(resultado5) + parseFloat(resultado6) + parseFloat(resultado7) + parseFloat(resultado8) + parseFloat(resultado9) + parseFloat(resultado10));
    }

    useEffect (() =>{setResultado1(calcular())},[nro1, operacao1]);
    useEffect (() =>{setResultado2(calcular2())},[nro1, operacao2]);
    useEffect (() =>{setResultado3(calcular3())},[nro1, operacao3]);
    useEffect (() =>{setResultado4(calcular4())},[nro1, operacao4]);
    useEffect (() =>{setResultado5(calcular5())},[nro1, operacao5]);
    useEffect (() =>{setResultado6(calcular6())},[nro1, operacao6]);
    useEffect (() =>{setResultado7(calcular7())},[nro1, operacao7]);
    useEffect (() =>{setResultado8(calcular8())},[nro1, operacao8]);
    useEffect (() =>{setResultado9(calcular9())},[nro1, operacao9]);
    useEffect (() =>{setResultado10(calcular10())},[nro1, operacao10]);
    useEffect (() =>{setResultado11(calcular11())},[nro1, nro2, nro3, nro4, nro5, resultado1, resultado2, resultado3, resultado4, resultado5, resultado6, resultado7, resultado8, resultado9, resultado10, operacao11]);
      
        
        return <div>         
        
        <section id="custo-mensal-com-funcionario">  
        <NavbarCalculadora/>
        <div className="row text-center">
                <div className="titulo">
                    <h1>Custo mensal com funcionário</h1>
                    <p>Funcionário de empresa optante do Simples Nacional</p>
                </div>
            </div>

        <div className="container">
            <div className="row inputs-custo-mensal-com-funcionario">
                <div className="col-sm-3">    
                    <div className="mb-3">
                        <label htmlFor="nro1-custo-mensal-com-funcionario">Salário Base</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text inputs">R$</span>
                            <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="nro1-custo-mensal-com-funcionario" id="nro1-custo-mensal-com-funcionario" aria-label="Amount (to the nearest dollar)" value={nro1} onChange={handleChange}/>
                        </div>                     
                    </div>
                </div>
                    
                <div className="col-sm-3">
                <div className="mb-3">
                        <label htmlFor="nro2-custo-mensal-com-funcionario">Auxilio Refeição</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text inputs">R$</span>
                            <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="nro2-custo-mensal-com-funcionario" id="nro2-custo-mensal-com-funcionario" aria-label="Amount (to the nearest dollar)" value={nro2} onChange={handleChange2}/>
                        </div>                     
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="mb-3">
                        <label htmlFor="nro3-custo-mensal-com-funcionario">Auxilio Alimentação</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text inputs">R$</span>
                            <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="nro3-custo-mensal-com-funcionario" id="nro3-custo-mensal-com-funcionario" aria-label="Amount (to the nearest dollar)"value={nro3}  onChange={handleChange3}/>
                        </div>                     
                      </div>
                      </div> 
                <div className="col-sm-3"> 
                    <div className="mb-3">
                        <label htmlFor="nro4-custo-mensal-com-funcionario">Plano de Saúde</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text inputs">R$</span>
                            <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="nro4-custo-mensal-com-funcionario" id="nro4-custo-mensal-com-funcionario" aria-label="Amount (to the nearest dollar)" value={nro4} onChange={handleChange4}/>
                        </div>                     
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="mb-3">
                        <label htmlFor="nro5-custo-mensal-com-funcionario">Outros Benefícios</label>                
                        <div className="input-group mb-3">
                            <span className="input-group-text inputs">R$</span>
                            <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="nro5-custo-mensal-com-funcionario" id="nro5-custo-mensal-com-funcionario" aria-label="Amount (to the nearest dollar)" value={nro5} onChange={handleChange5}/>
                        </div>                     
                    </div>
                </div>    
            </div>    
        </div>        
        
        
            {SituacaoResultadoCustoMensalFuncionario ? <div className="table-custo-mensal-com-funcionario">
            <table className="table">
                <tr>
                    <th className="width80"></th>
                    <th className="width20"></th>                    
                </tr>
            <tbody>
                <tr>
                    <th scope="row" className="text-start">FGTS Salário</th>
                    <td className="bi">{[resultado1].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
                </tr>
                <tr>
                    <th scope="row" className="text-start">FÉRIAS 1/12</th>
                    <td className="bi">{[resultado2].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
                </tr>                   
                <tr>
                    <th scope="row" className="text-start">1/3 FÉRIAS 1/12</th>
                    <td className="bi">{[resultado3].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>                 
                </tr>                               
                <tr>
                    <th scope="row" className="text-start">13º SALÁRIO 1/12</th>
                    <td className="bi">{[resultado4].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
                </tr> 
                <tr>
                    <th scope="row" className="text-start">FGTS FÉRIAS 1/12</th>
                    <td className="bi">{[resultado5].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
                </tr>                
                <tr>
                    <th scope="row" className="text-start">FGTS 1/3 FÉRIAS 1/12</th>
                    <td className="bi">{[resultado6].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
                </tr>
                <tr>
                    <th scope="row" className="text-start">FGTS 13º SALÁRIO 1/12</th>
                    <td className="bi">{[resultado7].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
                </tr>           
                <tr>
                    <th scope="row" className="text-start">AVISO PRÉVIO 1/12 (provisão)</th>
                    <td className="bi">{[resultado8].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
                </tr>
                <tr>
                    <th scope="row" className="text-start">FGTS AVISO PRÉVIO 1/12  (provisão)</th>
                    <td className="bi">{[resultado9].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
                </tr>
                <tr>
                    <th scope="row" className="text-start">MULTA FGTS 1/12  (provisão)</th>
                    <td className="bi">{[resultado10].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</td>
                </tr>                                                
            </tbody> 
            </table>
        </div> :''}

            <div className="container">
            <div className="row text-center">
              <h3>{SituacaoResultadoCustoMensalFuncionario}</h3>
              {SituacaoResultadoCustoMensalFuncionario ? <h1>{[resultado11].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</h1> :''}
              {SituacaoResultadoCustoMensalFuncionario ? <p><span className="terceiro-p">Atenção: O valor encontrato na calculadora deverá ser confirmado com o contador responsável pela empresa.</span></p> :''}
            </div>
        </div>  
        <Rodapeprodutos/>        
        </section>       
      </div> 
    }
  
  export default Customensalcomfuncionario;