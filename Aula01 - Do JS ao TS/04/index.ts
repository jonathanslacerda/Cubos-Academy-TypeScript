const cidades: string[] = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const validadorCidades = (cidade: string[]): string[] => {

    const resultado: string[] = cidade.filter((lugar) => {
        return lugar.length <= 8
    })
   
    return resultado
}

console.log(validadorCidades(cidades))