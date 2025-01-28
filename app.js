let amigos = [];
let nomes = document.querySelector('p');
let inputNome = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

function adicionarAmigo() {
    if (inputNome.value == '') {
        alert('Insira um nome válido');
        return;
    } 
    amigos.push(inputNome.value);
    atualizarListaAmigos();
    inputNome.value = '';
}

function atualizarListaAmigos() {
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if(amigos.length == 0) {
        alert('Nenhum nome foi adicionado.');
        return;
    }
    let sorteia = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[sorteia];
    amigos.splice(sorteia, 1);
    resultado.innerHTML = '';
    const li = document.createElement('li');
    li.textContent = `🎉 O amigo sorteado é: ${nomeSorteado}`;
    resultado.appendChild(li); 
    atualizarListaAmigos();

    if(amigos.length == 0) {
        alert('Todos os amigos foram sorteados!');
        resetaAplicacao();
    }
}

function resetaAplicacao() {
    amigos = [];
    listaAmigos.innerHTML = '';
    resultado.innerHTML = '';
}