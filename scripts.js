
const numeros = [3, 12, 7, 9, 1, 15, 8];

// 1. Uso do SPREAD 
const numerosComExtras = [...numeros, 20, 25];
console.log("Spread: ", numerosComExtras); 
// Saída: [3, 12, 7, 9, 1, 15, 8, 20, 25]

// 2. Método MAP - multiplicar todos os números por 2
const numerosMultiplicados = numeros.map(num => num * 2);
console.log("Map (multiplicados por 2): ", numerosMultiplicados);
// Saída: [6, 24, 14, 18, 2, 30, 16]

// 3. Método FILTER - filtrar números maiores que 8
const numerosFiltrados = numeros.filter(num => num > 8);
console.log("Filter (maiores que 8): ", numerosFiltrados);
// Saída: [12, 9, 15]

// 4. Método REDUCE - somar todos os números do array
const somaTotal = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log("Reduce (soma total): ", somaTotal);
// Saída: 55

// 5. Método SORT - ordenar os números em ordem crescente
const numerosOrdenados = [...numeros].sort((a, b) => a - b); 
console.log("Sort (ordem crescente): ", numerosOrdenados);
// Saída: [1, 3, 7, 8, 9, 12, 15]

//Comparação do array original
console.log("Array original: ", numeros);
// Saída: [3, 12, 7, 9, 1, 15, 8]
