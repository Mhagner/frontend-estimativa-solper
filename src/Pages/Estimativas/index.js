import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';

import { estimativas } from '../../Utils/mocks/mockEstimativas'
import Main from '../../Components/Main'

const columns = [
    {
        dataField: 'idEstimativa',
        text: 'Item',
        headerStyle: () => {
            return { width: "6%" };
        },
        align: "center",
    },
    {
        dataField: 'numeroDaOportunidade',
        text: 'Oportunidade',
        headerStyle: () => {
            return { width: "16%" };
        }
    },
    {
        dataField: 'cliente',
        text: 'Cliente',
        headerStyle: () => {
            return { width: "16%" };
        }
    },
    {
        dataField: 'descricaoDaOportunidade',
        text: 'Descrição',
        headerStyle: () => {
            return { width: "30%" };
        }
    }
]

function Estimativas() {
    return (
        <Main titlePage="Estimativas Realizadas">
            <BootstrapTable
                keyField="id"
                data={estimativas}
                columns={columns}
                striped
                hover
                condensed
            />
        </Main>
    )
}

export default Estimativas