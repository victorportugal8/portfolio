idade = prompt("Qual a sua idade?")
if (idade < 18) alert("Você é menor de idade. Você não pode jogar.")
if (idade >= 18) {
    alert("Você é maior de idade. Você pode jogar.")
    escolhaJogador = prompt("Escolha: Pedra(1), Papel(2) ou Tesoura(3)?")
    escolhaComputador = Math.floor(Math.random() * 3) + 1
    if(escolhaJogador == escolhaComputador) alert("Empate!")
    if(escolhaJogador == 1){
        if(escolhaComputador == 2) alert("Você perdeu!")
        if(escolhaComputador == 3) alert("Você ganhou!")
    }
    if(escolhaJogador == 2){
        if(escolhaComputador == 1) alert("Você ganhou!")
        if(escolhaComputador == 3) alert("Você perdeu!")
    }
    if(escolhaJogador == 3){
        if(escolhaComputador == 1) alert("Você perdeu!")
        if(escolhaComputador == 2) alert("Você ganhou!")
    }
}