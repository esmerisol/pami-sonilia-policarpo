function countCharacter(id) {
    let str = window.prompt('Digite uma palavra:');
    let character = window.prompt('Digite o caractere a ser contado:');
    let count = 0;
    for (let char of str) {
        if (char === character) {
            count++;
        }
    }
    document.getElementById(id).innerHTML = `O caractere "${character}" aparece -> ${count} vezes`;
}