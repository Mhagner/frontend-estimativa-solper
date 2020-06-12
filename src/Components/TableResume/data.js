import { Type } from 'react-bootstrap-table2-editor'

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
    footer: columnData => columnData.reduce((acc, item) => acc + item, 0)
}];

export const data = [
    {
        atividades: 'Especificação técnica',
        horas: 0
    },
    {
        atividades: 'Implementação e testes',
        horas: 0
    },
    {
        atividades: 'Implantação/homologação',
        horas: 0
    },
    {
        atividades: 'Acompanhamento pós GO-live',
        horas: 0
    },
    {
        atividades: 'Gerenciamento do projeto',
        horas: 0
    }
]
