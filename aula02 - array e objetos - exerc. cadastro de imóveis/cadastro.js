let menu = ''
let imoveis = []

while(menu!=='3') {
  menu = prompt(`Bem vindo ao sistema da imobiliária.
  Quantidade de imóveis disponíveis: ${imoveis.length}
  Escolha uma opção:
  1. Adicionar um imóvel.
  2. Exibir dados dos imóveis disponíveis.
  3. Sair do sistema.`)
  switch(menu){
    case '1':
      let imovel = {}
      imovel.proprietario = prompt('Qual o nome do proprietário?')
      imovel.quartos = prompt('Quantos quartos tem no imóvel?')
      imovel.banheiros = prompt('Quantos banheiros tem no imóvel?')
      imovel.garagem = prompt('O imóvel tem garagem?(sim/não)')
      const confirmacao = confirm(`Deseja salvar este imóvel?
      Proprietário: ${imovel.proprietario}.
      Quartos: ${imovel.quartos}.
      Banheiros: ${imovel.banheiros}.
      Possui garagem? ${imovel.garagem}.`)
      if (confirmacao) {
        imoveis.push(imovel)
        alert('Imóvel salvo com sucesso')
      } else {
        alert('Voltando ao menu')
      }
      break
      case '2':
        for (let i = 0; i < imoveis.length; i++) {
          alert(`Imovel ${i + 1}
          Proprietário: ${imoveis[i].proprietario}.
          Quartos: ${imoveis[i].quartos}.
          Banheiros: ${imoveis[i].banheiros}.
          Passui garagem? ${imoveis[i].garagem}.
          `)
        }
        break
        case '3':
       alert('Sistema encerrado.')
       break
       default:
        alert('Opção inválida.')
  }
}