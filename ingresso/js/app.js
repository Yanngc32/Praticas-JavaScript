function comprar(){
    let tipo = document.querySelector("select").value
    let quantidade = document.getElementById("qtd").value
    subtrairTotal(tipo, quantidade)
}

function subtrairTotal(id, quantidade){
    let ingresso = document.getElementById(`qtd-${id}`).textContent
    ingresso -= quantidade
    if (ingresso<0){
        alert(`Quantidade indisponível para ${id}`)
    }else{
        document.getElementById(`qtd-${id}`).textContent = ingresso
    }
}