import React from "react";

const Submit = ({ setForm, formData, navigation, warning, buttonPrevious }) => {
    const { } = formData;

    const { previous, next } = navigation;

    return (
        <div className="form">
            <div className="row">
                <div className="col-md-12 order-md-1">
                    <h5 class="pb-10 text-info">
                        Estimativa enviada
                    </h5>
                    <div className="col-md-12 mb-3">

                    </div>
                    <div className="row">
                        <div className="btn-group col-md-12 mb-3">
                            <button className={`btn btn-${buttonPrevious}`} onClick={previous}>Voltar</button>
                        </div>
                    </div>

                </div>
            </div >
        </div >
    );
};

export default Submit;
