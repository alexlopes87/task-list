function addTarefa() {
    const tarefa = document.getElementById('tarefa').value;
    if (tarefa == '') {
        alert('Por favor, digite um tarefa!')
    } else {
        const tarefa = document.getElementById('tarefa').value;
        const lista = document.getElementById('lista-tarefas');
        const item = document.createElement('li');
        item.textContent = tarefa;
        item.addEventListener('click', function(){
            item.style.textDecoration = 'line-through';
            item.style.color = 'gray';
        });
        item.addEventListener('dblclick', function(){
            item.style.textDecoration = 'none';
            item.style.color = 'black';
        });
        lista.appendChild(item);
        document.getElementById('tarefa').value = '';
    }
}