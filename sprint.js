async function buscarPersonagem() {

    const resposta = await fetch("https://rickandmortyapi.com/api/character");

    const dados = await resposta.json();

    const personagens = dados.results;

    const lista = document.querySelector("#listaPersonagens");

    lista.textContent = "";

    for (let cont = 0; cont < personagens.length; cont++) {

        const personagem = personagens[cont];

        const cartao = document.createElement("article");
        cartao.style.backgroundColor = "white";
        cartao.style.width = "300px";
        cartao.style.margin = "20px";
        cartao.style.padding = "20px";
        cartao.style.borderRadius = "15px";
        cartao.style.textAlign = "center";

        const titulo = document.createElement("h2");
        titulo.textContent = personagem.name;

        const imagem = document.createElement("img");

        imagem.src = personagem.image;

        imagem.style.width = "200px";
        imagem.style.borderRadius = "10px";


        const status = document.createElement("p");
        status.textContent = `Status: ${personagem.status}`;

        const especie = document.createElement("p");
        especie.textContent = `Espécie: ${personagem.species}`;

        cartao.appendChild(titulo);
        cartao.appendChild(imagem);
        cartao.appendChild(status);
        cartao.appendChild(especie);

        lista.appendChild(cartao);


    }
}