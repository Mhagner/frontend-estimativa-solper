import React from "react";

import ButtonStep from '../../ButtonStep'
import CardForm from '../../CardForm'

const Mainternance = ({ setForm, formData, navigation, warning, buttonPrevious, buttonNext }) => {
    const { numeroDaOportunidade, cliente } = formData;
    const { previous, next } = navigation;

    return (
        <div className="form">
            <div className="row">
                <div className="col-md-12 order-md-1">
                    <CardForm titleCard={`Manutenção - OPP: ${numeroDaOportunidade} - ${cliente}`}>

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

export default Mainternance;
