function fahrenheitToCelsius(id) {
    let fahrenheit = window.prompt('Digite a temperatura em Fahrenheit:');
    let celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById(id).innerHTML = "A temperatura em Celsius é -> " + celsius.toFixed(2);
}