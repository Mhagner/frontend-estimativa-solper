import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../Components/Breadcrumb'
import BootstrapTable from 'react-bootstrap-table-next'
import CardForm from '../../Components/CardForm'
import { useParams, useHistory, Link } from 'react-router-dom'
import api from '../../Utils/api'
import { columns } from '../EstimativaDetalhe/data'
import ButtonIcon from '../../Components/ButtonIcon'

const EstimativaDetalheImpressao = () => {

    const [details, setDetails] = useState('')
    const [totalOutrasEstimativas, setTotalOutrasEstimativas] = useState(0)
    const [dados, setDados] = useState([])
    const [sumRequisito, setSumRequisito] = useState(0)
    const [sumDesenvolvimento, setSumDesenvolvimento] = useState(0)
    const [sumTestes, setSumTestes] = useState(0)
    const [sumTotal, setSumTotal] = useState(0)
    const [percentualRetrabalhoRequisito, setPercentualRetrabalhoRequisito] = useState(0.10)
    const [percentualRetrabalhoDesenvolvimento, setPercentualRetrabalhoDesenvolvimento] = useState(0.10)
    const [percentualRetrabalhoTestes, setPercentualRetrabalhoTestes] = useState(0.10)

    let history = useHistory()
    let { id } = useParams()

    useEffect(() => {
        getEstimativa()

    }, [])

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

    //console.log(details.dados.lenght)

    function getEstimativa() {
        api.get(`estimativas/${id}`)
            .then(response => {
                setDetails(response.data)
                setDados(response.data.dados)
                setSumRequisito(load(response.data.dados, 'requisito'))
                setSumDesenvolvimento(load(response.data.dados, 'desenvolvimento'))
                setSumTestes(load(response.data.dados, 'testes'))
                setSumTotal(load(response.data.dados, 'total'))
                gerarImpressao()

            })
            .catch(error => {
                console.log(error)
            })
    }

    function gerarImpressao() {
        setTimeout(() => {
            window.print()
        }, 2000)

    }

    function load(dados, item) {
        const req = dados.map(req => (
            req[item]
        ))
        const sumDado = req.reduce((acc, item) => acc + item, 0)
        return sumDado
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

    const retrabalhoRequisito = sumRequisito * percentualRetrabalhoRequisito
    const retrabalhoDesenvolvimento = sumDesenvolvimento * percentualRetrabalhoDesenvolvimento
    const retrabalhoTestes = sumTestes * percentualRetrabalhoTestes
    const retrabalhoTotal = retrabalhoRequisito + retrabalhoDesenvolvimento + retrabalhoTestes
    const totalGeralPrincipal = sumTotal + retrabalhoTotal
    const totalGeralOutras = gcs + preparacaoAmbiente + homologacao + posGoLive + elaboracaoEscopo +
        treinamento + horasLider + reuniaoLider + apropriacaoTime + reunioesDiaria
    const gp = (totalGeralPrincipal + totalGeralOutras) * 0.2
    const totalDevTestes = gcs + preparacaoAmbiente + elaboracaoEscopo + reunioesDiaria + horasLider +
        reuniaoLider + apropriacaoTime + sumDesenvolvimento + sumTestes + retrabalhoDesenvolvimento +
        retrabalhoTestes
    const totalGeral = totalGeralPrincipal + totalGeralOutras + gp


    return (
        <CardForm titleCard={`Estimativa - ${numeroDaOportunidade} - ${cliente} - ${descricaoDaOportunidade}`}>
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
                                            <dt className="col-sm-6 text_details">Oportunidade</dt>
                                        </dl>
                                        <dl class="row">
                                            <dt className="col-sm-3 text-left">Data:</dt>
                                            <dd class="col-sm-3">{data}</dd>
                                        </dl>
                                        <dl class="row">
                                            <dt class="col-sm-3 text-left">Oportunidade:</dt>
                                            <dd class="col-sm-9">{`${numeroDaOportunidade} - ${cliente} - ${descricaoDaOportunidade}`}</dd>
                                        </dl>
                                        <dl class="row">
                                            <dt class="col-sm-3 text-left">Resp. escopo:</dt>
                                            <dd class="col-sm-3">{responsavelEscopo}</dd>
                                            <dt class="col-sm-3 text-left">Resp. estimativa:</dt>
                                            <dd class="col-sm-3">{responsavelEstimativa}</dd>
                                        </dl>
                                        <hr className="featurette-divider" />
                                        {/* Estimativa Principal */}
                                        <dl class="row">
                                            <dt className="col-sm-6 text_details">Estimativa Principal</dt>
                                        </dl>
                                        <div className="col-md-12 mb-3">
                                            <BootstrapTable
                                                keyField="id"
                                                wrapperClasses="borda"
                                                bootstrap4
                                                data={dados}
                                                columns={columns}
                                                striped
                                            />
                                        </div>
                                        <dl class="row">
                                            <dt className="col-sm-4 text-left">Retrabalho requisito</dt>
                                            <dd class="col-sm-3">{retrabalhoRequisito.toFixed(2)} horas</dd>
                                        </dl>
                                        <dl class="row">
                                            <dt className="col-sm-4 text-left">Retrabalho desenvolvimento</dt>
                                            <dd class="col-sm-3">{retrabalhoDesenvolvimento.toFixed(2)} horas</dd>
                                        </dl>
                                        <dl class="row">
                                            <dt className="col-sm-4 text-left">Retrabalho testes</dt>
                                            <dd class="col-sm-3">{retrabalhoTestes.toFixed(2)} horas</dd>
                                        </dl>
                                        <dl class="row">
                                            <dt className="col-sm-4 text-left text-total--blue">Total</dt>
                                            <dt class="col-sm-3 text-total--blue">{totalGeralPrincipal} horas</dt>
                                        </dl>
                                        <hr className="featurette-divider" />

                                        {/* Demais estimativas */}
                                        <dl class="row">
                                            <dt className="col-sm-6 text_details">Estimativa de Outras atividades</dt>
                                        </dl>
                                        <dl class="row">
                                            <dt class="col-sm-3 text-left">GCS</dt>
                                            <dd class="col-sm-3">{gcs} horas</dd>
                                            <dt class="col-sm-3 text-left">Prep. Ambiente:</dt>
                                            <dd class="col-sm-3">{preparacaoAmbiente} horas</dd>
                                        </dl>
                                        <dl class="row">
                                            <dt class="col-sm-3 text-left">Homol/Produção</dt>
                                            <dd class="col-sm-3">{homologacao} horas</dd>
                                            <dt class="col-sm-3 text-left">Pós GO-live:</dt>
                                            <dd class="col-sm-3">{posGoLive} horas</dd>
                                        </dl>
                                        <dl class="row">
                                            <dt class="col-sm-3 text-left">Elab. do escopo</dt>
                                            <dd class="col-sm-3">{elaboracaoEscopo} horas</dd>
                                            <dt class="col-sm-3 text-left">Treinamento:</dt>
                                            <dd class="col-sm-3">{treinamento} horas</dd>
                                        </dl>
                                        <dl class="row">
                                            <dt class="col-sm-3 text-left">GP Líder</dt>
                                            <dd class="col-sm-3">{horasLider} horas</dd>
                                            <dt class="col-sm-3 text-left">Reuniões líder:</dt>
                                            <dd class="col-sm-3">{reuniaoLider} horas</dd>
                                        </dl> <dl class="row">
                                            <dt class="col-sm-3 text-left">Aprop. de horas</dt>
                                            <dd class="col-sm-3">{apropriacaoTime} horas</dd>
                                            <dt class="col-sm-3 text-left">Reunião diária:</dt>
                                            <dd class="col-sm-3">{reunioesDiaria} horas</dd>
                                        </dl>
                                        <dl class="row">
                                            <dt className="col-sm-4 text-left text-total--blue">Total</dt>
                                            <dt class="col-sm-3 text-total--blue">{totalGeralOutras} horas</dt>
                                        </dl>
                                        <hr className="featurette-divider" />
                                        {/* Resumo Salesforce*/}
                                        <dl class="row">
                                            <dt className="col-sm-6 text_details">Resumo para o Salesforce</dt>
                                        </dl>
                                        <dl class="row">
                                            <dt class="col-sm-4 text-left">Elaboração da especificação: </dt>
                                            <dd class="col-sm-4">{sumRequisito + retrabalhoRequisito} horas</dd>
                                        </dl>
                                        <dl class="row">
                                            <dt class="col-sm-4 text-left">Desenvolvimento e testes: </dt>
                                            <dd class="col-sm-4">{totalDevTestes} horas</dd>
                                        </dl>
                                        <dl class="row">
                                            <dt class="col-sm-4 text-left">Treinamento: </dt>
                                            <dd class="col-sm-4">{treinamento} horas</dd>
                                        </dl>
                                        <dl class="row">
                                            <dt class="col-sm-4 text-left">Suporte a implantação: </dt>
                                            <dd class="col-sm-4">{homologacao} horas</dd>
                                        </dl>
                                        <dl class="row">
                                            <dt class="col-sm-4 text-left">Acompanhamento pós GO-live: </dt>
                                            <dd class="col-sm-4">{posGoLive} horas</dd>
                                        </dl>
                                        <dl class="row">
                                            <dt class="col-sm-4 text-left">Gerenciamento do projeto: </dt>
                                            <dd class="col-sm-4">{gp.toFixed(2)} horas</dd>
                                        </dl>
                                        <hr className="featurette-divider" />
                                        <dl class="row">
                                            <dt className="col-sm-4 text-total dark-blue">Total de horas do projeto</dt>
                                            <dt class="col-sm-3 text-total dark-blue">{totalGeral} horas</dt>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <ButtonIcon
                                    size={2}
                                    route={`/estimativas/${id}`}
                                    color="secondary">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                    </svg>
                                </ButtonIcon>
                                <ButtonIcon
                                    size={2}
                                    handlerClick={() => gerarImpressao()}
                                    color="success">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-printer" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 2H5a1 1 0 0 0-1 1v2H3V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h-1V3a1 1 0 0 0-1-1zm3 4H2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1v1H2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z" />
                                        <path fill-rule="evenodd" d="M11 9H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM5 8a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H5z" />
                                        <path d="M3 7.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                                    </svg>
                                </ButtonIcon>
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
