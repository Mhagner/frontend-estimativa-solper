function zeroFill(n){
    return ('0' + n).slice(-2);
}

function obtemDataAtual() {
    let now = new Date()
    let data = zeroFill(now.getDate()) + '/' + zeroFill(now.getMonth() + 1) + '/' + now.getFullYear()
    return data
}

export const steps = [
    { id: "escope" },
    { id: "estimate" },
    { id: "outher" },
    { id: "maintenance" },
    { id: "overview" }
  
];

export const defaultData = {
    responsavelEscopo: "",
    responsavelEstimativa: "",
    data: obtemDataAtual(),
    cliente: "",
    numeroDaOportunidade: "",
    descricaoDaOportunidade: "",
    horasLider: 0,
    reuniaoLider: 0,
    apropriacaoTime: 0,
    reunioesDiaria: 0,
    gcs: 0,
    preparacaoAmbiente: 0,
    elaboracaoEscopo: 0,
    homologacao: 0,
    posGoLive: 0,
    treinamento: 0,
    gp: 0,
    valorHora: 0,
    custoInfra: "798",
    custoMensal: 0,
    dados: [],
    dadosResumo: [
        {
            atividades: 'Especificação técnica',
            horas: 0
        },
        {
            atividades: 'Implementação e testes',
            horas: 0
        },
        {
            atividades: 'Implantação/homologação',
            horas: 0
        },
        {
            atividades: 'Acompanhamento pós GO-live',
            horas: 0
        },
        {
            atividades: 'Treinamento',
            horas: 0
        },
        {
            atividades: 'Gerenciamento do projeto',
            horas: 0
        }
    ]
};

export const custoInfraDefault = 0