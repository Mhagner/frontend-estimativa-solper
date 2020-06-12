import React from "react";

import ItemForm from "../../ItemForm";
import Combobox from "../../Combobox"
import CardForm from '../../CardForm'
import ButtonStep from '../../ButtonStep'

const EscopeInformation = ({ setForm, formData, navigation, buttonNext }) => {
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
                    <CardForm titleCard="Dados da Oportunidade">
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
                                <div className="btn-group col-md-12 mb-1">
                                    <button 
                                        className={`btn btn-${buttonNext}`} 
                                        onClick={next}>Próximo
                                    </button>
                                </div>
                            </div>
                        </form>
                    </CardForm>
                </div>
            </div>
        </div >
    );
};

export default EscopeInformation;
