import React, { useEffect, useState } from 'react';
import Main from '../../Components/Main'
import Breadcrumb from '../../Components/Breadcrumb'
import CardForm from '../../Components/CardForm'
import { useParams, useHistory, Link } from 'react-router-dom'
import api from '../../Utils/api'

const ClienteDetalhe = () => {

    const [details, setDetails] = useState('')

    let history = useHistory()
    let { id } = useParams()
    // let match = match()

    useEffect(() => {
        getCliente()
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
            descricao: `${details.descricao}`,
            current: 'page',
            ativo: "active"
        },
    ]

    function getCliente() {
        api.get(`clientes/${id}`)
            .then(response => {
                setDetails(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    function deleteCliente(id) {
        api.delete(`clientes/${id}`)
            .then(response => {
                history.push("/parametrizacoes/clientes")
            })
            .catch(error => {
                console.log("deu ruim!")
            })
    }

    function voltar() {
        history.push('/parametrizacoes/clientes')
    }

    function alterar(){
        return `/parametrizacoes/clientes/alterar-cliente/${details._id}`
    }

    return (
        <Main titlePage="Detalhe">
            <CardForm>
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
                            <form>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div class="jumbotron">
                                            <dl class="row">
                                                <dt class="col-sm-3">Cliente</dt>
                                                <dd class="col-sm-9">{details.descricao}</dd>

                                                <dt class="col-sm-3">Tipo</dt>
                                                <dd class="col-sm-9">{details.tipo}</dd>

                                                <dt class="col-sm-3">Colaboradores</dt>
                                                <dd class="col-sm-9">{details.colaboradores}</dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2">
                                        <button
                                            type="button"
                                            onClick={() => voltar()}
                                            className="btn btn-info">
                                            Voltar
                                        </button>
                                    </div>
                                    <div className="col-md-2">
                                        <Link
                                            to={alterar()}
                                            className="btn btn-primary">
                                            Editar
                                        </Link>
                                    </div>
                                    <div className="col-md-2">
                                        <button
                                            type="button"
                                            onClick={() => deleteCliente(id)}
                                            className="btn btn-danger">
                                            Excluir
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <hr className="featurette-divider" />
                </div>
            </CardForm>

        </Main >
    );
};


export default ClienteDetalhe;
