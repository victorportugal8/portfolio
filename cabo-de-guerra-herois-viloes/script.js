personagem = ["", "", ""]
viloes = ["", "", ""]

forcaPersonagem = 0
forcaViloes = 0

for(let i = 0; i < 3; i++){
    personagem[i] = prompt("Digite o nome do personagem " + (i+1) + ":")
    forcaPersonagem =+ Math.floor(Math.random() * 10) + 1
}

for(let i = 0; i < 3; i++){
    indiceAleatorio = Math.floor(Math.random() * 10)
    viloesPossiveis = ["Thanos", "Darth Vader", "Coringa", "Loki", "Ultron", "Hannibal Lecter", "Voldemort", "Freddy Krueger", "Pennywise", "Sukuna"]
    viloes[i] = viloesPossiveis[indiceAleatorio]
    forcaViloes =+ Math.floor(Math.random() * 10) + 1
}

if(forcaPersonagem > forcaViloes){
    alert(`Os personagens venceram os vilões! Sua força total é ${forcaPersonagem} e a força dos vilões é ${forcaViloes}.`)
} else if(forcaPersonagem < forcaViloes){
    alert(`Os vilões venceram os personagens! Sua força total é ${forcaViloes} e a força dos personagens é ${forcaPersonagem}.`)
} else{
    alert(`Os personagens e os vilões empataram! A força total é ${forcaPersonagem}.`)
}