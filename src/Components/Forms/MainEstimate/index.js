import React from "react";

import TableEdite from '../../TableEdite'
import ItemForm from '../../ItemForm'

const MainEstimate = ({ setForm, formData, navigation, buttonPrevious, buttonNext }) => {
    const { totalRequisito } = formData;

    const { previous, next } = navigation;

    const widthCard = '18rem'
    const HeightCard = '7rem'

    return (
        <div className="form">
            <div className="row">
                <div className="col-md-12 order-md-1">
                    <div className="card">
                        <h5 className="card-header">Dados da Estimativa Principal</h5>
                        <div className="card-body">
                            <TableEdite />
                            <div className="row">
                                <div className="col-md-3 mb-3">
                                    <div className="card border-secondary mb-3" 
                                        style={{ maxWidth: widthCard, maxHeight: HeightCard }}>
                                        <div className="card-header">Requisito</div>
                                        <div className="card-body text-secondary">
                                            <h5 className="card-title">20</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <div className="card border-secondary mb-3" 
                                      style={{ maxWidth: widthCard, maxHeight: HeightCard }}>
                                        <div className="card-header">Desenvolvimento</div>
                                        <div className="card-body text-secondary">
                                            <h4 className="card-title">20</h4>
                                        </div>
                                    </div>
                                </div>
                                 <div className="col-md-3 mb-3">
                                    <div className="card border-secondary mb-3" 
                                      style={{ maxWidth: widthCard, maxHeight: HeightCard }}>
                                        <div className="card-header">Testes</div>
                                        <div className="card-body text-secondary">
                                            <h5 className="card-title">20</h5>
                                        </div>
                                    </div>
                                </div>
                                 <div className="col-md-3 mb-3">
                                    <div className="card border-primary mb-3" 
                                      style={{ maxWidth: widthCard, maxHeight: HeightCard }}>
                                        <div className="card-header">Total</div>
                                        <div className="card-body text-primary">
                                            <h5 className="card-title">20</h5>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="btn-group col-md-12 mb-3">
                                    <button className={`btn btn-${buttonPrevious}`} onClick={previous}>Voltar</button>
                                    <button className={`btn btn-${buttonNext}`} onClick={next}>Próximo</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </div >
    );
};

export default MainEstimate;
