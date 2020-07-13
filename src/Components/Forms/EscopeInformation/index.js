import React from "react";

import ItemForm from "../../ItemForm";
import Combobox from "../../Combobox"
import CardForm from '../../CardForm'

const EscopeInformation = ({ setForm, formData, navigation, buttonNext }) => {
    const {
        responsavelEscopo,
        responsavelEstimativa,
        data,
        numeroDaOportunidade,
        cliente,
        descricaoDaOportunidade
    } = formData;

    const { next } = navigation;

    return (
        <div className="form">
            <div className="row">
                <div className="col-md-12 order-md-1">
                    <CardForm titleCard={`Dados da Oportunidade - OPP: ${numeroDaOportunidade} - ${cliente} - ${descricaoDaOportunidade}`}>
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
                                        placeholder="Digite o número"
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
                                        onChange={setForm}

                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <ItemForm
                                        label="Descrição da oportunidade"
                                        placeholder="Digite a descrição"
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
                                        placeholder="Digite o nome"
                                        name="responsavelEscopo"
                                        value={responsavelEscopo}
                                        onChange={setForm}
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <ItemForm
                                        label="Responsável pela estimativa"
                                        placeholder="Digite o nome"
                                        name="responsavelEstimativa"
                                        value={responsavelEstimativa}
                                        onChange={setForm}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="btn-group col-md-12 mb-1">
                                    <button
                                        className={`btn btn-${buttonNext}`}
                                        onClick={next}>
                                        Próximo
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
