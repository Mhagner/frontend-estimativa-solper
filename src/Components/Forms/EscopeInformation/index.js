import React, { useState, useEffect } from "react";
import { notification, Steps } from 'antd'
import ItemForm from "../../ItemForm";
import Combobox from "../../Combobox"
import CardForm from '../../CardForm'
//import { clientes } from '../../../Utils/mocks/mockClientes'
import api from '../../../Utils/api'
import ButtonIcon from '../../ButtonIcon'
import { CalculatorOutlined, LoadingOutlined, EyeOutlined, AppstoreAddOutlined, AlertOutlined } from '@ant-design/icons';


const EscopeInformation = ({ setForm, formData, navigation, buttonNext }) => {
    const {
        responsavelEscopo,
        responsavelEstimativa,
        data,
        numeroDaOportunidade,
        cliente,
        descricaoDaOportunidade
    } = formData;

    const [clientes, setClientes] = useState([])

    const { next } = navigation;
    const { Step } = Steps

    notification.config({
        bottom: 50,
        duration: 2
    })

    useEffect(() => {
        api.get('clientes')
            .then(response => {
                setClientes(response.data)
            })
    }, [])

    function validaPreenchimento(e) {
        e.preventDefault()
        if (responsavelEscopo === "" ||
            responsavelEstimativa === "" ||
            numeroDaOportunidade === "" ||
            cliente === "" ||
            descricaoDaOportunidade === "") {

            notification.warning({
                message: 'Atenção!',
                description: "É necessário preencher todos os campos desse bloco!"
            })

        } else {
            next()
        }
    }

    return (
        <div className="form">
            <div className="row">
                <div className="col-md-12 order-md-1">
                    <CardForm titleCard={`${numeroDaOportunidade} - ${cliente} - ${descricaoDaOportunidade}`}>
                        <div className="row">
                            <div className="col-md-12 mb-2">
                                <Steps>
                                    <Step status="process" title="Oportunidade" icon={<LoadingOutlined />} />
                                    <Step status="wait" title="Estimativa principal" icon={<CalculatorOutlined />} />
                                    <Step status="wait" title="Outras estimativas" icon={<AppstoreAddOutlined />} />
                                    <Step status="wait" title="Manutenção" icon={<AlertOutlined />} />
                                    <Step status="wait" title="Resumo" icon={<EyeOutlined />} />
                                </Steps>
                            </div>
                        </div>
                        <hr className="featurette-divider" />
                        <form className="needs-validation">
                            <div className="row">
                                <div className="col-md-2 mb-3">
                                    <ItemForm
                                        label="Data"
                                        name="data"
                                        type="text"
                                        readonly="readonly"
                                        value={data}
                                        onChange={setForm}
                                    />
                                </div>
                                <div className="col-md-2 mb-3">
                                    <ItemForm
                                        label="Oportunidade"
                                        name="numeroDaOportunidade"
                                        type="text"
                                        value={numeroDaOportunidade}
                                        onChange={setForm}
                                    />
                                </div>
                                <div className="col-md-3 mb-3">
                                    <Combobox
                                        label="Cliente"
                                        name="cliente"
                                        value={cliente}
                                        lista={clientes}
                                        onChange={setForm}
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <ItemForm
                                        label="Descrição da oportunidade"
                                        name="descricaoDaOportunidade"
                                        type="text"
                                        value={descricaoDaOportunidade}
                                        onChange={setForm}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <ItemForm
                                        label="Responsável pelo escopo"
                                        name="responsavelEscopo"
                                        value={responsavelEscopo}
                                        onChange={setForm}
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <ItemForm
                                        label="Responsável pela estimativa"
                                        name="responsavelEstimativa"
                                        value={responsavelEstimativa}
                                        onChange={setForm}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 mb-3">

                                </div>
                            </div>
                            <div className="row">
                                <ButtonIcon
                                    size={2}
                                    handlerClick={validaPreenchimento}
                                    color="success">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </ButtonIcon>
                            </div>
                        </form>
                    </CardForm>
                </div>
            </div>
        </div >
    );
};

export default EscopeInformation;
