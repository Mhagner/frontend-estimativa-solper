import React from 'react';
import Main from '../../Components/Main'
import Breadcrumb from '../../Components/Breadcrumb'


const ConfiguracaoEstimativa = () => {
    const lista = [
        {
            link: "/parametrizacoes",
            descricao: "parametrizações"
        },
        {
            descricao: "parametrização das estimativas",
            current: 'page'
        },
    ]
    return (
        <Main titlePage="Parametrização das estimativas">
            <div className="row">
                <div className="col-md-6">
                    <Breadcrumb
                        lista={lista}
                    />
                </div>
            </div>
        </Main>
    );
};

export default ConfiguracaoEstimativa;