;(function(){
    "use strict"

    const itemInput = document.getElementById("item-input")
    const listaTarefasForm = document.getElementById("lista-tarefas-add")
    const  ul = document.getElementById("lista-tarefas")
    // const li = ul.getElementsByTagName("li")

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

    function addEventoLi(li){
        li.addEventListener("click", function(){
            console.log(this)
        })
    }

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
        
        li.className = "lista-terafas-item"
        
        btnCheck.className = "btn-completo"
        btnCheck.innerHTML = '<i class="fa-solid fa-circle-check displayNone"></i>'

        li.appendChild(btnCheck)

        p.className = "nome-tarefa"
        p.textContent = obj.name

        btnEdit.className = "fa-solid fa-pen-to-square"
        li.appendChild(btnEdit)

        editContainer.className = "editContainer"
        editInput.setAttribute("type", "text")
        editInput.className = "editInput"
        editContainer.appendChild(editInput)
        btnContainerEditar.className = "btn-editar"
        btnContainerEditar.textContent = "Editar"
        editContainer.appendChild(btnContainerEditar)
        btnContainerCancelar.className = "btn-cancelar"
        btnContainerCancelar.textContent = "Cancelar"
        editContainer.appendChild(btnContainerCancelar)

        li.appendChild(editContainer)

        btnApagar.className = "fa-solid fa-trash-can"
        li.appendChild(btnApagar)

        li.appendChild(p)
        addEventoLi(li)

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

    listaTarefasForm.addEventListener("submit", function(e){
        e.preventDefault()
        console.log(itemInput.value)
        addTarefa(itemInput.value)
        renderizarTarefas()
        itemInput.value = ""
        itemInput.focus()
    });

    renderizarTarefas()
})()