import React from "react";

import CardForm from '../../CardForm'
import ButtonStep from '../../ButtonStep'
import ItemForm from "../../ItemForm";
import Card from '../../Card'
import { defaultData } from "../../TableEdite/data";

const OutherEstimates = ({ setForm, formData, navigation, buttonPrevious, buttonNext }) => {
    const { 
        horasLider,
        reuniaoLider,
        apropriacaoTime,
        reunioesDiaria,
        gcs,
        preparacaoAmbiente,
        elaboracaoEscopo,
        homologacao,
        posGoLive,
        treinamento,
        numeroDaOportunidade,
        cliente
    } = formData;

    const { previous, next } = navigation;

    return (
        <div className="form">
            <div className="row">
                <div className="col-md-12 order-md-1">
                    <CardForm titleCard={`Dados das Demais Estimativas - OPP: ${numeroDaOportunidade} - ${cliente}`}>
                        <form className="needs-validation">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <Card title="Atividades internas" largura="120">
                                        <div className="row">
                                            <div className="col-md-4 mb-1">
                                                <ItemForm
                                                    label="GP Líder"
                                                    name="horasLider"
                                                    type="text"
                                                    value={horasLider}
                                                    onChange={setForm}
                                                />
                                            </div>
                                            <div className="col-md-4 mb-1">
                                                <ItemForm
                                                    label="Reuniões Líder"
                                                    name="reuniaoLider"
                                                    type="text"
                                                    value={reuniaoLider}
                                                    onChange={setForm}
                                                />
                                            </div>
                                            <div className="col-md-4 mb-1">
                                                <ItemForm
                                                    label="Apropriação time"
                                                    name="apropriacaoTime"
                                                    type="text"
                                                    value={apropriacaoTime}
                                                    onChange={setForm}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4 mb-1">
                                                <ItemForm
                                                    label="Reuniões diária"
                                                    name="reunioesDiaria"
                                                    type="text"
                                                    value={reunioesDiaria}
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
                                                    name="gcs"
                                                    type="text"
                                                    value={gcs}
                                                    onChange={setForm}
                                                />
                                            </div>
                                            <div className="col-md-4 mb-1">
                                                <ItemForm
                                                    label="Prep. de ambiente"
                                                    name="preparacaoAmbiente"
                                                    type="text"
                                                    value={preparacaoAmbiente}
                                                    onChange={setForm}
                                                />
                                            </div>
                                            <div className="col-md-4 mb-1">
                                                <ItemForm
                                                    label="Elab. do escopo"
                                                    name="elaboracaoEscopo"
                                                    type="text"
                                                    value={elaboracaoEscopo}
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
                                                    name="homologacao"
                                                    type="text"
                                                    value={homologacao}
                                                    onChange={setForm}
                                                />
                                            </div>
                                            <div className="col-md-4 mb-1">
                                                <ItemForm
                                                    label="Pós GO-live"
                                                    name="posGoLive"
                                                    type="text"
                                                    value={posGoLive}
                                                    onChange={setForm}
                                                />
                                            </div>
                                            <div className="col-md-4 mb-1">
                                                <ItemForm
                                                    label="treinamento"
                                                    name="hoursLeader"
                                                    type="text"
                                                    value={treinamento}
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
