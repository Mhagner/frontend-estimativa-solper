import { Type } from 'react-bootstrap-table2-editor'

function cellDecimalFormatter(cell, row) {
    return cell.toFixed(1)
}

export const columns = [{
    dataField: 'atividades',
    text: 'Atividades',
    headerStyle: () => {
        return { width: "8%" };
    },
    align: "left",
    editable: false,
    footer: 'Total'
}, {
    dataField: 'horas',
    text: 'Horas',
    headerStyle: () => {
        return { width: "8%" };
    },
    align: "center",
    editable: false,
    footerAlign: 'center',
    type: "number",
    formatter: cellDecimalFormatter,
    footer: dados => dados.reduce((acc, item) => acc + item, 0)
}];

export const dadosResumo = [
    {
        atividades: 'Elaboração da especificação técnica',
        horas: 0
    },
    {
        atividades: 'Desenvolvimento e testes',
        horas: 0
    },
    {
        atividades: 'Suporte a implantação/homologação',
        horas: 0
    },
    {
        atividades: 'Acompanhamento pós GO-live',
        horas: 0
    },
    {
        atividades: 'Treinamento',
        horas: 0
    },
    {
        atividades: 'Gerenciamento do projeto',
        horas: 0
    }
]
