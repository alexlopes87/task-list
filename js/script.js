function addTarefa() {
    const tarefa = document.getElementById('tarefa').value.trim();
    if (tarefa == '') {
        alert('Por favor, digite um tarefa!')
    } else {
        const lista = document.getElementById('lista-tarefas');
        const cont = lista.getElementsByTagName('li').length;

        if (cont < 10) {
            const item = document.createElement('li');
            item.textContent = tarefa;

            // Criar botão de exclusão
            const btnExcluir = document.createElement('button');
            btnExcluir.textContent = 'Excluir';
            btnExcluir.style.marginLeft = '10px'; // Adiciona um espaço entre o texto e o botão
            btnExcluir.addEventListener('click', function(){
                lista.removeChild(item);
                cont-=1;
            });

            // Adicionar botão de exclusão ao item
            item.appendChild(btnExcluir);

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

            cont+=1;
        } else {
            alert('Número máximo de tarefas atingido!');

        }
    }
}