import React, { useState } from 'react';
import Main from '../../Components/Main'
import Breadcrumb from '../../Components/Breadcrumb'
import ItemForm from '../../Components/ItemForm'
import Combobox from '../../Components/Combobox'
import { tipos } from '../../Utils/mocks/mockTipos'
import { useHistory } from 'react-router-dom'
import api from '../../Utils/api'
import ButtonIcon from '../../Components/ButtonIcon'
import { notification } from 'antd'

const NovoCliente = () => {

    const [cliente, setCliente] = useState('')
    const [duplicado, setDuplicado] = useState(false)

    let history = useHistory()

    //console.log(cliente)

    notification.config({
        bottom: 50,
        duration: 1.8
    })

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
            descricao: "Novo cliente",
            current: 'page',
            ativo: "active"
        },
    ]

    function cadastrarCliente(value) {
        api.post('clientes', value)
            .then(response => {
                notification.success({
                    message: 'Sucesso!',
                    description: "Cliente cadastro com sucesso!"
                })
                history.push('/parametrizacoes/clientes')
            })
            .catch(response => {
                console.log("Cliente já cadastrado na base!")
            })
    }

    function valideDuplicidade(value) {
        api.get(`clientes/?descricao=${value.descricao.toUpperCase()}`)
            .then(response => {
                const dados = response.data
                if (dados.lenght > 0) {
                    return true
                }
                else {
                    return false
                }
            })
    }

    function submeterCliente(e) {
        cadastrarCliente(cliente)
        e.preventDefault()
    }

    function handleChange(e) {
        const auxCliente = { ...cliente }
        if (e.target.name === "descricao") {
            auxCliente[e.target.name] = e.target.value.toUpperCase()
        } else {
            auxCliente[e.target.name] = e.target.value
        }
        setCliente(auxCliente)
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
                        <form onSubmit={submeterCliente}>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <ItemForm
                                        label="Descrição"
                                        value={cliente.descricao}
                                        name="descricao"
                                        type="text"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="col-md-3 mb-3">
                                    <Combobox
                                        label="Tipo"
                                        name="tipo"
                                        lista={tipos}
                                        value={cliente.tipo}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="col-md-4 mb-3">
                                    <ItemForm
                                        label="Qtde Colaboradores"
                                        value={cliente.colaboradores}
                                        name="colaboradores"
                                        type="number"
                                        onChange={handleChange}
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

export default NovoCliente;
