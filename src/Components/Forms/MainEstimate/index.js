import React from "react";

import TableEdite from '../../TableEdite'
import CardForm from '../../CardForm'
import CardResume from '../../CardResume'
import ButtonStep from '../../ButtonStep'

const MainEstimate = ({ setForm, formData, navigation, buttonPrevious, buttonNext }) => {
    const { totalRequisito } = formData;

    const { previous, next } = navigation;

    const widthCard = '18rem'
    const heightCard = '7rem'

    return (
        <div className="form">
            <div className="row">
                <div className="col-md-12 order-md-1">
                    <CardForm titleCard="Dados da Estimativa Princial">
                        <TableEdite />
                        <div className="row">
                            <div className="col-md-3 mb-3">
                                <CardResume
                                    titleHeader="Requisito"
                                    value={20}
                                    widthCard={widthCard}
                                    heightCard={heightCard}
                                    color="secondary"
                                />
                            </div>
                            <div className="col-md-3 mb-3">
                                <CardResume
                                    titleHeader="Desenvolvimento"
                                    value={20}
                                    widthCard={widthCard}
                                    heightCard={heightCard}
                                    color="secondary"
                                />
                            </div>
                            <div className="col-md-3 mb-3">
                                <CardResume
                                    titleHeader="Testes"
                                    value={20}
                                    widthCard={widthCard}
                                    heightCard={heightCard}
                                    color="secondary"
                                />
                            </div>
                            <div className="col-md-3 mb-3">
                                <CardResume
                                    titleHeader="Total"
                                    value={20}
                                    widthCard={widthCard}
                                    heightCard={heightCard}
                                    color="primary"
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
                    </CardForm>
                </div>
            </div>
        </div>
    );
};

export default MainEstimate;
