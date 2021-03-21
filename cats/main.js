// Milestone 1
// Definire un array di oggetti;
// ogni oggetto rappresenta un gatto,
// che è caratterizzato da: nome, età, colore e sesso.
// Tramite la funzione.forEach(), stampare in pagina tutti i gattini,
// ciascuno con il proprio colore e il proprio nome.

// Milestone 2
// Dividere i gatti in due contenitori distinti in base al sesso e
// aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina,
// o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane,
// più scuro se il gatto è più vecchio.

// Milestone 3
// Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio,
// inserendo solamente nome e colore e colore e opacità del fiocco per ogni gatto.


const cats = [{
  nome: 'Elisabetta',
  eta: 5,
  colore: 'rosso',
  sesso: 'Femina'
}, {
  nome: 'Vincenzo',
  eta: 3,
  colore: 'bianco',
  sesso: 'Maschio'
}, {
  nome: 'Frederick',
  eta: 8,
  colore: 'nero',
  sesso: 'Maschio'
}]

// Milestone 1
// cats.forEach((item, i) => {
 // console.log(`${item.nome} ha il colore ${item.colore}`);
// });

// -------------------------------------------------------------
// Milestone 2
// Dividere i gatti in due contenitori distinti in base al sesso e
// aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina,
// o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane,
// più scuro se il gatto è più vecchio.


const maschi = cats.filter((item) => {
  return item.sesso === 'Maschio'
})


maschi.forEach((item, i) => {
   $('ul.maschi').append(`<li>Il gatto ${item.nome} ha ${item.eta} anni ed è  di colore ${item.colore}<i class="fas fa-ribbon"></i></li>`);
   //$('ul.maschi li').append(`<i class="fas fa-ribbon"></i>`); se la metto qua mi stampa due fiocchi al primo gatto
   $('ul.maschi li i').css("color","blue");

   if(item.eta <= 5){
     $('ul.maschi li i').css("opacity","0.3");
   } 
});

console.log(maschi);

const femine = cats.filter((item) => {
  return item.sesso === 'Femina'
})

femine.forEach((item, i) => {
  $('ul.femine').append(`<li>La gatta ${item.nome} ha ${item.eta} anni ed è  di colore ${item.colore}<i class="fas fa-ribbon"></i></li>`);
});


console.log(femine);
