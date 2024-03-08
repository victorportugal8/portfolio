;(function(){
    "use strict"

    const itemInput = document.getElementById("item-input")
    const listaTarefasForm = document.getElementById("lista-tarefas-add")
    const  ul = document.getElementById("lista-tarefas")

    listaTarefasForm.addEventListener("submit", function(e){
        e.preventDefault()
        console.log(itemInput.value)
        ul.innerHTML += `
            <li class="lista-tarefas-item">
                <p class="nome-tarefa">${itemInput.value}</p>
            </li>
        `
        itemInput.value = ""
        itemInput.focus()
    })
})()