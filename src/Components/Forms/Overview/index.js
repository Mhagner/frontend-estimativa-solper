import React from "react";

import TableResume from '../../TableResume'
import ButtonStep from '../../ButtonStep'
import CardForm from '../../CardForm'
import Card from '../../Card'

const Overview = ({ setForm, formData, navigation, buttonPrevious, buttonNext }) => {
    const { numeroDaOportunidade, requisito, cliente } = formData;

    const { previous, next } = navigation;

    return (
        <div className="form">
            <div className="row">
                <div className="col-md-12 order-md-1">
                    <CardForm titleCard={`Resumo da estimativa - OPP: ${numeroDaOportunidade} - ${cliente}`}>
                        <form className="needs-validation">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <TableResume requisito={requisito} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <Card>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <button type="button" className="btn btn-success btn-block">Salvar</button>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <button type="button" className="btn btn-primary btn-block">Exportar</button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <button type="button" className="btn btn-secondary btn-block">Macro cronograma</button>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <button type="button" className="btn btn-danger btn-block">Resumo por item</button>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                            <div className="row">
                                <div className="btn-group col-md-12 mb-1">
                                    <button 
                                        className={`btn btn-${buttonPrevious}`} 
                                        onClick={previous}>Voltar
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

export default Overview;
