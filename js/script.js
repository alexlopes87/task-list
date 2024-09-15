function addTarefa() {
    const tarefa = document.getElementById('tarefa').value;
    if (tarefa != '') {
        const lista = document.getElementById('lista-tarefas');
        const contador = lista.getElementsByTagName('li').length;
        if (contador < 10) {
            const item = document.createElement('li');
            item.textContent = tarefa;
            lista.appendChild(item);
            //document.getElementById('tarefa').value = '';

            //Criar checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox'
            checkbox.addEventListener('change', function() {
                if (checkbox.checked) {
                    item.style.textDecoration = 'line-through';
                    item.style.color = 'gray';
                } else {
                    item.style.textDecoration = 'none';
                    item.style.color = 'black';
                }
            });
            item.appendChild(checkbox);
            
            //Criar botão de excluir
            const btnExcluir = document.createElement('button');
            btnExcluir.textContent = 'Del';
            btnExcluir.id = 'btnExcluir'
            btnExcluir.addEventListener('click', function() {
                lista.removeChild(item);
            });
            item.appendChild(btnExcluir);
        } else {
            alert('Você atingiu o limite de tarefas!');
        }
    } else {
        alert('Por favor, digite uma tarefa!');
    }
}