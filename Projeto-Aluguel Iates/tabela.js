var elemento = document.getElementById("recebeDados");
var mensagens = obterMensagens();

var count = 0;

console.log(mensagens.lenght)

while (mensagens.length > count){
    let obj = mensagens[count]
    let td0 = obj.nome;
    let td1 = obj.email;
    let td2 = obj.mensagem;

    let linha = elemento.insertRow(count);
    let cel0 = linha.insertCell(0);
    let cel1 = linha.insertCell(1);
    let cel2 = linha.insertCell(2);

    cel0.innerHTML = td0;
    cel1.innerHTML = td1;
    cel2.innerHTML = td2;

    count++
}




































/*function carregarmsg() {

    const mensagem = obterMensagens();

    for(var i in mensagem){
        var nome = mensagem[i].nome
        var email = mensagem[i].email

        var linha = document.createElement("tr");

        var cNome = document.createElement("td");
        cNome.innerHTML = nome;

        var cEmail = document.createElement("td");
        cEmail.innerHTML = email;

        var cMensagem = document.createElement("td");
        cMensagem.innerHTML = mensagem;

        linha.appendChild(cNome);
        linha.appendChild(cEmail);
        linha.appendChild(cMensagem);

        var tabela = document.getElementById("dados");
        tabela.appendChild(linha);
        estilizar();
    }
}
function estilizar() {

    var linhas = document.getElementsByTagName("tr");

    var pintar = false;

    for(var i=0; i< linhas.length; i++) {

        if (pintar == true) {
            linhas[i].setAttribute("style", "background-color:gray; color:white;");
            pintar = false;
        } else {
            pintar = true;
        }

        
    }

}*/
