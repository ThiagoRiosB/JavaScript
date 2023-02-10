let menu = ''
let lista = []

while (menu !== '3') {
  let paciente = ''
  for (i = 0;i < lista.length; i++){
    paciente += `${i + 1}º ${lista[i]}\n`
  }
  menu = prompt(`Próximos pacientes:\n${paciente}.\nEscolha uma das opções:
  1. Adicionar paciente.
  2. Realizar consulta
  3. Sair`)
  switch(menu){
    case '1':
      let nome = prompt('Qual o nome do paciente?')
      lista.push(nome)
      break
      case '2':
      let remover = lista.shift()
      if (remover){
      alert(`O paciente ${remover} saiu do sistema.`)
      } else {
        alert('Não há pacientes no sistema.')
      }
      
      break
      case '3':
      alert('Opção encerrar sistema.')
      alert('Encerrando')
      break
      default:
      alert('Opção inválida')
  }
}