import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

function PiscorretoraPDF(piscorretoras){
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const reportTitle = [
        {
            text: 'Pis corretora',
            fontSize: 15,
            bold: true,
            margin: [15, 20, 0, 45] // left, top, right, botton
        }
    ];

    const dados = piscorretoras.map((piscorretora) => {
        return [
            {text: piscorretora.id, fontSize: 9, margin: [0, 2, 0, 2]},
            {text: piscorretora.Periodo, fontSize: 9, margin: [0, 2, 0, 2]},
            {text: piscorretora.ReceitaFinanceiras, fontSize: 9, margin: [0, 2, 0, 2]},
            {text: piscorretora.PremiosdeSeguros, fontSize: 9, margin: [0, 2, 0, 2]},
            {text: piscorretora.PISretidonafonte, fontSize: 9, margin: [0, 2, 0, 2]},
            {text: piscorretora.PISaPagar, fontSize: 9, margin: [0, 2, 0, 2]},
        ]
    })
    

    const details = [
        {
            table:{
                headerRows: 1,
                widths: ['*','*', '*', '*', '*', '*'],
                body: [
                    [
                        {text: 'Código', style: 'tableHeader', fontSize: 10},
                        {text: 'Período', style: 'tableHeader', fontSize: 10},
                        {text: 'Receita Financeiras', style: 'tableHeader', fontSize: 10},
                        {text: 'Prêmios de Seguros', style: 'tableHeader', fontSize: 10},
                        {text: 'PIS retido na fonte', style: 'tableHeader', fontSize: 10},
                        {text: 'PIS a Pagar', style: 'tableHeader', fontSize: 10}
                    ],
                    ...dados    
                ]

            },
            layout: 'headerLineOnly'
        }
    ];

    function Rodape(currentPage, pageCount){
        return [
            {
                text: currentPage + ' / ' + pageCount,
                alignment: 'right',
                fontSize: 9,
                margin: [0, 10, 20, 0]
            }
        ]
    }

    const docDefinitios = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],
        header: [reportTitle],
        content: [details],
        footer: Rodape
    }

    pdfMake.createPdf(docDefinitios).download();

}

export default PiscorretoraPDF;