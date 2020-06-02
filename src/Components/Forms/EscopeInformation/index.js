import React from "react";

import ItemForm from "../../ItemForm";
import Combobox from "../../Combobox"

const EscopeInformation = ({ setForm, formData, navigation }) => {
    const {
        responsibleEscope,
        responsibleEstimate,
        date,
        opportunityNumber
    } = formData;

    const { next } = navigation;

    return (
        <div className="form">
            <div className="row">
                <div className="col-md-12 order-md-1">
                    <h5 class="pb-10 text-info">
                        Dados do Escopo e Estimativa
                    </h5>
                    <form className="needs-validation">
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <ItemForm
                                    label="Data"
                                    name="date"
                                    type="date"
                                    value={date}
                                    onChange={setForm}
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <ItemForm
                                    label="Oportunidade"
                                    placeholder="Digite o número"
                                    name="opportunityNumber"
                                    type="text"
                                    value={opportunityNumber}
                                    onChange={setForm}
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <Combobox label="Cliente"
                                />
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-md-4 mb-3">
                                <ItemForm
                                    label="Responsável pelo escopo"
                                    placeholder="Digite o nome"
                                    name="resposibleEscopo"
                                    value={responsibleEscope}
                                    onChange={setForm}
                                />
                            </div>
                            <div className="col-md-4 mb-3">
                                <ItemForm
                                    label="Responsável pela estimativa"
                                    placeholder="Digite o nome"
                                    name="resposibleEstimate"
                                    value={responsibleEstimate}
                                    onChange={setForm}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="btn-group col-md-12 mb-3">
                                <button className="btn btn-info" onClick={next}>Próximo</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default EscopeInformation;
