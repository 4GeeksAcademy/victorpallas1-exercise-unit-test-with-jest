// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromEuroToYen = function(valueInEuro) {
    // Convertimos el valor a Yem
    let valueInYen = valueInEuro * 156.5;
    // Retornamos el valor en Yem
    return valueInYen;
}

const fromYenToPoud = function(valueInEuro) {
    let valueInPound = valueInEuro * 0.87;
}

const sum =(a,b) => {
    return a + b
}

console.log(sum(7,3))

module.exports = {sum, fromEuroToDollar, fromEuroToYen, fromYenToPoud};