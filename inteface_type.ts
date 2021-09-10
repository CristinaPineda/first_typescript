function some(a: number, b: number) {
    return a + b;
}

console.log(some(1,4))
// console.log(some(1, '2'))

// ------------------------------------------------------------------

// types


// interfaces
interface Animal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    som(decibeis: number): void;
    domestico: boolean;
}

interface Felinos extends Animal {
    visaoNoturna: boolean;
}

interface Canino extends Animal {
    porte: 'pequeno' | 'medio' | 'grande';
}

type Domestico = Felinos | Canino;

const animal: Animal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    som: (decibeis) => (`${decibeis}db`),
    domestico: false,
}

// animal.som('1');
animal.som(3);

const gatenhos: Felinos = {
    nome: 'gato',
    tipo: 'terrestre',
    visaoNoturna: true,
    som: (decibeis) => (`${decibeis}db`),
    domestico: true,
}

// gatenhos.som('1');
gatenhos.som(3);

const bicho: Domestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'pequeno',
    tipo: 'terrestre',
    som: (decibeis) => (`${decibeis}db`),
    // visaoNoturna: true,  
}