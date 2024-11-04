let count = 0;
let spanRemovido = null;

function adicionar() {
    // Recuperando o valor do elemento de id Tarefa
    let tarefa = document.getElementById("tarefa").value;

    // Verificar se existe uma tarefa digitada!
    if(tarefa) {
        // Contador do id da tarefa
        count++;

        // Recuperando lista do elemento UL de class tarefas
        let lista = document.getElementsByClassName("tarefas")[0];

        // Criando os elementos li e button
        let li = document.createElement("li");
        let btn = document.createElement("button");

        // Atribuindo valores para o elemnto LI
        li.id = count;
        li.className = "tarefa-item";
        li.textContent = tarefa;

        // Atribuindo valores para o elemento button
        btn.className = "btn";
        btn.textContent = "Remover";
        btn.onclick = () => {
            lista.removeChild(li);
            atualizarMensagem(lista);
        }

        // Adicionando o button criado no LI
        li.appendChild(btn);

        // Adicionando o LI criado na lista
        lista.appendChild(li);
    
        atualizarMensagem(lista);
    } else {
        alert("Insira uma tarefa!");
    }

    // Limpa o campo de entrada
    document.getElementById("tarefa").value = "";
}

function atualizarMensagem(lista) {
    if(lista.children.length === 0) {
        if (spanRemovido) {
            document.querySelector(".tarefas").insertBefore(
                spanRemovido, document.querySelector(
                    ".tarefas").firstChild);
            spanRemovido = null;
        }
    } else {
        let mensagemNaoExiste = document.getElementById("nao-existe");
        if(mensagemNaoExiste) {
            spanRemovido = mensagemNaoExiste;
            mensagemNaoExiste.remove();
        }
    }
}
