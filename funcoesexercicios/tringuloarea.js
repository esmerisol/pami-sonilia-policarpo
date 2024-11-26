function triangleArea(id) {
    let base = window.prompt('Digite a base do triângulo:');
    let height = window.prompt('Digite a altura do triângulo:');
    let area = (base * height) / 2;
    document.getElementById(id).innerHTML = "A área do triângulo é -> " + area;
}