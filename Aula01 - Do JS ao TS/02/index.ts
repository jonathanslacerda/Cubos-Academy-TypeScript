const buscarLivro = (nome: string, livros: string[]): string => {

    const indice: number = livros.indexOf(nome);

    if (indice === -1) {
        return 'Livro não encontrado'
    } 

    return `Livro está na posição ${indice + 1}`
    

}

const livros: string[] = [
    "Guerra e Paz",
    "A Montanha Mágica",
    "Cem Anos de Solidão",
    "Dom Quixote",
    "A Divina Comédia",
]

const nome: string = "A Montanha Mágica"

console.log(buscarLivro(nome, livros))