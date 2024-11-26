function calculateInvestment(id) {
    let capital = parseFloat(window.prompt('Digite o capital inicial:'));
    let rate = parseFloat(window.prompt('Digite a taxa de juros mensal (%):'));
    let time = parseInt(window.prompt('Digite o tempo em meses:'));
    let amount = capital * (1 + rate / 100) ** time;
    document.getElementById(id).innerHTML = "Montante final -> " + amount.toFixed(2);
}