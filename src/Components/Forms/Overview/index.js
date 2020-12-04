import React from "react";
import { PDFViewer } from '@react-pdf/renderer'
import { Steps, notification } from 'antd'
import TableResume from '../../TableResume'
import CardForm from '../../CardForm'
import Card from '../../Card'
import ItemForm from '../../ItemForm'
import { calculaTotalManutencao, calculaColuna } from '../../../Utils/metodos'
import { useHistory, Link } from 'react-router-dom'
import api from '../../../Utils/api'
import { LoadingOutlined, SolutionOutlined, AppstoreAddOutlined, CalculatorOutlined, AlertOutlined } from '@ant-design/icons';

const Overview = ({ setForm, formData, navigation, buttonPrevious }) => {
    const {
        numeroDaOportunidade,
        descricaoDaOportunidade,
        cliente,
        dados,
        dadosResumo,
        homologacao,
        posGoLive,
        treinamento,
        horasLider,
        reuniaoLider,
        apropriacaoTime,
        reunioesDiaria,
        gcs,
        preparacaoAmbiente,
        elaboracaoEscopo,
        gp,
        valorHora,
        custoInfra
    } = formData;

    const { previous } = navigation;

    const history = useHistory()

    const { Step } = Steps

    notification.config({
        bottom: 50,
        duration: 2
    })

    const totalManutenção = calculaTotalManutencao(dados, calculaColuna, valorHora, 0.01)

    function salvar(estimativa) {
        api.post('estimativas', estimativa)
            .then(response => {
                history.push("/estimativas")
            })
            .catch(error => {
                console.log("Deu ruim!")
            })
    }

    function submeterEstimativa(e) {
        const dados = formData
        salvar(dados)
        e.preventDefault()
    }

    return (
        <div className="form">
            <div className="row">
                <div className="col-md-12 order-md-1">
                    <CardForm titleCard={`${numeroDaOportunidade} - ${cliente} - ${descricaoDaOportunidade}`}>
                        <div className="row">
                            <div className="col-md-12 mb-5">
                                <Steps>
                                    <Step status="finish" title="Oportunidade" icon={<SolutionOutlined />} />
                                    <Step status="finish" title="Estimativa principal" icon={<CalculatorOutlined />} />
                                    <Step status="finish" title="Outras estimativas" icon={<AppstoreAddOutlined />} />
                                    <Step status="finish" title="Manutenção" icon={<AlertOutlined />} />
                                    <Step status="process" title="Resumo" icon={<LoadingOutlined />} />
                                </Steps>
                            </div>
                        </div>
                        <form className="needs-validation" onSubmit={submeterEstimativa}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <TableResume
                                        dados={dados}
                                        dadosResumo={dadosResumo}
                                        gp={gp}
                                        homologacao={homologacao}
                                        posGoLive={posGoLive}
                                        treinamento={treinamento}
                                        horasLider={horasLider}
                                        reuniaoLider={reuniaoLider}
                                        apropriacaoTime={apropriacaoTime}
                                        reunioesDiaria={reunioesDiaria}
                                        gcs={gcs}
                                        preparacaoAmbiente={preparacaoAmbiente}
                                        elaboracaoEscopo={elaboracaoEscopo}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <Card>
                                        <div className="row">
                                            <div className="col-md-8 mb-3">
                                                <ItemForm
                                                    label="Custo de manutenção mensal"
                                                    type="text"
                                                    name="custoMensal"
                                                    value={`R$ ${totalManutenção}`}
                                                    onChange={setForm}
                                                    readonly="readonly"
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-8 mb-3">
                                                <ItemForm
                                                    label="Custo de infraestrura nuvem"
                                                    type="text"
                                                    name="custoInfra"
                                                    value={`R$ ${custoInfra}`}
                                                    readonly="readonly"
                                                />
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <Card>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <button type="submit" className="btn btn-success btn-block">Salvar</button>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <Link to={'/estimativas'} className="btn btn-secondary btn-block">Cancelar</Link>
                                            </div>
                                        </div>
                                        {/*  <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <button type="button" className="btn btn-secondary btn-block">Macro cronograma</button>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <button type="button" className="btn btn-danger btn-block">Resumo por item</button>
                                            </div>
                                        </div> */}
                                    </Card>
                                </div>
                            </div>
                            <div className="row">
                                <div className="btn-group col-md-12 mb-1">
                                    <button
                                        className={`btn btn-${buttonPrevious}`}
                                        onClick={previous}>Voltar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </CardForm>
                </div>
            </div>
        </div >
    );
};

export default Overview;
