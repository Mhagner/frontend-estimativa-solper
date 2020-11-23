import React, { useState, useEffect } from 'react';
import Main from '../../Components/Main'
import Breadcrumb from '../../Components/Breadcrumb'
import ItemForm from '../../Components/ItemForm'
import Combobox from '../../Components/Combobox'
import { tipos } from '../../Utils/mocks/mockTipos'
import { useHistory, useParams, Link } from 'react-router-dom'
import api from '../../Utils/api'



const AlterarEstimativa = () => {

    let { id } = useParams()

    /* useEffect(() => {
        getCliente()
    }, []) */

    let history = useHistory()

    /* const lista = [
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
    ] */

    /* function getCliente() {
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

    function alterarCliente(value){
        api.put(`clientes/${id}`, value)
            .then(response => {
                history.push("/parametrizacoes/clientes")
            })
            .catch(error => {
                console.log(error)
            })
    } */

   /*  function submeterParaAlteracao(e) {
        const novaAlteracao = {
            descricao: descricao,
            tipo: tipo,
            colaboradores: colaboradores
        }
        alterarCliente(novaAlteracao)
        //AlterarCliente(id)
        e.preventDefault()
    } */

    function cancelarCadastro() {
        history.push('/estimativas')
    }

    return (
        <Main titlePage="Estimativa">
            {/* <div className="row">
                <div className="col-md-6">
                    <Breadcrumb
                        lista={lista}
                    />
                </div>
            </div> */}
            <div className="form">
                <div className="row">
                    <div className="col-md-10 order-md-1">
                        <form>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <ItemForm
                                        label="Descrição"
                                        name="descricao"
                                        type="text"
                                        /* value={descricao}
                                        onChange={handleDescricaoChange} */
                                    />
                                </div>

                                <div className="col-md-3 mb-3">
                                    <Combobox
                                        label="Tipo"
                                        name="tipo"
                                        lista={tipos}
                                       /* value={tipo}
                                        onChange={handleTipoChange} */
                                    />
                                </div>

                                <div className="col-md-4 mb-3">
                                    <ItemForm
                                        label="Qtde Colaboradores"
                                        name="colaboradores"
                                        type="number"
                                       /* value={colaboradores}
                                        onChange={handleColaboradoresChange} */
                                    />
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                    <button
                                        type="button"
                                        onClick={() => cancelarCadastro()}
                                        className="btn btn-info">
                                        Cancelar
                                        </button>
                                </div>
                                <div className="col-md-2">
                                    <button
                                        type="submit"
                                        className="btn btn-success">
                                        Alterar
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


export default AlterarEstimativa;
