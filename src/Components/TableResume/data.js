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
    footer: dados => dados.reduce((acc, item) => acc + item, 0)
}];

export const dados = [
    {
        atividades: 'Especificação técnica',
        horas: 2
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
        atividades: 'Treinamento',
        horas: 0
    },
    {
        atividades: 'Gerenciamento do projeto',
        horas: 0
    }
]
