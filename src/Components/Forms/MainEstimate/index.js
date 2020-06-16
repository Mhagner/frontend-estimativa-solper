import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import BootstrapTable from 'react-bootstrap-table-next'
import cellEditFactory from 'react-bootstrap-table2-editor'
import paginationFactory from 'react-bootstrap-table2-paginator';
import CardForm from '../../CardForm'
import ButtonStep from '../../ButtonStep'
import Card from '../../Card'
import { defaultData, options, columns } from '../../TableEdite/data'

const widthCard = '18rem'
const heightCard = '7rem'

const MainEstimate = ({ setForm, formData, navigation, buttonPrevious, buttonNext }) => {

    const {
        numeroDaOportunidade,
        requisito,
        cliente
    } = formData;

    const [sumRequisito, setSumRequisito] = useState(requisito)
    const [sumDesenvolvimento, setSumDesenvolvimento] = useState(0)
    const [sumTestes, setSumTestes] = useState(0)

    const { previous, next } = navigation;

    let history = useHistory();

    useEffect(() => {
        resumaHoras(defaultData)
    })

    function load(dados, item) {
        const req = dados.map(req => (
            req[item]
        ))
        const sumDado = req.reduce((acc, item) => acc + item, 0)
        return sumDado
    }

    function resumaHoras(dados){
        setSumRequisito(load(dados, 'requisito'))
        setSumDesenvolvimento(load(dados, 'desenvolvimento'))
        setSumTestes(load(dados, 'testes'))
    }

    function addNewRow() {
        const newRow = {
            id: defaultData.length + 1,
            descricao: "",
            tipo: "",
            requisito: 0,
            desenvolvimento: 0,
            testes: 0,
            total: 0
        }
        defaultData.push(newRow);
        history.push('/nova-estimativa')
    }

    let percentRetrabalho = 0.05

    let retRequisito = sumRequisito * percentRetrabalho
    let retDesenvolvimento = sumDesenvolvimento * percentRetrabalho
    let retTestes = sumTestes * percentRetrabalho
    let total = sumRequisito + sumDesenvolvimento + sumTestes + retRequisito + retDesenvolvimento + retTestes

    return (
        <div className="form">
            <div className="row">
                <div className="col-md-12 order-md-1">
                    <CardForm titleCard={`Estimativa Principal - OPP: ${numeroDaOportunidade} - ${cliente}`}>
                        <div className="btn-group mb-3">
                            <button className="btn btn-primary" onClick={() => addNewRow()}>Novo item</button>
                        </div>
                        <div className="col-md-12 mb-3">
                            <BootstrapTable
                                keyField="id"
                                bootstrap4
                                data={defaultData}
                                columns={columns}
                                hover
                                striped
                                pagination={paginationFactory(options)}
                                cellEdit={cellEditFactory({
                                    mode: 'click',
                                    blurToSave: true,
                                    afterSaveCell:
                                        (oldValue, newValue, row, column) => {
                                            resumaHoras(defaultData)
                                        }
                                })}
                            />
                        </div>
                        <div className="row">
                            <div className="col-md-3 mb-3">
                                <Card
                                    title="Requisito"
                                    description={sumRequisito}
                                />
                            </div>
                            <div className="col-md-3 mb-3">
                                <Card
                                    title="Desenvolvimento"
                                    description={sumDesenvolvimento}
                                />
                            </div>
                            <div className="col-md-3 mb-3">
                                <Card
                                    title="Testes"
                                    description={sumTestes}
                                />
                            </div>
                            <div className="col-md-3 mb-3">
                                <Card
                                    title="Total"
                                    color="primary"
                                    description={total.toFixed(2)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 mb-3">
                                <Card
                                    title="Retrabalho REQ."
                                    color="warning"
                                    description={retRequisito.toFixed(2)}
                                />
                            </div>
                            <div className="col-md-3 mb-3">
                                <Card
                                    title="Retrabalho DES."
                                    color="warning"
                                    description={retDesenvolvimento.toFixed(2)}
                                />
                            </div>
                            <div className="col-md-3 mb-3">
                                <Card
                                    title="Retrabalho Teste"
                                    color="warning"
                                    description={retTestes.toFixed(2)}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <ButtonStep
                                colorPrevious={buttonPrevious}
                                colorNext={buttonNext}
                                funcPrevious={previous}
                                funcNext={next}
                                buttonPrevious="Voltar"
                                buttonNext="Próximo"
                            />
                        </div>
                    </CardForm>
                </div>
            </div>
        </div>
    );
};

export default MainEstimate;
