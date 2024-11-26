function circle(id) {
    let radius = window.prompt('Digite o raio do círculo:');
    const area = Math.PI * radius ** 2;
    const perimeter = 2 * Math.PI * radius;
    document.getElementById(id).innerHTML = `Área: ${area.toFixed(2)}, Perímetro: ${perimeter.toFixed(2)}`;
}