function addplayer() {
  const playername = document.getElementById('player-name').value
  const playerposition = document.getElementById('player-position').value
  const number = document.getElementById('player-shirt').value

  const confirmation = confirm(`Escalar ${playername} como ${playerposition}?`)

  if(confirmation) {
    const teamList = document.getElementById('player-list')
    const playerItem = document.createElement('li')
    playerItem.id = `player- ${number}`
    playerItem.innerText = `${playerposition} : ${playername}  (${number})`
    teamList.appendChild(playerItem)

    document.getElementById('player-name').value = ''
    document.getElementById('player-position').value = ''
    document.getElementById('player-shirt').value = ''
  }
}
function removerplayer() {
  const number = document.getElementById('number-shirt').value
  const playerToRemove = document.getElementById(`player- ${number}`)

  const confirmation = confirm(`Remover o jogador ${playerToRemove.innerText}?`)

  if(confirmation) {
    document.getElementById('player-list').removeChild(playerToRemove)
    document.getElementById('number-shirt').value = ''
  }

}