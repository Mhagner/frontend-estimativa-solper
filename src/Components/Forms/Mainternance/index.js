import React from "react";

import ButtonStep from '../../ButtonStep'
import CardForm from '../../CardForm'
import Card from '../../Card'
import ItemForm from '../../ItemForm'
import RadioButton from '../../RadioButton'
import { calculaTotalManutencao, calculaColuna } from '../../../Utils/metodos'
import { servidores } from '../../../Utils/mocks/mockCustoServidores'



const Mainternance = ({ setForm, formData, navigation, buttonPrevious, buttonNext }) => {
    const { numeroDaOportunidade, cliente, valorHora, custoInfra, dados } = formData;

    const { previous, next } = navigation;

    const totalManutenção = calculaTotalManutencao(dados, calculaColuna, valorHora, 0.01)

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
                                            value={`R$ ${totalManutenção}`}
                                            onChange={setForm}
                                            readonly="readonly"
                                        />
                                    </div>
                                </Card>
                            </div>
                            <div className="col-md-6 mb-3">
                                <Card title="Custo de infraestrutura nuvem">
                                    <div className="col-md-12 mb-3">
                                        {servidores.map((servidor) => (
                                            <div className="row" key={servidor.id}>
                                                <RadioButton
                                                    label={servidor.descricao}
                                                    value={servidor.valor}
                                                    checked={custoInfra === servidor.valor}
                                                    onChange={setForm}
                                                    name="custoInfra"
                                                />
                                            </div>
                                        ))}
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
