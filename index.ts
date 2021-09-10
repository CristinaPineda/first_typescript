interface Cachorro {
    readonly nome: string;
    readonly idade: number;
    readonly parqueFavorito?: string; 
}

type SomenteLeitura = {
    +readonly [K in keyof Cachorro]-?: Cachorro[K]
}

class MeuCachorro implements SomenteLeitura {
    idade;
    nome;
    parqueFavorito;


    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Apolo', 14);