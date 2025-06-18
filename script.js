    // Array para armazenar os produtos adicionados ao carrinho
    const carrinho = [];
    // Função chamada ao clicar no botão "Adicionar ao Carrinho"
    function adicionarAoCarrinho(botao) {
        // Encontra o elemento do card mais próximo do botão clicado
        const card = botao.closest('.card');
        // Obtém o título do produto
        const titulo = card.querySelector('.card-title').innerText;
        // Obtém o texto do preço do produto
        const precoTexto = card.querySelector('.card-text').innerText;
        // Converte o preço para número
        const preco = parseFloat(precoTexto.replace(/[^\d,]/g, '').replace(',', '.'));
        // Adiciona o produto ao array do carrinho
        carrinho.push({ titulo, preco });
        atualizarCarrinho();
    }
    // Atualiza a lista do carrinho e o total
    function atualizarCarrinho() {
        // Seleciona o elemento UL da lista do carrinho
        const lista = document.getElementById('carrinho-lista');
        // Seleciona o elemento onde será mostrado o total
        const totalSpan = document.getElementById('total-carrinho');
        // Limpa a lista atual
        lista.innerHTML = '';
        // Reinicia o total
        let total = 0;


        // Para cada item no carrinho, cria um <li> com botão de remover
        carrinho.forEach((item, index) => {
            total += item.preco;
             // Cria o item da lista
            const li = document.createElement('li');
             // Insere o conteúdo no <li>
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.innerHTML = `${item.titulo} - R$ ${item.preco.toFixed(2).replace('.', ',')}
            <button class="btn btn-sm btn-danger" onclick="removerDoCarrinho(${index})">Remover</button>`;
             // Adiciona o item à lista
            lista.appendChild(li);
        });
         // Atualiza o valor total na tela
        totalSpan.textContent = total.toFixed(2).replace('.', ',');
    }
     // Remove um item específico do carrinho
    function removerDoCarrinho(index) {
        carrinho.splice(index, 1);
        atualizarCarrinho();
    }
    // Esvazia completamente o carrinho
    function limparCarrinho() {
        carrinho.length = 0;
        atualizarCarrinho();
    }
