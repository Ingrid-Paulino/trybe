//hof-greetings.js
const person = {
  nome: 'Márcia',
  sobreNome: 'Jesus',
  greet: (outraFuncao) => {
      return outraFuncao(person);
  }
};


const greetingPeople = (person) => {
  return `Olá ${person.nome} ${person.sobreNome}, tudo bem com você?`;
}

const formalGreeting = (person) => {
  return `Oi ${person.nome}, tudo bem!?`;
}

const badMoodGreeting = () => {
  return 'Oi!';
}

const loveGreeting = (person) => {
  return `Oi ${person.nome} meu amor, tudo bem com você? Estava com saudades!!`;
}

console.table(person);

console.log(person.greet(formalGreeting));
console.log(person.name);

console.log(person.greet(person.nome === 'Márcia' ? loveGreeting : badMoodGreeting));

console.log(formalGreeting(person));


// hof-reaproveitamento.js

const jogadores = ['Pelé', 'Jairzinho', 'Marta', 'Formiga', 'Hulk', 'Juary', 'Fábio', 'Janderson', 'Sócrates'];

function filtrar(arrayInicial, filtro){
    const arrayResposta = [];

    for(let informacao of arrayInicial){
        if(filtro(informacao)){
            arrayResposta.push(informacao);
        }
    }

    return arrayResposta;
}

// Filtrar jogadores que o nome não comece pela letra J
let jogadoresFiltrados = filtrar(jogadores, (nome) => nome[0] !== 'J');

console.log(jogadoresFiltrados);

// Filtrar jogadores que o nome não comece pela letra F

jogadoresFiltrados = filtrar(jogadoresFiltrados, (jogador) => jogador[0] !== 'F')

console.log(jogadoresFiltrados);

// Filtrar jogadores que o nome tenha menos que 5 letras

jogadoresFiltrados = filtrar(jogadoresFiltrados, (jogador) => jogador.length < 5);

console.log(jogadoresFiltrados);

// function filtrarComecandoPor(arrayInicial, letraInicial){
//     const arrayResposta = [];

//     for(let informacao of arrayInicial){
//         if(informacao[0] !== letraInicial){
//             arrayResposta.push(informacao);
//         }
//     }

//     return arrayResposta;
// }

// function filtrarMenorQue(arrayInicial, qtdLetras){
//     const arrayResposta = [];

//     for(let informacao of arrayInicial){
//         if(informacao.length < qtdLetras){
//             arrayResposta.push(informacao);
//         }
//     }

//     return arrayResposta;
// }


//primeiraOrdem.js

function mostraVeiculoMarca(veiculo, marca){
  console.log(`O veiculo ${veiculo} é da marca ${marca}`);
}

mostraVeiculoMarca('Fusca', 'Volks');
mostraVeiculoMarca('Corsa', 'GM');

const mostraVeiculo = mostraVeiculoMarca;

mostraVeiculo('Chevette', 'GM');