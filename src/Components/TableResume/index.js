import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'

import { columns, dadosResumo } from './data'

const TableResume = ({ dados, homologacao, posGoLive, treinamento }) => {

    function calculaResumo(){
        dadosResumo[0].horas = load(dados, 'sumRequisito')
        
        dadosResumo[2].horas = parseInt(homologacao)
        dadosResumo[3].horas = parseInt(posGoLive)
        dadosResumo[4].horas = parseInt(treinamento)
    }

    function load(dados, item) {
        const req = dados.map(req => (
            req[item]
        ))
        const sumDado = req.reduce((acc, item) => acc + item, 0)
        return parseFloat(sumDado.toFixed(2))
    }

    calculaResumo()

    return (
        <>
            <BootstrapTable
                keyField="id"
                bootstrap4
                data={dadosResumo}
                columns={columns}
                headerWrapperClasses="foo"
                hover
                striped
            />
        </>
    )
}

export default TableResume
