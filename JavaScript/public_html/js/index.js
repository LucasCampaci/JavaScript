document.addEventListener("DOMContentLoaded", function () {
    // pegando elementos do DOM
    var form = document.querySelector("#form");
    var botaoApagar = document.querySelector("#apagar");
    var tbody = document.querySelector("tbody");
    // array para armazernar linhas 1tr1
    var linhas = [];

    // criando para submissão do formulário
    form.addEventListener("submit", function (event) {
        // tirando evento padrão
        event.preventDefault();

        //pegando elementos do formuário
        let data = document.querySelector("#data");
        let quantidade = document.querySelector("#quantidade");
        let valor = document.querySelector("#valor");
        // realizando calculo para valor do volume
        let volume = (quantidade.value * valor.value);
        // criando elemento 'tr'
        let tr = document.createElement('tr');

        // criando elementos 'td'
        let colunaData = document.createElement('td');
        let colunaQuantidade = document.createElement('td');
        let colunaValor = document.createElement('td');
        let colunaVolume = document.createElement('td');

        // inserindo valores em 'td' (coluna)
        colunaData.textContent = data.value;
        colunaQuantidade.textContent = quantidade.value;
        colunaValor.textContent = valor.value;
        colunaVolume.textContent = volume;

        // incluindo elementos 'td' em 'tr' (colunas na linha)
        tr.appendChild(colunaData);
        tr.appendChild(colunaQuantidade);
        tr.appendChild(colunaValor);
        tr.appendChild(colunaVolume);

        // adicionando tr no array de linhas
        linhas.push(tr);

        // adicionando linha completa na 'tbody' (corpo da tabela)
        tbody.appendChild(tr);

        form.reset();
        data.focus();
    }, false);

    // criando evento para o botão apagar
    botaoApagar.addEventListener("click", function () {

        // limapando linhas do corpo da tabela 
//ERRO        linhas.forEach(linha => tbody.removeChild(linha));     
    }, false);

}, false);

