import React, { useState, useEffect } from "react";
import { Steps, notification, Button, Tooltip } from 'antd'
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
import api from '../../../Utils/api'
import {
    DeleteOutlined,
    ArrowRightOutlined,
    ArrowLeftOutlined,
    PlusOutlined,
    LoadingOutlined,
    SolutionOutlined,
    EyeOutlined,
    AppstoreAddOutlined,
    AlertOutlined
} from '@ant-design/icons';


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

    const id = '5fc6cfdc25a214525c61cf81'

    //console.log(dados)

    const [sumRequisito, setSumRequisito] = useState(requisito)
    const [sumDesenvolvimento, setSumDesenvolvimento] = useState(0)
    const [sumTestes, setSumTestes] = useState(0)
    const [hoverIdx, setHoverIdx] = useState(null)
    const [retrabalho, setRetrabalho] = useState('')
    const [loader, setLoader] = useState(false)

    const { previous, next } = navigation;

    const { Step } = Steps

    let history = useHistory();

    notification.config({
        bottom: 50,
        duration: 2
    })

    useEffect(() => {
        resumaHoras(dados)
        getRetrabalho()
    }, [])

    function resumaHoras(dados) {
        setSumRequisito(load(dados, 'requisito'))
        setSumDesenvolvimento(load(dados, 'desenvolvimento'))
        setSumTestes(load(dados, 'testes'))
    }

    const getRetrabalho = () => {
        api.get(`parametrizacao-estimativa/${id}`)
            .then(response => {
                const dados = response.data
                const retorno = {
                    percentualRetrabalhoRequisito: dados.percentualRetrabalhoRequisito,
                    percentualRetrabalhoDesenvolvimento: dados.percentualRetrabalhoDesenvolvimento,
                    percentualRetrabalhoTestes: dados.percentualRetrabalhoTestes,
                    percentualGP: dados.percentualGP,
                    percentualGPLider: dados.percentualGPLider
                }
                setRetrabalho(retorno)
            })
    }

    const rowEvents = {
        onMouseEnter: (e, row, rowIndex) => {
            setHoverIdx(rowIndex)
        },
        onMouseLeave: () => {
            setHoverIdx(null)
        }
    }

    /*Botão de ação da grid para deletar a linha
    Só é mostrando quando o mouse estiver sobre a linha
    */

    const actionFormater = (cell, row, rowIndex, { hoverIdx }) => {
        if ((hoverIdx !== null || hoverIdx !== undefined) && hoverIdx === rowIndex) {
            return (
                <Button
                    type="danger"
                    onClick={() => deleteRow(rowIndex)}
                    shape="circle"
                    icon={<DeleteOutlined />} />
                /*   <button className='btn btn-default btn-custom'
                      onClick={() => deleteRow(rowIndex)}>
                      <i className='fa fa-trash-o btn-icon'></i>
                  </button> */

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
        //row.testes = calculaTestes(row)
        row.sumRequisito = row.requisito + (row.requisito * (retrabalho.percentualRetrabalhoRequisito / 100))
        row.sumDesenvolvimento = row.desenvolvimento + (row.desenvolvimento * (retrabalho.percentualRetrabalhoDesenvolvimento / 100))
        row.sumTestes = row.testes + (row.testes * (retrabalho.percentualRetrabalhoTestes / 100))
    }

    function calculaTotal(dados) {
        let sumDado = dados.requisito + dados.desenvolvimento + dados.testes
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
        } else {
            next()
        }
    }

    let retRequisito = sumRequisito * (retrabalho.percentualRetrabalhoRequisito / 100)
    let retDesenvolvimento = sumDesenvolvimento * (retrabalho.percentualRetrabalhoDesenvolvimento / 100)
    let retTestes = sumTestes * (retrabalho.percentualRetrabalhoTestes / 100)
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
        align: "center",
        footer: ""
    }, {
        dataField: 'descricao',
        text: 'DESCRIÇÃO DO ITEM',
        editor: {
            type: Type.TEXTAREA
        },
        headerStyle: () => {
            return { width: "30%" };
        },
        footer: ""
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
        },
        footer: ""
    }, {
        dataField: 'requisito',
        text: 'REQUISITO',
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
        text: 'DESENV.',
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
        text: 'TESTES',
        //editable: false,
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
        text: 'TOTAL',
        editable: false,
        headerStyle: () => {
            return { width: "10%" };
        },
        align: "center",
        type: 'number',
        footer: sum => sum.reduce((acc, item) => acc + item, 0),
        footerAlign: "center",
        footerClasses: "row-color-total"
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
    },
    ];


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
                            <Button
                                type="primary"
                                icon={<PlusOutlined />}
                                shape="round"
                                onClick={() => addNewRow()}>
                                Novo Item
                            </Button>
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
                        {/* <div className="row">
                            <div className="col-md-3 mb-3">
                                <Card
                                    title="Total + retrabalho"
                                    color="primary"
                                    description={total.toFixed(2)}
                                />
                            </div>
                        </div> */}
                        <div className="row">
                            <div className="col-md-2 mb-3">
                                <Tooltip title="Voltar">
                                    <Button
                                        type="primary"
                                        icon={<ArrowLeftOutlined />}
                                        size="large"
                                        onClick={previous}
                                    >
                                    </Button>
                                </Tooltip>
                            </div>
                            <div className="col-md-2 mb-3">
                                <Tooltip title="Próximo">
                                    <Button
                                        className="red-1"
                                        type="primary"
                                        size="large"
                                        icon={<ArrowRightOutlined />}
                                        onClick={() => validaPreenchimento()}
                                    >
                                    </Button>
                                </Tooltip>
                            </div>
                        </div>
                    </CardForm>
                </div>
            </div>
        </div>
    );
};

export default MainEstimate;
