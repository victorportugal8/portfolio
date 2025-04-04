ganhou = 0

for(let rodada = 1; rodada <= 10; rodada++) {
    console.log(`Rodada ${rodada}`)
    
    escolhaJogador = prompt(`Nível ${rodada} - Escolha um número entre 1 e 3:`)
    if (escolhaJogador < 1 || escolhaJogador > 10) {
        alert("Número inválido! Escolha um número entre 1 e 3.")
        continue
    }
    pisoQuebrado = Math.floor(Math.random() * 10) + 1

    if (escolhaJogador == pisoQuebrado) {
        alert("Você quebrou o piso! Fim de jogo!")
        ganhou = 1
        break
    } else {
        alert(`Você não quebrou o piso! O piso quebrado estava na ponte ${pisoQuebrado}. Você passou para o próximo nível!`)
    }
}
if(ganhou == 0) alert("Você venceu o jogo. Parabéns!")