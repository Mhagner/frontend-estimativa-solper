import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'

import { columns, dadosResumo } from './data'

const TableResume = ({ dados, homologacao, posGoLive, treinamento, horasLider, reuniaoLider, apropriacaoTime, reunioesDiaria, gcs, preparacaoAmbiente, elaboracaoEscopo }) => {

    console.log(horasLider)

    function calculaResumo() {
        let dev = load(dados, 'sumDesenvolvimento') || 0;
        let teste = load(dados, 'sumTestes') || 0

        dadosResumo[0].horas = load(dados, 'sumRequisito')
        dadosResumo[1].horas = dev + teste + parseInt(horasLider) + parseInt(reuniaoLider)
            + parseInt(apropriacaoTime) + parseInt(reunioesDiaria) + parseInt(gcs)
            + parseInt(preparacaoAmbiente) + parseInt(elaboracaoEscopo)
        dadosResumo[2].horas = parseInt(homologacao)
        dadosResumo[3].horas = parseInt(posGoLive)
        dadosResumo[4].horas = parseInt(treinamento)

    }

    function load(dados, item) {
        const req = dados.map(req => (
            req[item]
        ))
        const sumDado = req.reduce((acc, item) => acc + item, 0)
        return sumDado
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
