rodada = 1
while (rodada <= 3) {
    console.log(`Rodada ${rodada}`)
    
    escolhaJogador = prompt(`Nível ${rodada} - Escolha um número entre 1 e 3:`)
    if (escolhaJogador < 1 || escolhaJogador > 3) {
        alert("Número inválido! Escolha um número entre 1 e 3.")
        continue
    }
    pisoQuebrado = Math.floor(Math.random() * 3) + 1

    if (escolhaJogador == pisoQuebrado) {
        alert("Você quebrou o piso! Fim de jogo!")
        break
    } else {
        alert(`Você não quebrou o piso! O piso quebrado estava na ponte ${pisoQuebrado}. Você passou para o próximo nível!`)
    }
    
    rodada++
}
if(rodada == 4) alert("Você venceu o jogo. Parabéns!")