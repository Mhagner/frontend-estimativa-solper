import React, { useState, useEffect } from 'react';
import Main from '../../Components/Main'
import Breadcrumb from '../../Components/Breadcrumb'
import CardForm from '../../Components/CardForm'
import ItemForm from '../../Components/ItemForm'
import Combobox from '../../Components/Combobox'
import { tipos } from '../../Utils/mocks/mockTipos'
import { useHistory } from 'react-router-dom'
//import { useForm } from 'react-hooks-helper'
import useForm from '../../Utils/hooks/useForm'
import api from '../../Utils/api'
import Modal from '../../Components/Modal'

const Clientes = () => {
    const [{ values }, reset, handleChange, handleSubmit] = useForm();

    let history = useHistory()

    const lista = [
        {
            link: "/parametrizacoes",
            descricao: "parametrizações"
        },
        {
            descricao: "clientes",
            current: 'page',
            ativo: "active"
        },
    ]

    function cadastrarCliente(e) {
        //console.log(values)
        api.post('clientes', values)
        reset()
        history.push('/parametrizacoes/clientes')
        //api.post('clientes', values )
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
                                        //value={descricao}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="col-md-3 mb-3">
                                    <Combobox
                                        label="Tipo"
                                        name="tipo"
                                        //value={tipo}
                                        lista={tipos}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="col-md-4 mb-3">
                                    <ItemForm
                                        label="Qtde Colaboradores"
                                        name="colaboradores"
                                        //value={colaboradores}
                                        type="number"
                                        onChange={handleChange}
                                    />
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                    <button
                                        type="submit"
                                        className="btn btn-primary">
                                        Salvar
                                        </button>
                                </div>
                                <div className="col-md-2">
                                    <button
                                        type="button"
                                        className="btn btn-success">
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


export default Clientes;
