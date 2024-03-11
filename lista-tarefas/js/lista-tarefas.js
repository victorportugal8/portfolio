;(function(){
    "use strict"

    const itemInput = document.getElementById("item-input")
    const listaTarefasForm = document.getElementById("lista-tarefas-add")
    const  ul = document.getElementById("lista-tarefas")
    const lis = ul.getElementsByTagName("li")

    let tarefasArray = [
        {
            name: "Tarefa 1",
            createdAt: Date.now(),
            completed: false
        },
        {
            name: "Tarefa 2",
            createdAt: Date.now(),
            completed: false
        }
    ]

    // function addEventoLi(li){
    //     li.addEventListener("click", function(){
    //         console.log(this)
    //     })
    // }

    function criaLiTarefa(obj){
        const li = document.createElement("li")
        const p = document.createElement("p")
        const btnCheck = document.createElement("button")
        const btnEdit = document.createElement("i")
        const btnApagar = document.createElement("i")
        const editContainer = document.createElement("div")
        const editInput = document.createElement("input")
        const btnContainerEditar = document.createElement("button")
        const btnContainerCancelar = document.createElement("button")
        
        li.className = "lista-tarefas-item"
        
        btnCheck.className = "btn-completo"
        btnCheck.innerHTML = `<i class="fa-solid fa-circle-check ${obj.completed ? "" : "displayNone"}" data-action="checkBtn"></i>`
        btnCheck.setAttribute("data-action", "checkBtn")

        li.appendChild(btnCheck)

        p.className = "nome-tarefa"
        p.textContent = obj.name

        btnEdit.className = "fa-solid fa-pen-to-square"
        btnEdit.setAttribute("data-action", "editarBtn")
        li.appendChild(btnEdit)

        editContainer.className = "editContainer"
        editInput.setAttribute("type", "text")
        editInput.className = "editInput"
        editInput.value = obj.name
        editContainer.appendChild(editInput)
        btnContainerEditar.className = "btn-editar"
        btnContainerEditar.textContent = "Editar"
        btnContainerEditar.setAttribute("data-action", "editarContainerBtn")
        editContainer.appendChild(btnContainerEditar)
        btnContainerCancelar.className = "btn-cancelar"
        btnContainerCancelar.textContent = "Cancelar"
        btnContainerCancelar.setAttribute("data-action", "cancelarContainerBtn")
        editContainer.appendChild(btnContainerCancelar)

        li.appendChild(editContainer)

        btnApagar.className = "fa-solid fa-trash-can"
        btnApagar.setAttribute("data-action", "apagarBtn")
        li.appendChild(btnApagar)

        li.appendChild(p)
        // addEventoLi(li)

        return li
    }

    function renderizarTarefas(){
        ul.innerHTML = ""
        tarefasArray.forEach(tarefaObj =>{
            ul.appendChild(criaLiTarefa(tarefaObj))
        })
    }

    function addTarefa(tarefa){
        tarefasArray.push({
            name: tarefa,
            createdAt: Date.now(),
            completed: false
        })
    }

    function ulClicada(e){
        const dataAction = e.target.getAttribute("data-action")
        if (!dataAction) return

        let liAtual = e.target
        while(liAtual.nodeName !== "LI"){
            liAtual = liAtual.parentElement
        }
        
        const indiceLiAtual = [...lis].indexOf(liAtual)

        const acoes = {
            editarBtn: function(){
                const containerEditar = liAtual.querySelector(".editContainer");
                [...ul.querySelectorAll(".editContainer")].forEach(container =>{
                    container.removeAttribute("style")
                })
                containerEditar.style.display = "flex"

            },
            apagarBtn: function(){
                tarefasArray.splice(indiceLiAtual, 1)
                renderizarTarefas()
            },
            editarContainerBtn: function(){
                const valor = liAtual.querySelector(".editInput").value
                tarefasArray[indiceLiAtual].name = valor
                renderizarTarefas()
            },
            cancelarContainerBtn: function(){
                liAtual.querySelector(".editContainer").removeAttribute("style")
                liAtual.querySelector(".editInput").value = tarefasArray[indiceLiAtual].name
            },
            checkBtn: function(){
                tarefasArray[indiceLiAtual].completed = !tarefasArray[indiceLiAtual].completed
                // if(tarefasArray[indiceLiAtual].completed){
                //     liAtual.querySelector(".fa-circle-check").classList.remove("displayNone")
                // } else{
                //     liAtual.querySelector(".fa-circle-check").classList.add("displayNone")
                // }
                renderizarTarefas()
            }
        }

        if(acoes[dataAction]){
            acoes[dataAction]()
        }
    }

    listaTarefasForm.addEventListener("submit", function(e){
        e.preventDefault()
        console.log(itemInput.value)
        addTarefa(itemInput.value)
        renderizarTarefas()
        itemInput.value = ""
        itemInput.focus()
    });

    ul.addEventListener("click", ulClicada)

    renderizarTarefas()
})()