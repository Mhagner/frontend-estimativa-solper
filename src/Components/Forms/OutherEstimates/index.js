import React from "react";

import CardForm from '../../CardForm'
import ButtonStep from '../../ButtonStep'
import ItemForm from "../../ItemForm";
import TableResume from '../../TableResume'
import Card from '../../Card'

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
                                <div className="col-md-6 mb-3">
                                    <Card title="Atividades internas" largura="120">
                                        <div className="row">
                                            <div className="col-md-4 mb-1">
                                                <ItemForm
                                                    label="GP Líder"
                                                    name="hoursLeader"
                                                    type="text"
                                                    value={hoursLeader}
                                                    onChange={setForm}
                                                />
                                            </div>
                                            <div className="col-md-4 mb-1">
                                                <ItemForm
                                                    label="Reuniões Líder"
                                                    name="hoursLeader"
                                                    type="text"
                                                    value={hoursLeader}
                                                    onChange={setForm}
                                                />
                                            </div>
                                            <div className="col-md-4 mb-1">
                                                <ItemForm
                                                    label="Apropriação time"
                                                    name="hoursLeader"
                                                    type="text"
                                                    value={hoursLeader}
                                                    onChange={setForm}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4 mb-1">
                                                <ItemForm
                                                    label="Reuniões diária"
                                                    name="hoursLeader"
                                                    type="text"
                                                    value={hoursLeader}
                                                    onChange={setForm}
                                                />
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <Card title="Atividades técnicas" largura="120">
                                        <div className="row">
                                            <div className="col-md-4 mb-1">
                                                <ItemForm
                                                    label="GCS/Setup"
                                                    name="hoursLeader"
                                                    type="text"
                                                    value={hoursLeader}
                                                    onChange={setForm}
                                                />
                                            </div>
                                            <div className="col-md-4 mb-1">
                                                <ItemForm
                                                    label="Prep. de ambiente"
                                                    name="hoursLeader"
                                                    type="text"
                                                    value={hoursLeader}
                                                    onChange={setForm}
                                                />
                                            </div>
                                            <div className="col-md-4 mb-1">
                                                <ItemForm
                                                    label="Elab. do escopo"
                                                    name="hoursLeader"
                                                    type="text"
                                                    value={hoursLeader}
                                                    onChange={setForm}
                                                />
                                            </div>
                                        </div>

                                    </Card>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <Card title="Atividades de implantação" largura="120">
                                        <div className="row">
                                            <div className="col-md-4 mb-1">
                                                <ItemForm
                                                    label="Homol./produção"
                                                    name="hoursLeader"
                                                    type="text"
                                                    value={hoursLeader}
                                                    onChange={setForm}
                                                />
                                            </div>
                                            <div className="col-md-4 mb-1">
                                                <ItemForm
                                                    label="Pós GO-live"
                                                    name="hoursLeader"
                                                    type="text"
                                                    value={hoursLeader}
                                                    onChange={setForm}
                                                />
                                            </div>
                                            <div className="col-md-4 mb-1">
                                                <ItemForm
                                                    label="Treinamento"
                                                    name="hoursLeader"
                                                    type="text"
                                                    value={hoursLeader}
                                                    onChange={setForm}
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
                        </form>
                    </CardForm>
                </div>
            </div >
        </div >
    );
};

export default OutherEstimates;
