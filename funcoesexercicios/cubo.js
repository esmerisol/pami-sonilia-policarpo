function cube(id) {
    let number = window.prompt('Digite um número:');
    let result = number ** 3;
    document.getElementById(id).innerHTML = "O cubo do número é -> " + result;
}