import React from "react";

import CardForm from '../../CardForm'
import ButtonStep from '../../ButtonStep'
import ItemForm from "../../ItemForm";

const OutherEstimates = ({ setForm, formData, navigation, buttonPrevious, buttonNext }) => {
    const { hoursLeader } = formData;

    const { previous, next } = navigation;

    return (
        <div className="form">
            <div className="row">
                <div className="col-md-12 order-md-1">
                    <CardForm titleCard="Dados das Demais Estimativas">
                        <form className="needs-validation">
                            <div className="row">
                                <div className="col-md-2 mb-3">
                                    <ItemForm
                                        label="Horas de Líder"
                                        name="hoursLeader"
                                        type="text"
                                        value={hoursLeader}
                                        onChange={setForm}
                                    />
                                </div>
                                <div className="col-md-2 mb-3">
                                    <ItemForm
                                        label="Horas Reuniões Líder"
                                        name="hoursLeader"
                                        type="text"
                                        value={hoursLeader}
                                        onChange={setForm}
                                    />
                                </div>
                                <div className="col-md-2 mb-3">
                                    <ItemForm
                                        label="Horas Reuniões Time"
                                        name="hoursLeader"
                                        type="text"
                                        value={hoursLeader}
                                        onChange={setForm}
                                    />
                                </div>
                                <div className="col-md-2 mb-3">
                                    <ItemForm
                                        label="Horas Apropriação"
                                        name="hoursLeader"
                                        type="text"
                                        value={hoursLeader}
                                        onChange={setForm}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2 mb-3">
                                    <ItemForm
                                        label="Horas GCS Setup"
                                        name="hoursLeader"
                                        type="text"
                                        value={hoursLeader}
                                        onChange={setForm}
                                    />
                                </div>
                                <div className="col-md-2 mb-3">
                                    <ItemForm
                                        label="Prep. de ambiente"
                                        name="hoursLeader"
                                        type="text"
                                        value={hoursLeader}
                                        onChange={setForm}
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
                        </form>
                    </CardForm>
                </div>
            </div >
        </div >
    );
};

export default OutherEstimates;
