function verificar() {
  let data = new Date()
  let ano = data.getFullYear()
  let fano = document.getElementById('txtano').value
  let res = document.getElementById('resposta')
  
  if(fano == 0 || fano > ano) {
    alert('[ERRO] Verifique os dados e tente novamente.')
  }
  else{
    let fsex = document.getElementsByName('radsex')
    let idade = ano - fano
    let gereno = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fsex[0].checked) {
      genero = 'Homem'
      if(idade >=0 && idade < 10) {
        //crianca
        img.setAttribute('src', 'imagens/foto-bebe-m.png')
      } else if(idade < 21) {
        //jovem
        img.setAttribute('src', 'imagens/foto-jovem-m.png')
      } else if(idade < 50) {
        //adulto
        img.setAttribute('src', 'imagens/foto-adulto-m.png')
      } else {
        //idoso
        img.setAttribute('src', 'imagens/foto-idoso-m.png')
      }
    } else if(fsex[1].checked) {
      genero = 'Mulher'
      if(idade >=0 && idade < 10) {
        //crianca
        img.setAttribute('src', 'imagens/foto-bebe-f.png')
      } else if(idade < 21) {
        //jovem
        img.setAttribute('src', 'imagens/foto-jovem-f.png')
      } else if(idade < 50) {
        //adulto
        img.setAttribute('src', 'imagens/foto-adulto-f.png')
      } else {
        //idoso
        img.setAttribute('src', 'imagens/foto-idoso-f.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerText = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}

  