function some(a: number, b: number) {
    return a + b;
}

console.log(some(1,4))
console.log(some(1, '2'))

// types


// interfaces
interface Animal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
}

interface Felinos extends Animal {
    visaoNoturna: boolean;
}

const animal: Animal = {
    nome: 'Elefante',
    tipo: 'terrestre'
}

const gatenhos: Felinos = {
    nome: 'gato',
    tipo: 'terrestre',
    visaoNoturna: true,
}
