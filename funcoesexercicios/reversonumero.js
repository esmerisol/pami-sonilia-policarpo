function reverseNumber(id) {
    let number = window.prompt('Digite um número:');
    let reversed = number.split('').reverse().join('');
    document.getElementById(id).innerHTML = "Número invertido -> " + reversed;
}