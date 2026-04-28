var words = ['casa', 'carro', 'bicicleta', 'avião'];
var capitalizeWords = words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
});

console.log(capitalizeWords);