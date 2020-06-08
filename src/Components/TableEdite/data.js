import { Type } from 'react-bootstrap-table2-editor'


export const columns = [{
    dataField: 'id',
    text: 'ITEM',
    headerStyle: () => {
        return { width: "6%" };
    },
    align: "center"
}, {
    dataField: 'descricao',
    text: 'DESCRIÇÃO DO ITEM',
    editor: {
        type: Type.TEXTAREA
    },
    headerStyle: () => {
        return { width: "30%" };
    }
},
{
    dataField: 'tipo',
    text: 'TIPO',
    editor: {
        type: Type.SELECT,
        options: [
            {
                value: "Workflow (Tela)",
                label: "Workflow (Tela)"
            },
            {
                value: "Workflow (Orquestração)",
                label: "Workflow (Orquestração)"
            },
            {
                value: "Customizado",
                label: "Customizado"
            },
            {
                value: "Integra Fácil",
                label: "Integra Fácil"
            }
        ]
    },
    headerStyle: () => {
        return { width: "20%" };
    }
}, {
    dataField: 'requisito',
    text: 'REQUISITO',
    headerStyle: () => {
        return { width: "10%" };
    },
    align: "center"
}, {
    dataField: 'desenvolvimento',
    text: 'DESENV.',
    headerStyle: () => {
        return { width: "10%" };
    },
    align: "center"
}, {
    dataField: 'testes',
    text: 'TESTES',
    headerStyle: () => {
        return { width: "10%" };
    },
    align: "center"
}, {
    dataField: 'total',
    text: 'TOTAL',
    editable: false,
    headerStyle: () => {
        return { width: "10%" };
    },
    align: "center"
}];


export const options = {
    sizePerPage: 6,
    sizePerPageList: [{
        text: '6', value: 6
    }, {
        text: '10', value: 10
    }, {
        text: '20', value: 20
    }, {
        text: '30', value: 30
    }]
}

export const data = [
    {
        id: 1,
        descricao: "",
        tipo: "",
        requisito: 0,
        desenvolvimento: 0,
        testes: 0,
        total: 0
    },
    {
        id: 2,
        descricao: "",
        tipo: "",
        requisito: 0,
        desenvolvimento: 0,
        testes: 0,
        total: 0
    }
]
