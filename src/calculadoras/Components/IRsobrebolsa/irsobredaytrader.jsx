import React, {useState, useEffect} from 'react';
import CurrencyInputWcontec from '../Props/MaskCurrency/currencyInputWcontec';
import NavbarCalculadora from '../Navbar/navbarcalculadora';
import Rodapeprodutos from '../../../site/Components/rodapeprodutos';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './irsobrebolsa.css';

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

const IRdaytrader = () => {  
  const [ResultadoBruto, setNro2] = useState(0);
  const [IRRFProjecao, setNro3] = useState(0);
  const [TXoperacional, setNro4] = useState(0);
  const [TXregistBMEF, setNro5] = useState(0);
  const [TXBMEFemol, setNro6] = useState(0);
  const [ISS, setNro7] = useState(0);
  const [Ourtros, setNro8] = useState(0);
  const [ResultadoLiquido, setNro9] = useState(0);
  const [meses, setMeses] = useState([]);

  const handleChange1 = (event, value, maskedValue) => {
    event.preventDefault();
    setMeses(value);
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

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    // Aqui você deve implementar o código para processar o conteúdo do PDF e preencher os campos do formulário.
    // Use uma biblioteca como pdf.js ou pdf-lib para a extração de texto.
  };


    return <div>

        <section id="ir-day-trader">
        <NavbarCalculadora/>
        <div className="row text-center">
                <div className="titulo">
                    <h1>DIRPF</h1>
                    <h2>Day Trader</h2>
                    <p>Calcule o valor do imposto de renda pessoa física se você realizou compra e venda no mesmo dia na bolsa de valores</p>
                </div>
            </div>
            <div className="container">
                <div className="row inputs-ir-day-trader">
                    
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label htmlFor="Data-ir-day-trader">Data</label>                
                            <div className="input-group mb-3 row inputs-ir-day-trader">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="Data-ir-day-trader" id="Data-ir-day-trader" aria-label="Amount (to the nearest dollar)" value={0} onChange={handleChange1}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label htmlFor="ResultadoBruto-ir-day-trader">Resultado Bruto</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="ResultadoBruto-ir-day-trader" id="ResultadoBruto-ir-day-trader" aria-label="Amount (to the nearest dollar)" value={0} onChange={handleChange2}/>
                            </div>                     
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label htmlFor="IRRFProjecao-ir-day-trader">IRRF Projeção</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="Promocoes-irpf-sobre-mei-transporte-cargas" id="Promocoes-irpf-sobre-mei-transporte-cargas" aria-label="Amount (to the nearest dollar)" value={0} onChange={handleChange3}/>
                            </div>                     
                        </div>  
                    </div>
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label htmlFor="TaxaOperacional-ir-day-trader">Taxa Operacional</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="TaxaOperacional-ir-day-trader" id="TaxaOperacional-ir-day-trader" aria-label="Amount (to the nearest dollar)" value={0} onChange={handleChange4}/>
                            </div>                     
                        </div>  
                    </div>
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label htmlFor="TaxaRegistoBMeF-ir-day-trader">Taxa Registo BM&F</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="TaxaRegistoBMeF-ir-day-trader" id="TaxaRegistoBMeF-ir-day-trader" aria-label="Amount (to the nearest dollar)" value={0} onChange={handleChange5}/>
                            </div>                     
                        </div>  
                    </div>
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label htmlFor="TaxaBMeFemolfgar-ir-day-trader">Taxa BM&F (emol+f.gar)</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="TaxaBMeFemolfgar-ir-day-trader" id="TaxaBMeFemolfgar-ir-day-trader" aria-label="Amount (to the nearest dollar)" value={0} onChange={handleChange6}/>
                            </div>                     
                        </div>  
                    </div>
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label htmlFor="ISS-ir-day-trader">ISS</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="ISS-ir-day-trader" id="ISS-ir-day-trader" aria-label="Amount (to the nearest dollar)" value={0} onChange={handleChange7}/>
                            </div>                     
                        </div>  
                    </div>
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label htmlFor="Outros-ir-day-trader">Outros</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="Outros-ir-day-trader" id="Outros-ir-day-trader" aria-label="Amount (to the nearest dollar)" value={0} onChange={handleChange8}/>
                            </div>                     
                        </div>  
                    </div>
                    <div className="col-sm-3">
                        <div className="mb-3">
                            <label htmlFor="ResultadoLiquido-ir-day-trader">Resultado Líquido</label>                
                            <div className="input-group mb-3">
                                <span className="input-group-text inputs">R$</span>
                                <CurrencyInputWcontec currency="BRL" config={currencyConfig} className="form-control inputs" name="ResultadoLiquido-ir-day-trader" id="ResultadoLiquido-ir-day-trader" aria-label="Amount (to the nearest dollar)" value={0} onChange={handleChange9}/>
                            </div>                     
                        </div>  
                    </div>
                    <div>
                    <input type="file" onChange={handleFileUpload} />
                    </div>
                </div>  
            </div>    
        <Rodapeprodutos/>  
        </section>
    </div> 
}
export default IRdaytrader;