export function calculaTotalManutencao(array, funcao, valor, percentual) {
    const req = funcao(array, 'sumRequisito')
    const dev = funcao(array, 'sumDesenvolvimento')
    const teste = funcao(array, 'sumTestes')
    const total = req + dev + teste
    const resultado = (total * valor) * percentual

    return resultado.toFixed(2)
}

export function calculaColuna(array, item) {
    const req = array.map(dado => (
        dado[item]
    ))
    const sumDados = req.reduce((acc, item) => acc + item, 0)
    return sumDados
}