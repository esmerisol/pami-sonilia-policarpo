function countVowels(id) {
    let str = window.prompt('Digite uma palavra:');
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    document.getElementById(id).innerHTML = "Número de vogais -> " + count;
}