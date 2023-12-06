import React, { useState, useEffect } from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import NavbarCalculadora from '../Navbar/navbarcalculadora';
import Rodapeprodutos from '../../../site/Components/rodapeprodutos';
import './irsobreacoes.css';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const Irsobreacoes = () => {
  const [file, setFile] = useState(null);
  const [Quantidade, setNro1] = useState();
  const [Preco, setNro2] = useState();
  const [CustoTotal, setNro3] = useState();
  const [SelectedDate, setSelectedDate] = useState();
  const [CodigoAcao, setCodigoAcao] = useState();
  const [ComprarouVender, setComprarouVender] = useState();
  const [PrecoTotal, setPrecoTotal] = useState(0);
  const [pdfContent, setPdfContent] = useState(null);

  const onFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const generatePdf = () => {
    if (!file) {
      alert('Por favor, selecione um arquivo PDF.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const pdfContent = reader.result;

      // Modifique esta parte de acordo com a estrutura do seu PDF gerado pelo pdfmake
      const documentDefinition = {
        content: [
          { text: 'Conteúdo do PDF aqui.' },
          { text: `Quantidade: ${Quantidade}` },
          { text: `Preço: ${Preco}` },
          { text: `Custo Total: ${CustoTotal}` },
          { text: `Data: ${SelectedDate ? SelectedDate.toISOString() : 'N/A'}` },
          { text: `Código da Ação: ${CodigoAcao || 'N/A'}` },
          { text: `C/V: ${ComprarouVender || 'N/A'}` },
          { text: `Preço Total: ${PrecoTotal}` },
        ],
      };

      // Armazena o conteúdo do PDF no estado
      setPdfContent(documentDefinition);
    };

    reader.readAsArrayBuffer(file);
  };

  // Restante do seu código...

  return (
    <div>
      <section id="ir-sobre-acoes">
        <NavbarCalculadora />
        <div>
          <input type="file" onChange={onFileChange} />
          <button onClick={generatePdf}>Importar Informações</button>
        </div>
        {/* Exibe as informações do PDF na tela */}
        {pdfContent && (
          <div>
            <h2>Informações Importadas do PDF:</h2>
            <pre>{JSON.stringify(pdfContent, null, 2)}</pre>
            {/* Adicione aqui elementos para cálculos ou visualizações */}
          </div>
        )}
        {/* Botão para gerar PDF */}
        <button onClick={() => pdfMake.createPdf(pdfContent).open()}>Gerar PDF</button>
        {/* Restante do seu código... */}
      </section>
      <Rodapeprodutos />
    </div>
  );
};

export default Irsobreacoes;

