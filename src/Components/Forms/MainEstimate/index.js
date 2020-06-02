import React from "react";

import ItemForm from "../../ItemForm";
import Combobox from "../../Combobox"
import TableEdite from '../../TableEdite'

const MainEstimate = ({ setForm, formData, navigation }) => {
    const { } = formData;

    const { previous, next } = navigation;

    return (
        <div className="form">
            <div className="row">
                <div className="col-md-12 order-md-1">
                    <h5 class="pb-10 text-info">
                        Estimativa Principal
                    </h5>
                    <div className="col-md-12 mb-3">
                        <TableEdite />                       
                    </div>
                    <div className="row">
                        <div className="btn-group col-md-12 mb-3">
                            <button className="btn btn-default" onClick={previous}>Voltar</button>
                            <button className="btn btn-info" onClick={next}>Próximo</button>
                        </div>
                    </div>

                </div>
            </div >
        </div >
    );
};

export default MainEstimate;
