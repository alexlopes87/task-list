function addTarefa() {
    const tarefa = document.getElementById('tarefa').value;
    if (tarefa != '') {
        const lista = document.getElementById('lista-tarefas');
        const contador = lista.getElementsByTagName('li').length;
        if (contador < 20) {
            const item = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = `${contador + 1}. ${tarefa}`;
            item.appendChild(span);

            //Criar checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.title = 'Riscar';
            checkbox.addEventListener('change', function() {
                if (checkbox.checked) {
                    span.style.textDecoration = 'line-through';
                    span.style.color = 'gray';
                } else {
                    span.style.textDecoration = 'none';
                    span.style.color = 'black';
                }
            });
            item.appendChild(checkbox);
            
            //Criar botão de excluir
            const btnExcluir = document.createElement('button');
            //btnExcluir.textContent = 'Del';
            btnExcluir.innerHTML = '&#128465;';
            btnExcluir.id = 'btnExcluir';
            btnExcluir.title = 'Excluir';
            btnExcluir.addEventListener('click', function() {
                if (confirm('Tem certeza que deseja excluir a tarefa?')) {
                    lista.removeChild(item);
                }
            });
            item.appendChild(btnExcluir);

            lista.appendChild(item)
            document.getElementById('tarefa').value = '';
        } else {
            alert('Você atingiu o limite de 20 tarefas!');
        }
    } else {
        alert('Por favor, digite uma tarefa!');
    }
}