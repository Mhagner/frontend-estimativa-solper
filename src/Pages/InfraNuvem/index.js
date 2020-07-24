import React from 'react';
import Main from '../../Components/Main'
import Breadcrumb from '../../Components/Breadcrumb'

const InfraNuvem = () => {
    const lista = [
        {
            link: "/parametrizacoes",
            descricao: "parametrizações"
        },
        {
            descricao: "infraestrutura nuvem",
            current: 'page'
        },
    ]

    return (
        <Main titlePage="Infraestrutura Nuvem">
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

export default InfraNuvem;
