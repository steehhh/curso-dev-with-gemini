function pesquisar() {

    
let section = document.getElementById("resultados-pesquisa")

let campoPesquisa = document.getElementById
("campo-pesquisa").value


if (campoPesquisa == "") {
    section.innerHTML = "<p>Nenhum Resultado Foi Encontrado.</p>"
    return
}

campoPesquisa = campoPesquisa.toLowerCase()


console.log(section);

let resultados = "";
let titulo = "";
let descricao = "";
let tags = ""; 

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += `
    
            <div class="item-resultado">
            <h2><a href="${dado.Vendas}"
                    target="_blank">${dado.titulo}</a></h2>
            <p class="descricao-meta"> ${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais
                Informações</a>
        </div>`
     }
   }

   if (!resultados) {
    resultados = "<p>Nada Foi Encontrado!</p>"
   }

    section.innerHTML = resultados;

}

//console.log(dados);
