let jsondados;
//criando o array para guardar o conteudo do carrinho
let listaTeste = [];
//função padrão para carregar o json
function carregarJSON(url, callback) {
    fetch(url)
        .then(response => response.json())
        .then(dados => {
            jsondados = dados;
            if (callback) callback();
        })
        .catch(error => console.error('Erro ao carregar o JSON:', error));
}

//função para adicionar o  conteudo ao carrinho
function add(id){
    //encontrando o produto referente ao id
    const item = jsondados.usuarios.find(usuarios => usuarios.id === id);
    if (item){
        //verificando se o item ja existe na lista
        const ItemJaExiste = listaTeste.some(p => p.id === id);
        //caso não exista ele adicionara
        if (!ItemJaExiste){
            console.log("deu  certo");
            listaTeste.push(item);
            adicionarLista();
        }
    }else{
        console.log("Erro");
    }
}

//adicionando a lista ao site
function adicionarLista(){
    //econtrando onde a adicionara a lista
    const listacarrinho = document.getElementById("lista");
    //limpando ela
    listacarrinho.innerHTML = "";
    //adicionando
    listaTeste.forEach(produto =>{
        const li = document.createElement("li");
        li.textContent = `${produto.nome} - ${produto.idade}`;
        listacarrinho.appendChild(li);
    })
}

//carregando o json certo
carregarJSON('./dados.json');
