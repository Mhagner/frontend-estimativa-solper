import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'

import Main from '../../Components/Main'
import Breadcrumb from '../../Components/Breadcrumb'
import CardForm from '../../Components/CardForm'
import ItemForm from '../../Components/ItemForm'
import Combobox from '../../Components/Combobox'
import ButtonIcon from '../../Components/ButtonIcon';
import api from '../../Utils/api'

const ConfiguracaoEstimativa = () => {

    const [parametrizacao, setParametrizacao] = useState('')
    const id = '5fc6cfdc25a214525c61cf81'

    const history = useHistory()

    useEffect(() => {
        getParametrizacao()
    }, [])

    console.log(parametrizacao)

    function getParametrizacao() {
        api.get(`parametrizacao-estimativa/${id}`)
            .then(response => {
                const dados = response.data
                const retorno = {
                    percentualGP: dados.percentualGP,
                    percentualGPLider: dados.percentualGPLider,
                    percentualRetrabalhoDesenvolvimento: dados.percentualRetrabalhoDesenvolvimento,
                    percentualRetrabalhoRequisito: dados.percentualRetrabalhoRequisito,
                    percentualRetrabalhoTestes: dados.percentualRetrabalhoTestes,
                }
                setParametrizacao(retorno)
            })
            .catch(error => {
                console.log(error)
            })
    }

    function handleChange(e) {
        const auxParametrizacao = { ...parametrizacao }
        auxParametrizacao[e.target.name] = e.target.value
        setParametrizacao(auxParametrizacao)
    }

    function alterarParametrizacao(value) {
        api.put(`parametrizacao-estimativa/${id}`, value)
            .then(response => {
               history.push('/parametrizacoes')
            })
            .catch(error => {
                console.log(error)
            })
    }

    function submeterParaAlteracao(e) {
        alterarParametrizacao(parametrizacao)
        e.preventDefault()
    }

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

    function voltar() {
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
                        <form onSubmit={submeterParaAlteracao} className="needs-validation">
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <ItemForm
                                        label="% Percentual retrabalho requisito"
                                        value={parametrizacao.percentualRetrabalhoRequisito}
                                        onChange={handleChange}
                                        placeholder="Digite o percentual"
                                        name="percentualRetrabalhoRequisito"
                                        type="number"
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <ItemForm
                                        label="% Percentual retrabalho desenvolvimento"
                                        value={parametrizacao.percentualRetrabalhoDesenvolvimento}
                                        onChange={handleChange}
                                        placeholder="Digite o percentual"
                                        name="percentualRetrabalhoDesenvolvimento"
                                        type="number"
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <ItemForm
                                        label="% Percentual retrabalho testes"
                                        value={parametrizacao.percentualRetrabalhoTestes}
                                        onChange={handleChange}
                                        placeholder="Digite o percentual"
                                        name="percentualRetrabalhoTestes"
                                        type="number"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <ItemForm
                                        label="% Percentual horas de GP"
                                        value={parametrizacao.percentualGP}
                                        onChange={handleChange}
                                        placeholder="Digite o percentual"
                                        name="percentualGP"
                                        type="number"
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <ItemForm
                                        label="% Percentual horas de líder"
                                        value={parametrizacao.percentualGPLider}
                                        onChange={handleChange}
                                        placeholder="Digite o percentual"
                                        name="percentualGPLider"
                                        type="number"
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
                                <div className="col-md-2">
                                    <button
                                        type="submit"
                                        className="btn btn-success">
                                        <div className="icon-button">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </CardForm>
                </div>
            </div>

        </Main>
    );
};

export default ConfiguracaoEstimativa;
