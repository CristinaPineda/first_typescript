function some(a: number, b: number) {
    return a + b;
}

console.log(some(1,4))
console.log(some(1, '2'))

// ------------------------------------------------------------------

// types


// interfaces
interface Animal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    som(decibeis: number): void;
}

interface Felinos extends Animal {
    visaoNoturna: boolean;
}

const animal: Animal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    som: (decibeis) => (`${decibeis}db`)
}

animal.som('1');
animal.som(3);

const gatenhos: Felinos = {
    nome: 'gato',
    tipo: 'terrestre',
    visaoNoturna: true,
    som: (decibeis) => (`${decibeis}db`)
}

gatenhos.som('1');
gatenhos.som(3);
