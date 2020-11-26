import React, { useEffect, useState } from 'react';
import Main from '../../Components/Main'
import Breadcrumb from '../../Components/Breadcrumb'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator';
import { options } from '../../Utils/metodos'
import { Type } from 'react-bootstrap-table2-editor'
import CardForm from '../../Components/CardForm'
import { useParams, useHistory, Link } from 'react-router-dom'
import api from '../../Utils/api'
import Loader from 'react-loader-spinner'

const EstimativaDetalheImpressao = () => {

    const [details, setDetails] = useState('')
    const [totalOutrasEstimativas, setTotalOutrasEstimativas] = useState(0)
    const [dados, setDados] = useState([])

    let history = useHistory()
    let { id } = useParams()

    useEffect(() => {
        getEstimativa()

    }, [])

    //console.log(details.dados.lenght)

    const lista = [
        {
            link: "/estimativas",
            descricao: "Estimativas"
        },
        {
            descricao: `OPP: ${details.numeroDaOportunidade}`,
            link: `/estimativas/${id}`,
            current: 'page',
            ativo: "active"
        },
    ]

    function getEstimativa() {
        api.get(`estimativas/${id}`)
            .then(response => {
                setDetails(response.data)
                setDados(response.data.dados)
            })
            .catch(error => {
                console.log(error)
            })
    }

    function gerarImpressao(){
        window.print()
    }

    const {
        data,
        numeroDaOportunidade,
        cliente,
        descricaoDaOportunidade,
        responsavelEscopo,
        responsavelEstimativa,
        gcs,
        preparacaoAmbiente,
        elaboracaoEscopo,
        homologacao,
        posGoLive,
        treinamento,
        custoInfra,
        horasLider,
        reuniaoLider,
        apropriacaoTime,
        reunioesDiaria
    } = details

    const columns = [{
        dataField: 'id',
        text: 'id',
        headerStyle: () => {
            return { width: "6%" };
        },
        align: "center",
        hidden: true
    }, {
        dataField: 'item',
        text: 'Item',
        type: 'number',
        headerStyle: () => {
            return { width: "6%" };
        },
        align: "center"
    }, {
        dataField: 'descricao',
        text: 'Descrição',
        headerStyle: () => {
            return { width: "30%" };
        }
    },
    {
        dataField: 'tipo',
        text: 'Tipo',
        headerStyle: () => {
            return { width: "30%" };
        }
    }, {
        dataField: 'requisito',
        text: 'Requisito',
        headerStyle: () => {
            return { width: "10%" };
        },
        align: "center",
        type: 'number'
    }, {
        dataField: 'desenvolvimento',
        text: 'Desenv.',
        headerStyle: () => {
            return { width: "10%" };
        },
        align: "center",
        type: 'number'
    }, {
        dataField: 'testes',
        text: 'Testes',
        headerStyle: () => {
            return { width: "10%" };
        },
        align: "center",
        type: 'number'
    }, {
        dataField: 'total',
        text: 'Total',
        headerStyle: () => {
            return { width: "10%" };
        },
        align: "center",
        type: 'number'
    }];

    const options = {
        sizePerPage: 4,
        sizePerPageList: [
            {
                text: '4', value: 4
            },
            {
                text: '6', value: 6
            }, {
                text: '10', value: 10
            }]
    }

    return (

       
            <CardForm titleCard={`${numeroDaOportunidade} - ${cliente} - ${descricaoDaOportunidade}`}>
                <div className="row">
                    <div className="col-md-6">
                        <Breadcrumb
                            lista={lista}
                        />
                    </div>
                </div>
                <div className="form">
                    <div className="row">
                        <div className="col-md-12 order-md-1">
                            <form>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div class="jumbotron">
                                            {/* Informações da oportunidade */}
                                            <dl class="row">
                                                <dt className="text_details">Oportunidade</dt>
                                            </dl>
                                            <dl class="row">
                                                <dt className="col-sm-3">Data:</dt>
                                                <dd class="col-sm-3">{data}</dd>
                                            </dl>
                                            <dl class="row">
                                                <dt class="col-sm-3">Oportunidade:</dt>
                                                <dd class="col-sm-9">{`${numeroDaOportunidade} - ${cliente} - ${descricaoDaOportunidade}`}</dd>
                                            </dl>
                                            <dl class="row">
                                                <dt class="col-sm-3">Resp. escopo:</dt>
                                                <dd class="col-sm-3">{responsavelEscopo}</dd>
                                                <dt class="col-sm-3">Resp. estimativa:</dt>
                                                <dd class="col-sm-3">{responsavelEstimativa}</dd>
                                            </dl>
                                            <hr className="featurette-divider" />
                                            {/* Estimativa Principal */}
                                            <dl class="row">
                                                <dt className="text_details">Estimativa Principal</dt>
                                            </dl>
                                            <div className="col-md-12 mb-3">
                                                <BootstrapTable
                                                    keyField="id"
                                                    bootstrap4
                                                    data={dados}
                                                    columns={columns}
                                                    //rowEvents={rowEvents}
                                                    //hover
                                                    striped
                                                    pagination={paginationFactory(options)}
                                                //cellEdit={null}
                                                />
                                            </div>
                                            <hr className="featurette-divider" />
                                            {/* Demais estimativas */}
                                            <dl class="row">
                                                <dt className="text_details">Outras atividades</dt>
                                            </dl>
                                            <dl class="row">
                                                <dt class="col-sm-3">GCS</dt>
                                                <dd class="col-sm-3">{gcs} horas</dd>
                                                <dt class="col-sm-3">Prep. Ambiente:</dt>
                                                <dd class="col-sm-3">{preparacaoAmbiente} horas</dd>
                                            </dl>
                                            <dl class="row">
                                                <dt class="col-sm-3">Homol/Produção</dt>
                                                <dd class="col-sm-3">{homologacao} horas</dd>
                                                <dt class="col-sm-3">Pós GO-live:</dt>
                                                <dd class="col-sm-3">{posGoLive} horas</dd>
                                            </dl>
                                            <dl class="row">
                                                <dt class="col-sm-3">Elab. do escopo</dt>
                                                <dd class="col-sm-3">{elaboracaoEscopo} horas</dd>
                                                <dt class="col-sm-3">Treinamento:</dt>
                                                <dd class="col-sm-3">{treinamento} horas</dd>
                                            </dl>
                                            <dl class="row">
                                                <dt class="col-sm-3">GP Líder</dt>
                                                <dd class="col-sm-3">{horasLider} horas</dd>
                                                <dt class="col-sm-3">Reuniões líder:</dt>
                                                <dd class="col-sm-3">{reuniaoLider} horas</dd>
                                            </dl> <dl class="row">
                                                <dt class="col-sm-3">Aprop. de horas</dt>
                                                <dd class="col-sm-3">{apropriacaoTime} horas</dd>
                                                <dt class="col-sm-3">Reunião diária:</dt>
                                                <dd class="col-sm-3">{reunioesDiaria} horas</dd>
                                            </dl>
                                            <hr className="featurette-divider" />
                                            {/* Resumo Salesforce*/}
                                            <dl class="row">
                                                <dt className="text_details">Resumo para o Salesforce</dt>
                                            </dl>
                                            <dl class="row">
                                                <dt class="col-sm-4">Elaboração da especificação: </dt>
                                                <dd class="col-sm-4">{apropriacaoTime} horas</dd>
                                            </dl>
                                            <dl class="row">
                                                <dt class="col-sm-4">Desenvolvimento e testes: </dt>
                                                <dd class="col-sm-4">{apropriacaoTime} horas</dd>
                                            </dl>
                                            <dl class="row">
                                                <dt class="col-sm-4">Treinamento: </dt>
                                                <dd class="col-sm-4">{apropriacaoTime} horas</dd>
                                            </dl>
                                            <dl class="row">
                                                <dt class="col-sm-4">Suporte a implantação: </dt>
                                                <dd class="col-sm-4">{apropriacaoTime} horas</dd>
                                            </dl>
                                            <dl class="row">
                                                <dt class="col-sm-4">Acompanhamento pós GO-live: </dt>
                                                <dd class="col-sm-4">{apropriacaoTime} horas</dd>
                                            </dl>
                                            <dl class="row">
                                                <dt class="col-sm-4">Gerenciamento do projeto: </dt>
                                                <dd class="col-sm-4">{apropriacaoTime} horas</dd>
                                            </dl>

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2">
                                        <Link
                                            to={`/estimativas/${id}`}
                                            className="btn btn-info">
                                            Cancelar
                                        </Link>
                                    </div>
                                    <div className="col-md-2">
                                        <button
                                            type="button"
                                            onClick={() => gerarImpressao()}
                                            className="btn btn-success">
                                            Imprimir
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <hr className="featurette-divider" />
                </div>
            </CardForm>
    );
};


export default EstimativaDetalheImpressao;
