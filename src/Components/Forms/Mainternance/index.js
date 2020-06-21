import React from "react";

import ButtonStep from '../../ButtonStep'
import CardForm from '../../CardForm'
import Card from '../../Card'
import ItemForm from '../../ItemForm'

const Mainternance = ({ setForm, formData, navigation, warning, buttonPrevious, buttonNext }) => {
    const { numeroDaOportunidade, cliente, valorHora } = formData;
    const { previous, next } = navigation;

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
                                            name="valorHora"
                                            value={valorHora}
                                            readonly="readonly"
                                        />
                                    </div>
                                </Card>
                            </div>
                            <div className="col-md-6 mb-3">
                                <Card title="Custo de infraestrutura nuvem">
                                    <h5>teste</h5>
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
        </div>
    );
};

export default Mainternance;
