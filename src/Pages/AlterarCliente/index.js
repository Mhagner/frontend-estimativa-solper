import React, { useState, useEffect } from 'react';
import Main from '../../Components/Main'
import Breadcrumb from '../../Components/Breadcrumb'
import ItemForm from '../../Components/ItemForm'
import Combobox from '../../Components/Combobox'
import { tipos } from '../../Utils/mocks/mockTipos'
import { useHistory, useParams, Link } from 'react-router-dom'
import api from '../../Utils/api'
import ButtonIcon from '../../Components/ButtonIcon'

    
const AlterarCliente = () => {

    const [descricao, setDescricao] = useState('')
    const [tipo, setTipo] = useState('')
    const [colaboradores, setColaboradores] = useState(0)

    let { id } = useParams()

    useEffect(() => {
        getCliente()
    }, [])

    let history = useHistory()

    const lista = [
        {
            link: "/parametrizacoes",
            descricao: "Parametrizações"
        },
        {
            link: "/parametrizacoes/clientes",
            descricao: "Clientes"
        },
        {
            link: `/parametrizacoes/clientes/${id}`,
            descricao: `${descricao}`
        },
        {
            descricao: "Alterar cliente",
            current: 'page',
            ativo: "active"
        },
    ]

    function getCliente() {
        api.get(`clientes/${id}`)
            .then(response => {
                setDescricao(response.data.descricao)
                setTipo(response.data.tipo)
                setColaboradores(response.data.colaboradores)
            })
            .catch(error => {
                console.log(error)
            })
    }

    function alterarCliente(value) {
        api.put(`clientes/${id}`, value)
            .then(response => {
                history.push("/parametrizacoes/clientes")
            })
            .catch(error => {
                console.log(error)
            })
    }

    function submeterParaAlteracao(e) {
        const novaAlteracao = {
            descricao: descricao,
            tipo: tipo,
            colaboradores: colaboradores
        }
        alterarCliente(novaAlteracao)
        //AlterarCliente(id)
        e.preventDefault()
    }

    function handleDescricaoChange(e) {
        setDescricao(e.target.value)
    }

    function handleTipoChange(e) {
        setTipo(e.target.value)
    }

    function handleColaboradoresChange(e) {
        setColaboradores(e.target.value)
    }

    function voltar() {
        return '/parametrizacoes/clientes'
    }

    return (
        <Main titlePage="Clientes">
            <div className="row">
                <div className="col-md-6">
                    <Breadcrumb
                        lista={lista}
                    />
                </div>
            </div>
            <div className="form">
                <div className="row">
                    <div className="col-md-10 order-md-1">
                        <form onSubmit={submeterParaAlteracao}>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <ItemForm
                                        label="Descrição"
                                        name="descricao"
                                        type="text"
                                        value={descricao}
                                        onChange={handleDescricaoChange}
                                    />
                                </div>

                                <div className="col-md-3 mb-3">
                                    <Combobox
                                        label="Tipo"
                                        name="tipo"
                                        lista={tipos}
                                        value={tipo}
                                        onChange={handleTipoChange}
                                    />
                                </div>

                                <div className="col-md-4 mb-3">
                                    <ItemForm
                                        label="Qtde Colaboradores"
                                        name="colaboradores"
                                        type="number"
                                        value={colaboradores}
                                        onChange={handleColaboradoresChange}
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
                    </div>
                </div>
                <hr className="featurette-divider" />
            </div>
        </Main >
    );
};


export default AlterarCliente;
