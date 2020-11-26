export const columns = [{
    dataField: 'id',
    text: 'id',
    headerStyle: () => {
        return { width: "6%" };
    },
    align: "center",
    hidden: true,
}, {
    dataField: 'item',
    text: 'Item',
    type: 'number',
    headerStyle: () => {
        return { width: "6%" };
    },
    align: "center",
    footer: ""
}, {
    dataField: 'descricao',
    text: 'Descrição',
    headerStyle: () => {
        return { width: "30%" };
    },
    footer: ""
},
{
    dataField: 'tipo',
    text: 'Tipo',
    headerStyle: () => {
        return { width: "30%" };
    },
    footer: ""
}, {
    dataField: 'requisito',
    text: 'Requisito',
    headerStyle: () => {
        return { width: "10%" };
    },
    align: "center",
    type: 'number',
    footer: sum => sum.reduce((acc, item) => acc + item, 0),
    footerAlign: "center",
    footerClasses: "row-color"
}, {
    dataField: 'desenvolvimento',
    text: 'Desenv.',
    headerStyle: () => {
        return { width: "10%" };
    },
    align: "center",
    type: 'number',
    footer: sum => sum.reduce((acc, item) => acc + item, 0),
    footerAlign: "center",
    footerClasses: "row-color"
}, {
    dataField: 'testes',
    text: 'Testes',
    headerStyle: () => {
        return { width: "10%" };
    },
    align: "center",
    type: 'number',
    footer: sum => sum.reduce((acc, item) => acc + item, 0),
    footerAlign: "center",
    footerClasses: "row-color"
}, {
    dataField: 'total',
    text: 'Total',
    headerStyle: () => {
        return { width: "10%" };
    },
    align: "center",
    type: 'number',
    footer: sum => sum.reduce((acc, item) => acc + item, 0),
    footerAlign: "center",
    footerClasses: "row-color-total"
}];


