import React from "react";

import TableResume from '../../TableResume'
import CardForm from '../../CardForm'
import Card from '../../Card'
import ItemForm from '../../ItemForm'
import { calculaTotalManutencao, calculaColuna } from '../../../Utils/metodos'

const Overview = ({ setForm, formData, navigation, buttonPrevious }) => {
    const {
        numeroDaOportunidade,
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


    const totalManutenção = calculaTotalManutencao(dados, calculaColuna, valorHora, 0.01)

    return (
        <div className="form">
            <div className="row">
                <div className="col-md-12 order-md-1">
                    <CardForm titleCard={`Resumo da estimativa - OPP: ${numeroDaOportunidade} - ${cliente}`}>
                        <form className="needs-validation">
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
                                <div className="col-md-6 mb-3">
                                    <Card>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <button type="button" className="btn btn-success btn-block">Salvar</button>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <button type="button" className="btn btn-primary btn-block">Exportar</button>
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
