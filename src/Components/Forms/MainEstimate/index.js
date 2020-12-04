import React, { useState, useEffect } from "react";
import { Steps, notification } from 'antd'
import { useHistory } from 'react-router-dom'
import BootstrapTable from 'react-bootstrap-table-next'
import cellEditFactory from 'react-bootstrap-table2-editor'
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Type } from 'react-bootstrap-table2-editor'
import CardForm from '../../CardForm'
import ButtonStep from '../../ButtonStep'
import Card from '../../Card'
import { options } from '../../TableEdite/data'
import './style.css'
import { LoadingOutlined, SolutionOutlined, EyeOutlined, AppstoreAddOutlined, AlertOutlined } from '@ant-design/icons';


const widthCard = '18rem'
const heightCard = '7rem'

const MainEstimate = ({ setForm, formData, navigation, buttonPrevious, buttonNext }) => {

    const {
        numeroDaOportunidade,
        descricaoDaOportunidade,
        requisito,
        cliente,
        dados
    } = formData;

    //console.log(dados)

    const [sumRequisito, setSumRequisito] = useState(requisito)
    const [sumDesenvolvimento, setSumDesenvolvimento] = useState(0)
    const [sumTestes, setSumTestes] = useState(0)
    const [hoverIdx, setHoverIdx] = useState(null)

    const { previous, next } = navigation;
    const { Step } = Steps

    let history = useHistory();

    notification.config({
        bottom: 50,
        duration: 2
    })

    useEffect(() => {
        resumaHoras(dados)
    })

    const rowEvents = {
        onMouseEnter: (e, row, rowIndex) => {
            setHoverIdx(rowIndex)
        },
        onMouseLeave: () => {
            setHoverIdx(null)
        }
    }

    const actionFormater = (cell, row, rowIndex, { hoverIdx }) => {
        if ((hoverIdx !== null || hoverIdx !== undefined) && hoverIdx === rowIndex) {
            return (
                <button className='btn btn-default btn-custom'
                    onClick={() => deleteRow(rowIndex)}>
                    <i className='fa fa-trash-o btn-icon'></i>
                </button>
                //<i class="fa fa-trash" onClick={() => deleteRow(rowIndex)}></i>
            );
        }
        return (
            <div
                style={{ width: '20px', height: '20px' }}
            />
        );
    }

    function load(dados, item) {
        const req = dados.map(req => (
            req[item]
        ))
        const sumDado = req.reduce((acc, item) => acc + item, 0)
        return sumDado
    }

    function calculeHoras(dados, row) {
        resumaHoras(dados)
        row.total = calculaTotal(row)
        row.testes = calculaTestes(row)
        row.sumRequisito = row.requisito + (row.requisito * percentRetrabalho)
        row.sumDesenvolvimento = row.desenvolvimento + (row.desenvolvimento * percentRetrabalho)
        row.sumTestes = row.testes + (row.testes * percentRetrabalho)
    }

    function resumaHoras(dados) {
        setSumRequisito(load(dados, 'requisito'))
        setSumDesenvolvimento(load(dados, 'desenvolvimento'))
        setSumTestes(load(dados, 'testes'))
    }

    function calculaTestes(dados) {
        let sumTeste = dados.desenvolvimento / 2
        return sumTeste
    }

    function calculaTotal(dados) {
        let teste = calculaTestes(dados)
        let sumDado = dados.requisito + dados.desenvolvimento + teste
        return sumDado
    }

    function addNewRow() {
        const newRow = {
            id: dados.length + 1,
            item: dados.length + 1,
            descricao: "",
            tipo: "",
            requisito: 0,
            desenvolvimento: 0,
            testes: 0,
            total: 0
        }
        dados.push(newRow);
        history.push('/nova-estimativa')
    }

    function deleteRow(index) {
        dados.splice(index, 1)
        history.push('/nova-estimativa')
    }

    function validaPreenchimento(e) {
        if (dados.length < 1) {
            return (
                notification.warning({
                    message: 'Atenção!',
                    description: "É necessário adicionar ao menos um item!"
                })
            )
        }
        next()
    }

    const percentRetrabalho = 0.10

    let retRequisito = sumRequisito * percentRetrabalho
    let retDesenvolvimento = sumDesenvolvimento * percentRetrabalho
    let retTestes = sumTestes * percentRetrabalho
    let total = sumRequisito + sumDesenvolvimento + sumTestes + retRequisito + retDesenvolvimento + retTestes

    const columns = [{
        dataField: 'id',
        text: 'id',
        headerStyle: () => {
            return { width: "6%" };
        },
        align: "center",
        hidden: true
    }, {
        dataField: 'item',
        text: 'ITEM',
        type: 'number',
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
        align: "center",
        type: 'number'
    }, {
        dataField: 'desenvolvimento',
        text: 'DESENV.',
        headerStyle: () => {
            return { width: "10%" };
        },
        align: "center",
        type: 'number'
    }, {
        dataField: 'testes',
        text: 'TESTES',
        editable: false,
        headerStyle: () => {
            return { width: "10%" };
        },
        align: "center",
        type: 'number'
    }, {
        dataField: 'total',
        text: 'TOTAL',
        editable: false,
        headerStyle: () => {
            return { width: "10%" };
        },
        align: "center",
        type: 'number'
    }, {
        //Ação excluir linha
        text: "AÇÃO",
        isDummyField: false,
        formatter: actionFormater,
        editable: false,
        formatExtraData: { hoverIdx },
        headerStyle: () => {
            return { width: "10%" };
        },
        align: 'center'
        //style: { height: '10px' }
    }, {
        dataField: 'sumRequisito',
        text: 'sumRequisito',
        editable: false,
        headerStyle: () => {
            return { width: "10%" };
        },
        align: "center",
        type: 'number',
        hidden: true
    }, {
        dataField: 'sumDesenvolvimento',
        text: 'sumDesenvolvimento',
        editable: false,
        headerStyle: () => {
            return { width: "10%" };
        },
        align: "center",
        type: 'number',
        hidden: true
    }, {
        dataField: 'sumTestes',
        text: 'sumTestes',
        editable: false,
        headerStyle: () => {
            return { width: "10%" };
        },
        align: "center",
        type: 'number',
        hidden: true
    },];


    return (
        <div className="form">
            <div className="row">
                <div className="col-md-12 order-md-1">
                    <CardForm titleCard={`${numeroDaOportunidade} - ${cliente} - ${descricaoDaOportunidade}`}>
                        <div className="row">
                            <div className="col-md-12 mb-2">
                                <Steps>
                                    <Step status="finish" title="Oportunidade" icon={<SolutionOutlined />} />
                                    <Step status="process" title="Estimativa principal" icon={<LoadingOutlined />} />
                                    <Step status="wait" title="Outras estimativas" icon={<AppstoreAddOutlined />} />
                                    <Step status="wait" title="Manutenção" icon={<AlertOutlined />} />
                                    <Step status="wait" title="Resumo" icon={<EyeOutlined />} />
                                </Steps>
                            </div>
                        </div>
                        <hr className="featurette-divider" />
                        <div className="btn-group mb-3">
                            <button className="btn btn-primary" onClick={() => addNewRow()}>Novo item</button>
                        </div>
                        <div className="col-md-12 mb-3">
                            <BootstrapTable
                                keyField="id"
                                bootstrap4
                                data={dados}
                                columns={columns}
                                rowEvents={rowEvents}
                                hover
                                striped
                                pagination={paginationFactory(options)}
                                cellEdit={cellEditFactory({
                                    mode: 'click',
                                    blurToSave: true,
                                    afterSaveCell:
                                        (oldValue, newValue, row, column) => {
                                            calculeHoras(dados, row)
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
                                funcNext={() => validaPreenchimento()}
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
