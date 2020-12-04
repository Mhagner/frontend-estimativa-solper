import React, { useEffect, useState } from 'react';
import { Spin } from 'antd'
import Main from '../../Components/Main'
import Breadcrumb from '../../Components/Breadcrumb'
import CardForm from '../../Components/CardForm'
import { useParams, useHistory, Link } from 'react-router-dom'
import api from '../../Utils/api'
import ButtonIcon from '../../Components/ButtonIcon'

const ClienteDetalhe = () => {

    const [details, setDetails] = useState('')
    const [loader, setLoader] = useState(false)

    let history = useHistory()
    let { id } = useParams()
    // let match = match()

    useEffect(() => {
        getCliente()
    }, [])

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
        setLoader(true)
        api.get(`clientes/${id}`)
            .then(response => {
                setDetails(response.data)
                setLoader(false)
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
        return '/parametrizacoes/clientes'
    }

    function alterar() {
        return `/parametrizacoes/clientes/alterar-cliente/${details._id}`
    }

    return (
        <Main titlePage="Detalhe">
            <CardForm>
                <div className="row">
                    <div className="col-md-6">
                        <Spin spinning={loader}>
                            <Breadcrumb
                                lista={lista}
                            />
                        </Spin>
                    </div>
                </div>
                <div className="form">
                    <div className="row">
                        <div className="col-md-10 order-md-1">
                            <form>
                                <div className="row">
                                    <div className="col-md-12">
                                        <Spin spinning={loader}>
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
                                        </Spin>
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
                                        route={alterar(id)}
                                        color="success">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                        </svg>
                                    </ButtonIcon>
                                    {/*  <div className="col-md-2">
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
                                    </div> */}
                                    <ButtonIcon
                                        size={2}
                                        handlerClick={() => deleteCliente(id)}
                                        color="danger">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                        </svg>
                                    </ButtonIcon>
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
