import React from 'react';
import Main from '../../Components/Main'
import Breadcrumb from '../../Components/Breadcrumb'
import ItemForm from '../../Components/ItemForm'
import Combobox from '../../Components/Combobox'
import { tipos } from '../../Utils/mocks/mockTipos'
import { useHistory } from 'react-router-dom'
import useForm from '../../Utils/hooks/useForm'
import api from '../../Utils/api'

const NovoCliente = () => {
    const [{ values }, reset, handleChange, handleSubmit] = useForm();

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
            descricao: "Novo cliente",
            current: 'page',
            ativo: "active"
        },
    ]

    function cadastrarCliente(e) {
        api.post('clientes', values)
            .then(response => {
                reset()
                history.push('/parametrizacoes/clientes')
            })
            .catch(response => {
                console.log("Cliente já cadastrado na base!")
            })
    }

    function cancelarCadastro() {
        reset()
        history.push('/parametrizacoes/clientes')
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
                        <form onSubmit={handleSubmit(cadastrarCliente)}>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <ItemForm
                                        label="Descrição"
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
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="col-md-4 mb-3">
                                    <ItemForm
                                        label="Qtde Colaboradores"
                                        name="colaboradores"
                                        type="number"
                                        onChange={handleChange}
                                    />
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                    <button
                                        type="submit"
                                        className="btn btn-success">
                                        Salvar
                                        </button>
                                </div>
                                <div className="col-md-2">
                                    <button
                                        type="button"
                                        onClick={() => cancelarCadastro()}
                                        className="btn btn-info">
                                        Cancelar
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
