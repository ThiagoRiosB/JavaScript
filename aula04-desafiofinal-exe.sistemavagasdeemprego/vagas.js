const vagas = []

function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice){
    textoFinal += `${indice}.`
    textoFinal += `${vaga.nome}`
    textoFinal += `(${vaga.candidatos.length} candidatos)\n`
    return textoFinal
  }, "")
  alert(vagasEmTexto)
}
function novaVaga() {
  const nome = prompt('Informe um nome para a vaga.')
  const descricao = prompt('Informe uma descrição para a vaga:')
  const dataLimite = prompt('Informe uma data limite (dd/mm/aaaa) para a vaga:')

  const confirmacao = confirm(
    `Deseja criar uma vaga com essas informações?
    Nome: ${nome}. Descrição: ${descricao}. Data Limite: ${dataLimite}.`
  )
 if (confirmacao) {
 const novaVaga = {nome, descricao, dataLimite, candidatos:[]}
 vagas.push(novaVaga)
 alert('Vaga Criada')
 }
}
 function exibirVaga() {
  const indice = prompt('Informe o índice da vaga que deseja exibir:')
  const vaga = vagas[indice]
  const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato) {
    return `${textoFinal}
    - ${candidato}`
  },"")
  alert(`Vaga nº${indice}
  Nome: ${vaga.nome}
  Descrição: ${vaga.descricao}
  Data Limite: ${vaga.dataLimite}
  Quantidade de Candidatos: ${vaga.candidatos.length}
  Candidatos em Texto${candidatosEmTexto}`)
 }

 function inscreverCandidato() {
  const candidato = prompt('informe o nome do candidato:')
  const indice = prompt('Informe o índice da vaga')
  const vaga = vagas[indice]

  const confirmacao = confirm(`Deseja inscrever o candidato ${candidato} na vaga ${indice}?
  Nome: ${vaga.nome}
  Descrição: ${vaga.descricao}
  Data Limite: ${vaga.dataLimite}`)

  if(confirmacao) {
    vaga.candidatos.push(candidato)
    alert('Inscrição Realizada')
  }
 }

 function excluirVaga() {
  const indice = prompt('Informe o índice da vaga que deseja excluir:')
  const vaga = vagas[indice]

  const confirmacao = confirm(`Tem certeza que deseja excluir a vaga ${indice}?
  Nome: ${vaga.nome}
  Descricao: ${vaga.descricao}
  Data Limite: ${vaga.dataLimite}`)

  if(confirmacao) {
    vagas.splice(indice, 1)
    alert('Vaga excluída')
  }
 }

 function exibirMenu() {
  const opcao = prompt(`Cadastro de Vagas de Emprego
  Escolha uma das opções:
  1. Listar vagas disponíveis
  2. Criar uma nova vaga
  3. Vizualizar uma vaga
  4. Inscrever um candidato
  5. Excluir uma vaga
  6. Sair`)

  return opcao
 }
 function executarMenu() {
  let opcao = ''

  while(opcao !== '6') {
    opcao = exibirMenu()

    switch(opcao) {
      case '1':
      listarVagas()
      break
      case '2':
      novaVaga()
      break
      case '3':
      exibirVaga()
      break
      case '4':
      inscreverCandidato()
      break
      case '5':
      excluirVaga()
      break
      case '6':
        alert('Saindo...')
      default :
      alert('Opção Inválida')

    }
  }
 }

 executarMenu()