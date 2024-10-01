$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })


    $('form').on('submit', function(e) {
        e.preventDefault(); // Impede a atualização da página
    
        // Pega o valor do campo de entrada
        const enderecoDaNovaTarefa = $('#endereco-nova-tarefa').val();
        
        // Cria um novo item <li> e o esconde inicialmente
        const novoItem = $('<li style="display: none"></li>');
        
        // Adiciona o checkbox personalizado ao item <li>
        $(`<label class="checkbox-label">
            <input type="checkbox" id="customCheckbox" />
            <span class="checkbox-custom"></span>
        </label>`).appendTo(novoItem);
        
        // Adiciona o texto da nova tarefa ao item <li> (não cria outro <li> aqui)
        $(`<span>${enderecoDaNovaTarefa}</span>`).appendTo(novoItem);
        
        // Adiciona o botão de exclusão ao item <li>
        $(`<div class="lista-tarefas-elementos">
            <button class="button-excluir">
                <img src="./images/lixo.png" alt="Imagem de um cesto de lixo" />
            </button>
        </div>`).appendTo(novoItem);
    
        // Adiciona o novo item <li> à lista <ul> e exibe-o com um efeito de fadeIn
        $(novoItem).appendTo("ul").fadeIn();
    
        // Limpa o campo de texto após adicionar a tarefa
        $('#endereco-nova-tarefa').val('');
    });

    // Evento para excluir uma tarefa
    $(document).on("click", ".button-excluir", function () {
        const item = $(this).closest("li");
    
        // Verifica se o checkbox está marcado
        const tarefaConcluida = item.find('input[type="checkbox"]').is(":checked");

        // Remove o item da lista com um efeito fadeOut
        item.fadeOut(function () {
        $(this).remove();
        });
    });

    $(document).on("change", 'input[type="checkbox"]', function () {
        const item = $(this).closest("li");
        
        if ($(this).is(":checked")) {
            // Marca a tarefa como concluída
            item.css("text-decoration", "line-through");
            
        } else {
            // Remove a marcação de tarefa concluída
            item.css("text-decoration", "none");
            
        }
    });
});
