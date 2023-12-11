let totalGeral 
let campoTotal = document.getElementById('valor-total');
let carrinho = document.getElementById("lista-produtos");
limpar()


function adicionar (){
    let produto = document.querySelector("select").value
    let quant = document.querySelector("input").value
    let tipo = produto.split('-')[0]
    let precoUnitario = produto.split('R$')[1];
    let preço = precoUnitario * quant;

    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quant}x</span> ${tipo} <span class="texto-azul">R$${precoUnitario}</span>
    </section>`;

    totalGeral += preço
    campoTotal.textContent = `R$${totalGeral}`;

}

function limpar (){
    totalGeral = 0;
    campoTotal.textContent = `R$${totalGeral}`;
    carrinho.innerHTML = '';
    
}