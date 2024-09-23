const array1: number[] = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const validarNumeroPar = (array: number[]): number[] => {

    const resultado: number[] = array.filter((numero) => {
        return numero % 2 === 0
    })
   
    return resultado
}

console.log(validarNumeroPar(array1))