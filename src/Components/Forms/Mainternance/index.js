import React, { useState, useEffect } from "react";
import { Steps, notification } from 'antd'
import ButtonStep from '../../ButtonStep'
import CardForm from '../../CardForm'
import Card from '../../Card'
import ItemForm from '../../ItemForm'
import RadioButton from '../../RadioButton'
import { calculaTotalManutencao, calculaColuna } from '../../../Utils/metodos'
//import { servidores } from '../../../Utils/mocks/mockCustoServidores'
import api from '../../../Utils/api'
import { LoadingOutlined, SolutionOutlined, EyeOutlined, CalculatorOutlined, AppstoreAddOutlined } from '@ant-design/icons';



const defaultData = {
    data: '',
    ativo: true,
    servidores: []
}


const Mainternance = ({ setForm, formData, navigation, buttonPrevious, buttonNext }) => {
    const { numeroDaOportunidade, cliente, valorHora, custoInfra, dados, descricaoDaOportunidade } = formData;

    const { previous, next } = navigation;

    const [infra, setInfra] = useState(defaultData)

    const { Step } = Steps

    notification.config({
        bottom: 50,
        duration: 2
    })


    useEffect(() => {
        obtenhaServidores()
    }, [])

    function obtenhaServidores() {
        api.get('infra/5f237bd6e9c53a22a8a9edf9')
            .then(response => {
                setInfra(response.data)
            })
            .catch(err => {
                console.log("Erro ao tentar obter os servidores nuvem!")
            })
    }

    const totalManutenção = calculaTotalManutencao(dados, calculaColuna, valorHora, 0.01)

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
                                    <Step status="process" title="Manutenção" icon={<LoadingOutlined />} />
                                    <Step status="wait" title="Resumo" icon={<EyeOutlined />} />
                                </Steps>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <Card title="Manutenção mensal de customizados">
                                    <div className="col-md-8 mb-3">
                                        <ItemForm
                                            label="Valor Hora do cliente"
                                            type="text"
                                            name="valorHora"
                                            value={valorHora}
                                            onChange={setForm}
                                        />
                                    </div>
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
                                </Card>
                            </div>
                            <div className="col-md-6 mb-3">
                                <Card title="Custo de infraestrutura nuvem">
                                    <div className="col-md-12 mb-3">
                                        {infra.servidores.map((servidor) => (
                                            <div className="row" key={servidor._id}>
                                                <RadioButton
                                                    label={`${servidor.instancia} | ${servidor.cpu} | ${servidor.ram} | ${servidor.custo}`}
                                                    value={servidor.custo}
                                                    checked={custoInfra === servidor.custo}
                                                    onChange={setForm}
                                                    name="custoInfra"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="col-md-8 mb-3">
                                        <div className="row">
                                            <ItemForm
                                                label="Custo infra mensal"
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
                            <ButtonStep
                                colorPrevious={buttonPrevious}
                                colorNext={buttonNext}
                                funcPrevious={previous}
                                funcNext={next}
                                buttonPrevious="Voltar"
                                buttonNext="Próximo"
                            />
                        </div>
                    </CardForm>
                </div>
            </div>
        </div >
    );
};

export default Mainternance;
