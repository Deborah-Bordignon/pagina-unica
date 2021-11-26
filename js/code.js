// inicializa a biblioteca de animação Aos Animate 
AOS.init();

//Função ENCAPSULADA: preenche o select com os dados da API do IBGE
(function(){

    var url= 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
    var select = document.getElementById('estado');
   
   

    /* Consulta a API com o método fetch e
    com um laço de repetição incrementa as tags option */

    fetch(url) //colocando dentro de fetch o que precisa buscar no caso url que  é nossa variavel que contem o http do IBGE
    .then(response => response.json()) // primeiro then captura os dados 

    .then(json => {  
        var options = '<option>Selecione</option>';

        //inserir abaixo desta linha um código pra ordenar em alfabética o objeto json
        json.sort(function(a,b){
            return a.nome < b.nome ? -1 : a.nome > b.nome ? 1:0;

        })

       //laço repetição
        for 
        (let index = 0; index < json.length; index++) {
           options += '<option>'+json[index].nome+' </option>.';
           
         
        } 
        select.innerHTML = options;
    })
    .catch(erro => console.log(erro));   // tratamento de erro 

 
})();

 