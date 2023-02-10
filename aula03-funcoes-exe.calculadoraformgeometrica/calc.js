function calcularAreaTriangulo() {
  const base = prompt('Informe a base do triângulo:')
  const altura = prompt('Informe a altura do triângulo:')
  return base * altura / 2
}
function calcularAreaRetangulo() {
  const base = prompt('Informe a base do retângulo:')
  const altura = prompt('Informe a altura do retângulo:')
  return base * altura
}
function calcularQuadrado() {
  const lado = prompt('Informe o lado do quadrado:')
  return lado * lado
}
function calCularAreaTrapezio() {
  const basemaior = parseFloat(prompt('Informe a base maior do trapezio:'))
  const basemenor = parseFloat(prompt('Informe a base menor do trapezio:'))
  const altura = parseFloat(prompt('Informe a altura do trapezio:'))
  return (basemaior + basemenor) * altura / 2
}
function calcularCirculo() {
  const raio = prompt('Informe o raio do circulo:')
  return  (3.14 * raio * raio)
}
function exibirMenu() {
  return prompt(`Calculadora Geométrica:
  1. Calcular área do triângulo.
  2. Calcular área do retângulo.
  3. Calcular área do quadrado.
  4. Calcular área do trapézio.
  5. Calcular circulo. 
  6. Sair.`)
}
function executar() {
  let opcao = ''
  while (opcao !== '6') {
  opcao = exibirMenu()
  let resultado
  switch (opcao) {
    case '1':
      resultado = calcularAreaTriangulo()
    break;
    case '2':
      resultado = calcularAreaRetangulo()
    case '3':
    resultado = calcularQuadrado()
    break;
    case '4':
    resultado = calCularAreaTrapezio()
    break;
    case '5':
    resultado = calcularCirculo()
    break;
    case '6':
      alert('Você escolheu a opção sair.')
      alert('Fechando o sistema')
    break;
    default:
      alert('Opção inválida')
  }
  if(resultado) {
    alert(`Resultado: ${resultado}`)
  }
  }
}
executar()