import React, { useEffect } from "react";

import ButtonStep from '../../ButtonStep'
import CardForm from '../../CardForm'
import Card from '../../Card'
import ItemForm from '../../ItemForm'
import RadioButton from '../../RadioButton'
import InputGroup from '../../InputGroup'


const Mainternance = ({ setForm, formData, navigation, buttonPrevious, buttonNext }) => {
    const { numeroDaOportunidade, cliente, valorHora, custoInfra, dados } = formData;
    const { previous, next } = navigation;

    function calculaTotalManutencao() {
        const req = load(dados, 'sumRequisito')
        const dev = load(dados, 'sumDesenvolvimento')
        const teste = load(dados, 'sumTestes')
        const total = req + dev + teste
        const resultado = (total * valorHora) * 0.01

        return resultado.toFixed(2)
    }

    function load(dados, item) {
        const req = dados.map(req => (
            req[item]
        ))
        const sumDado = req.reduce((acc, item) => acc + item, 0)
        return sumDado
    }

    return (
        <div className="form">
            <div className="row">
                <div className="col-md-12 order-md-1">
                    <CardForm titleCard={`Manutenção - OPP: ${numeroDaOportunidade} - ${cliente}`}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <Card title="Manutenção mensal de customizados">
                                    <div className="col-md-8 mb-3">
                                        <ItemForm
                                            label="Valor Hora do cliente"
                                            type="text"
                                            name="valorHora"
                                            value={valorHora}
                                            onChange={setForm}
                                        />
                                    </div>
                                    <div className="col-md-8 mb-3">
                                        <ItemForm
                                            label="Custo de manutenção mensal"
                                            type="text"
                                            name="custoMensal"
                                            value={`R$ ${calculaTotalManutencao()}`}
                                            onChange={setForm}
                                            readonly="readonly"
                                        />
                                    </div>
                                </Card>
                            </div>
                            <div className="col-md-6 mb-3">
                                <Card title="Custo de infraestrutura nuvem">
                                    <div className="col-md-12 mb-3">
                                        <div className="row">
                                            <RadioButton
                                                label="08 | 08GiB | R$ 798,00"
                                                value="798"
                                                checked={custoInfra === "798"}
                                                onChange={setForm}
                                                name="custoInfra"
                                            />
                                        </div>
                                        <div className="row">
                                            <RadioButton
                                                label="16 | 16GiB | R$ 1.596,50"
                                                value="1596,50"
                                                checked={custoInfra === "1596,50"}
                                                onChange={setForm}
                                                name="custoInfra"
                                            />
                                        </div>
                                        <div className="row">
                                            <RadioButton
                                                label="32 | 32GiB | R$ 3.095,56"
                                                value="3095,56"
                                                checked={custoInfra === "3095,56"}
                                                onChange={setForm}
                                                name="custoInfra"
                                            />
                                        </div>
                                        <div className="row">
                                            <RadioButton
                                                label="64 | 64GiB | R$ 6.200,99"
                                                value="6200,99"
                                                checked={custoInfra === "6200,99"}
                                                onChange={setForm}
                                                name="custoInfra"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-8 mb-3">
                                        <div className="row">
                                            <ItemForm
                                                label="Custo infra mensal"
                                                type="text"
                                                name="custoInfra"
                                                value={`R$ ${custoInfra}`}
                                                readonly="readonly"
                                            />
                                        </div>
                                    </div>
                                </Card>
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
        </div >
    );
};

export default Mainternance;
