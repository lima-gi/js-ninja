/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

var isTruthy = function(a){
    // if(a === true){
    //     return true;
    // } else {
    //   return false;
    // }
   var verifica = a === true ? true : false;
   return verifica;
}


// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(false);
isTruthy(0);
isTruthy(null);
isTruthy(undefined);
isTruthy(NaN);
isTruthy(-0);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy('isso ai');
isTruthy("tudo certo");
isTruthy({})


/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

var carro = {marca: 'Honda', modelo: 'Civic', placa: 'HHHGGG', ano: 2021, cor: 'preto', quantasPortas: 4, assentos: 5, quantidadePessoas: 0}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

carro.mudarCor = function(cor){
    carro.cor = cor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

carro.obterCor = function(){
    return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/

carro.obterModelo = function(){
    return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function(){
    return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

carro.obterMarcaModelo = function(){
    return "Esse carro é um" + carro.obterMarca + ' ' + carro.obterModelo + '"';
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

carro.adicionarPessoas = function(qtd){
    //qtd === 5 ? cheio : vazio;
    carro.assentos = qtd;
    if (qtd === 5){
        return "O carro já está lotado!";
    }
    if (qtd < 5){
        var faltam = (qtd - 5);
        var faltaUm = qtd === 4 ? "pessoa" : "pessoas";
        return "Só cabe mais " + faltam + " " + faltaUm;
    }
    return "Já temos " + qtd + " pessoas no carro!"
}


/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
pessoa.obterCor(); //'preto'

// Mude a cor do carro para vermelho.

pessoa.mudarCor(vermelho); //'vermelho'

// E agora, qual a cor do carro?

pessoa.obteCor(); //'vermelho'

// Mude a cor do carro para verde musgo.

pessoa.mudarCor(verde-musgo); //verde-musgo

// E agora, qual a cor do carro?

pessoa.obteCor(); //'verde musgo'

// Qual a marca e modelo do carro?

pessoa.obterMarcaModelo(); //"Esse carro é um Honda Civic"


// Adicione 2 pessoas no carro.

pessoa.adicionarPessoas(2); //"Já temos 2 pessoas no carro!"

// Adicione mais 4 pessoas no carro.

pessoa.adicionarPessoas(4); //"O carro já está lotado!"

// Faça o carro encher.

pessoa.adicionarPessoas(5); //"Já temos 5 pessoas no carro!"

// Tire 4 pessoas do carro.

//aqui faria um método remover pessoa

// Adicione 10 pessoas no carro.

pessoa.adicionarPessoas(10); //"O carro já está lotado!"

// Quantas pessoas temos no carro?

pessoa.adicionarPessoas() //"Já temos 5 pessoas no carro!"