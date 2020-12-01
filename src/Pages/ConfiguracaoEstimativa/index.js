import React from 'react';
import { Link, useHistory } from 'react-router-dom'

import Main from '../../Components/Main'
import Breadcrumb from '../../Components/Breadcrumb'
import CardForm from '../../Components/CardForm'
import ItemForm from '../../Components/ItemForm'
import Combobox from '../../Components/Combobox'
import ButtonIcon from '../../Components/ButtonIcon';



const ConfiguracaoEstimativa = () => {
    const lista = [
        {
            link: "/parametrizacoes",
            descricao: "Parametrizações"
        },
        {
            descricao: "Parametrização das estimativas",
            current: 'page'
        },
    ]

    function voltar(){
        return '/parametrizacoes'
    }

    return (
        <Main titlePage="Parametrização das estimativas">
            <div className="row">
                <div className="col-md-6">
                    <Breadcrumb
                        lista={lista}
                    />
                </div>
                <div className="col-md-12 order-md-1">
                    <CardForm titleCard="Configurações de estimativas">
                        <form className="needs-validation">
                            <div className="row">
                                <div className="col-md-2 mb-3">
                                    <ItemForm
                                        label="Oportunidade"
                                        placeholder="Digite o número"
                                        name="numeroDaOportunidade"
                                        type="text"
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <ItemForm
                                        label="Descrição da oportunidade"
                                        placeholder="Digite a descrição"
                                        name="descricaoDaOportunidade"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-md-4 mb-3">
                                    <ItemForm
                                        label="Responsável pelo escopo"
                                        placeholder="Digite o nome"
                                        name="responsavelEscopo"
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <ItemForm
                                        label="Responsável pela estimativa"
                                        placeholder="Digite o nome"
                                        name="responsavelEstimativa"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <ButtonIcon
                                    size={2}
                                    route={voltar()}
                                    color="secondary">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                    </svg>
                                </ButtonIcon>
                                <ButtonIcon
                                    size={2}
                                    color="success">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                    </svg>
                                </ButtonIcon>
                            </div>
                        </form>
                    </CardForm>
                </div>
            </div>

        </Main>
    );
};

export default ConfiguracaoEstimativa;
