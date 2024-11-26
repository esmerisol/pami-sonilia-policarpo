function isPrime(id) {
    let number = parseInt(window.prompt('Digite um número:'));
    let prime = number > 1;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            prime = false;
            break;
        }
    }
    document.getElementById(id).innerHTML = prime ? "O número é primo" : "O número não é primo";
}