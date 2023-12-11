let listaDeAmigos = document.getElementById('lista-amigos')
let amigos = []
let sorteio = document.getElementById('lista-sorteio')

function adicionar(){   
    let amigo = document.getElementById('nome-amigo').value.toLowerCase()
    if (amigo == ""){
        alert("O nome inserido não é valido! Por favor não adicione nomes vazios")
        return;
    } 
    if (amigos.includes(amigo)){
        alert("Esse nome ja foi incluído, por favor coloque um sobrenome");
        return;
    }
    amigos.push(amigo)

    if (listaDeAmigos.textContent == ''){
        listaDeAmigos.textContent = amigo;
    }else{
        listaDeAmigos.textContent = listaDeAmigos.textContent + ', ' +amigo
    }
    amigo = ""
}

function sortear(){
    if (amigos.length < 3){
        alert("Número de pessoas insuficiente, por favor insira no mínimo 3 pessoas!")
        return;
    } 
    embaralha(amigos);
    for (let i = 0; i<amigos.length; i++){
        if (i==amigos.length-1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i]+ ' --> ' +amigos[0] + '<br>'
        }else{
        sorteio.innerHTML = sorteio.innerHTML + amigos[i]+ ' --> ' +amigos[i+1] + '<br>'
        }
    }
}

function embaralha(lista){
    for (let indice = lista.length; indice; indice--){
        const indiceAleatorio = Math.floor(Math.random()*indice);
        [lista[indice-1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice-1]]

    }
}

function reiniciar(){
    sorteio.textContent = ""
    listaDeAmigos.textContent = []
    amigos = []
}