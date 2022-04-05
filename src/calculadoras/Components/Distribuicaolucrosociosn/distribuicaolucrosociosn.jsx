import React, {useState, useEffect} from 'react';

import './distribuicaolucrosociosn.css';

function Distribuicaolucrosociosn(){    

    const [ReceitaServicos, setNro1] = useState();
    const [ReceitaVendas, setNro2] = useState();
    const [ReceitaFinanceira, setNro3] = useState();
    const [IRPJpagosnoSimplesNacional, setNro4] = useState();
    
    const [Presucao32, setResultado1] = useState(0);
    const [operacaoPresucao32, setOperacao1] = useState('Somar');

    const [Presucao8, setResultado2] = useState(0);
    const [operacaoPresucao8, setOperacao2] = useState('Somar');

    const [BaseCalculo, setResultado3] = useState(0);
    const [operacaoBaseCalculo, setOperacao3] = useState('Somar');

    const [LucroaSerDistribuido, setResultado4] = useState(0);
    const [operacaoLucroaSerDistribuido, setOperacao4] = useState('Subtrair');

    const [ReceitaBrua, setResultado5] = useState(0);
    const [operacaoReceitaBrua, setOperacao5] = useState('Somar');
    
    const ResultadoLucroaSerDistribuido = LucroaSerDistribuido
    
    const situacao1 = 'O lucro isento a ser informado na declaração será de:'
    const situacao2 = ''

    const SituacaoLucroaSerDistribuido = LucroaDistribuido(ResultadoLucroaSerDistribuido)

        function LucroaDistribuido(ResultadoLucroaSerDistribuido){
            if (ResultadoLucroaSerDistribuido > 0){
                return situacao1
            } else {
            return situacao2
            }
        }
  
    const calcular = () =>{  
        if (operacaoPresucao32=="Somar")
        return (parseFloat(ReceitaServicos) * 0.32);
    }
    const calcular2 = () =>{  
        if (operacaoPresucao8=="Somar")
        return (parseFloat(ReceitaVendas) * 0.08);
    }
    const calcular3 = () =>{  
        if (operacaoBaseCalculo=="Somar")
        return (parseFloat(Presucao32) + parseFloat(Presucao8) + parseFloat(ReceitaFinanceira));
    }
    const calcular4 = () =>{  
        if (operacaoLucroaSerDistribuido=="Subtrair")
        return (parseFloat(BaseCalculo) - parseFloat(IRPJpagosnoSimplesNacional));
    }
    const calcular5 = () =>{  
        if (operacaoReceitaBrua=="Somar")
        return (parseFloat(ReceitaServicos) + parseFloat(ReceitaVendas) + parseFloat(ReceitaFinanceira));
    }
    
    useEffect (() =>{setResultado1(calcular())},[ReceitaServicos, ReceitaVendas, operacaoPresucao32]);
    useEffect (() =>{setResultado2(calcular2())},[ReceitaVendas, operacaoPresucao8]);
    useEffect (() =>{setResultado3(calcular3())},[Presucao32, Presucao8, ReceitaFinanceira, operacaoBaseCalculo]);
    useEffect (() =>{setResultado4(calcular4())},[BaseCalculo, IRPJpagosnoSimplesNacional, operacaoLucroaSerDistribuido]);
    useEffect (() =>{setResultado5(calcular5())},[ReceitaServicos, ReceitaVendas, ReceitaFinanceira, operacaoReceitaBrua]);
      
        
        return <div>         
        
        <section id="distribuicao-lucro-socio-sn">  

            <div className="row text-center">
                <div className="titulo">
                    <h1>Lucro anual do sócio Simples Nacional</h1>
                    <p>Calcule o valor do lucro Isento do sócio de empresa do simples Nacional a ser informada na DIRPF</p>
                </div>
            </div>

            <div className="container">
                <div className="row inputs-distribuicao-lucro-socio-sn">
                    <div className="col-sm-3">    
                        <div className="mb-3">
                            <label for="ReceitaServicos-distribuicao-lucro-socio-sn">Receita de serviços</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text">R$</span>
                                <input className="form-control" type="number" name="ReceitaServicos-distribuicao-lucro-socio-sn" id="ReceitaServicos-distribuicao-lucro-socio-sn" aria-label="Amount (to the nearest dollar)"  step="0.01" nin="0.00" value={ReceitaServicos} onChange={(e) => setNro1(e.target.value)}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label for="ReceitaVendas-distribuicao-lucro-socio-sn">Receita de vendas</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text">R$</span>
                                <input className="form-control" type="number" name="ReceitaVendas-distribuicao-lucro-socio-sn" id="ReceitaVendas-distribuicao-lucro-socio-sn" aria-label="Amount (to the nearest dollar)"  step="0.01" value={ReceitaVendas} onChange={(e) => setNro2(e.target.value)}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label for="ReceitaFinanceira-distribuicao-lucro-socio-sn">Receita Financeira</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text">R$</span>
                                <input className="form-control" type="number" name="ReceitaFinanceira-distribuicao-lucro-socio-sn" id="ReceitaFinanceira-distribuicao-lucro-socio-sn" aria-label="Amount (to the nearest dollar)"  step="0.01" value={ReceitaFinanceira} onChange={(e) => setNro3(e.target.value)}/>
                            </div>                     
                        </div>
                    </div>  
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label for="IRPJpagosnoSimplesNacional-distribuicao-lucro-socio-sn">IRPJ pagos no SN*</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text">R$</span>
                                <input className="form-control" type="number" name="IRPJpagosnoSimplesNacional-distribuicao-lucro-socio-sn" id="IRPJpagosnoSimplesNacional-distribuicao-lucro-socio-sn" aria-label="Amount (to the nearest dollar)"  step="0.01" value={IRPJpagosnoSimplesNacional} onChange={(e) => setNro4(e.target.value)}/>
                            </div>                     
                        </div>
                    </div>                    
                </div>
            </div>

            <div className="container">
                <div className="row text-center">
                <h3>{SituacaoLucroaSerDistribuido}</h3>
                {SituacaoLucroaSerDistribuido ? <h1>{[LucroaSerDistribuido].toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</h1> :''}
                <p><span className="segundo-p">*IRPJ pagos no Simples Nacional (corresponde ao total pago no ano, podendo ser consultado nos extratos mensais de apuração do imposto).</span></p>
                </div>
            </div>          
        </section>       
      </div> 
    }
  
  export default Distribuicaolucrosociosn;