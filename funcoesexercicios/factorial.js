function factorial(id) {
    let n = parseInt(window.prompt('Digite um número:'));
    let result = 1;
    for (let i = n; i > 1; i--) {
        result *= i;
    }
    document.getElementById(id).innerHTML = "Fatorial -> " + result;
}