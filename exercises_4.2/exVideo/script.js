                   // ARRAY
//ex:1
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//ex:2
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf('Portfólio');

console.log(menuServices);

//ex:3
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato')
console.log(menu);

              //FOR
//ex:1
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(let i = 0; i < groceryList.length; i += 1 ) {
    console.log(groceryList[i])
}

               //FOR/OF

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for(let name of names) {
    console.log(name);
}

const frutas = ['banana', 'maça', 'uva']
for (fruta of frutas) {
    console.log(fruta);
}

for(let i = 0; i <= 10; i += 1 ) {
    console.log([i])
}

for(let i = 0; i <= 10; i += 1 ) {
    console.log(i)
}


for (let hora = 1; hora <= 12; hora += 1) {
    for (let min = 0; min <= 60; min += 1) {
        console.log(`${hora}:${min} `);
    }
}