function cellDecimalFormatter(cell, row) {
    return cell.toFixed(2)
}

export const columns = [
    {
        dataField: 'id',
        text: 'Item',
        hidden: true
    },
    {
        dataField: 'inst',
        text: 'INST',
        headerStyle: () => {
            return { width: "10%" };
        },
        align: "left",
        editable: false,
    }, {
        dataField: 'cpu',
        text: 'CPU',
        headerStyle: () => {
            return { width: "10%" };
        },
        align: "center",
        editable: false,
        type: "number",
        //formatter: cellDecimalFormatter,
    }, {
        dataField: 'custoMes',
        text: 'CUSTO/MÊS',
        headerStyle: () => {
            return { width: "16%" };
        },
        align: "left",
        editable: false,
        //formatter: cellDecimalFormatter
    }];

export const dadosInfra = [
    {
        id: 1,
        inst: 'D2 v3',
        cpu: 2,
        ram: '8 GIB',
        custoMes: 'R$ 798,76'
    },
    {
        id: 2,
        inst: 'D4 v3',
        cpu: 4,
        ram: '16 GIB',
        custoMes: 'R$ 1.597,52'
    },
    {
        id: 3,
        inst: 'D8 v3',
        cpu: 8,
        ram: '32 GIB',
        custoMes: 'R$ 3.195,03'
    },
    {
        id: 4,
        inst: 'D16 v3',
        cpu: 16,
        ram: '64 GIB',
        custoMes: 'R$ 6.390,07'
    },
]
