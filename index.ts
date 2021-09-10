const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
    const digitou = event.currentTarget as HTMLInputElement;
    console.log(digitou.value)
})

// Generic Types

function preencheLista<T>(array: T[], valor: T) {
    return array.map(() => valor);
}

preencheLista([1, 2, 3], 4);

// T pode ser qualquer tipo (any)