import React from "react";

const OutherEstimates = ({ setForm, formData, navigation, buttonPrevious, buttonNext }) => {
    const { } = formData;

    const { previous, next } = navigation;

    return (
        <div className="form">
            <div className="row">
                <div className="col-md-12 order-md-1">
                    <h5 class="pb-10 text-info">
                        Demais estimativas do projeto
                    </h5>
                    <div className="col-md-12 mb-3">

                    </div>
                    <div className="row">
                        <div className="btn-group col-md-12 mb-3">
                            <button className={`btn btn-${buttonPrevious}`} onClick={previous}>Voltar</button>
                            <button className={`btn btn-${buttonNext}`} onClick={next}>Próximo</button>
                        </div>
                    </div>

                </div>
            </div >
        </div >
    );
};

export default OutherEstimates;
