// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa
//  con le seguenti proprietà: nome e peso. Stampare a schermo la bici con
//   peso minore utilizzando destructuring e template literal(`Ciao ${variabile} !`);

const bici = [];
let i = 0;
while(i<3){
  let nome = prompt('Dammi il nome della bici: ');
  let peso = prompt('Dammi il peso della bici: ');
  if (0 < peso && peso < 15) {
    const ogg = {};
    ogg.peso = peso;
    ogg.nome = nome;
    bici.push(ogg);
    i++;
  } else {
    alert('Dammi il peso(numero) compreso tra 1 e 15: ')
  }
};
console.log(bici);


min = bici[0].peso;
let index = 0;
for (let  i = 1; i < bici.length; i++) {
  if(bici[i].peso < min) {
    min = bici[i].peso;
    index = i
  }
}

const {nome, peso} = bici[index];

console.log(`La bici più leggera a il nome: ${nome}, e pesa: ${peso} kg`);
