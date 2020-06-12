import React from "react";

import TableEdite from '../../TableEdite'
import CardForm from '../../CardForm'
import CardResume from '../../CardResume'
import ButtonStep from '../../ButtonStep'
import Card from '../../Card'

const MainEstimate = ({ setForm, formData, navigation, buttonPrevious, buttonNext }) => {
    const { totalRequisito } = formData;

    const { previous, next } = navigation;

    const widthCard = '18rem'
    const heightCard = '7rem'

    return (
        <div className="form">
            <div className="row">
                <div className="col-md-12 order-md-1">
                    <CardForm titleCard="Estimativa Principal">
                        <TableEdite />
                        <div className="row">
                            <div className="col-md-3 mb-3">
                                <Card
                                    title="Requisito"
                                    description={20}
                                />
                            </div>
                            <div className="col-md-3 mb-3">
                                <Card
                                    title="Desenvolvimento"
                                    description={20}
                                />
                            </div>
                            <div className="col-md-3 mb-3">
                                <Card
                                    title="Testes"
                                    description={20}
                                />
                            </div>
                            <div className="col-md-3 mb-3">
                                <Card
                                    title="Total"
                                    description={20}
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
