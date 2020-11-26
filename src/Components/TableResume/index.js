import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'

import { columns } from './data'
import { calculaColuna } from '../../Utils/metodos'

const TableResume = ({ dados, dadosResumo, homologacao, posGoLive, treinamento, horasLider, reuniaoLider, apropriacaoTime, reunioesDiaria, gcs, preparacaoAmbiente, elaboracaoEscopo }) => {

    function calculaResumo() {
        let dev = calculaColuna(dados, 'sumDesenvolvimento') || 0;
        console.log(dev)
        let teste = calculaColuna(dados, 'sumTestes') || 0;
        console.log(teste)

        //Requisito
        dadosResumo[0].horas = calculaColuna(dados, 'sumRequisito') || 0;
        //Implementação e testes
        dadosResumo[1].horas = dev + teste + parseInt(horasLider) + parseInt(reuniaoLider)
            + parseInt(apropriacaoTime) + parseInt(reunioesDiaria) + parseInt(gcs)
            + parseInt(preparacaoAmbiente) + parseInt(elaboracaoEscopo) + parseInt(treinamento)
        //Homologação
        dadosResumo[2].horas = parseInt(homologacao)
        //Pós GO-live
        dadosResumo[3].horas = parseInt(posGoLive)
        //Treinamento
        dadosResumo[4].horas = parseInt(treinamento)
        //Total
        dadosResumo[5].horas = (dadosResumo[0].horas + dadosResumo[1].horas + dadosResumo[2].horas
            + dadosResumo[3].horas + dadosResumo[4].horas) * 0.20
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
