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
}, {
  nome: 'Lucy',
  eta: 8,
  colore: 'grigio',
  sesso: 'Femina'
}]

cats.forEach((item, i) => {
  const {
    nome,
    eta,
    colore,
    sesso
  } = item;
   $('.array-oggetti-cats').append(`<div>Nome:${nome}, eta:${eta}, colore:${colore}, genere:${sesso}</div>`)
});



// divido per sesso:
const maschi = cats.filter((item) => {
  return item.sesso === 'Maschio'
})

//
// appendo il fiocco blu e gestisco l'opacità
//ppendo il fiocco blu e gestisco l'opacità:
maschi.forEach((item, i) => {
  $('ul.maschi').append(`<li>Il gatto ${item.nome} ha ${item.eta} anni ed è  di colore ${item.colore}<i class="fas fa-ribbon"></i></li>`);
  //$('ul.maschi li').append(`<i class="fas fa-ribbon"></i>`); se la metto qua mi stampa due fiocchi al primo gatto
  $('ul.maschi li i').css("color", "blue");

  if (item.eta <= 5) {
    $('ul.maschi li i').css("opacity", "0.5");
    item.opacità = 0.5;
  } else if (item.eta > 5) {
    item.opacità = 1;
  }
});
console.log(maschi);

// divido per sesso:
const femine = cats.filter((item) => {
  return item.sesso === 'Femina'
})

// appendo il fiocco rosa e gestisco l'opacità, aggiungo anche la proprieta opacità:
femine.forEach((item, i) => {
  $('ul.femine').append(`<li>La gatta ${item.nome} ha ${item.eta} anni ed è  di colore ${item.colore}<i class="fas fa-ribbon"></i></li>`);
  $('ul.femine li i').css('color', 'pink');
  if (item.eta <= 5) { // se faccio anche  nel esle la selezione jquery allora tutte i fiocchi diventano della stessa opacità, strano
    $('ul.femine li i').css('opacity', '0.5');
    item.opacità = 0.5;
  } else {
    item.opacità = 1;
  }
});
console.log(femine);

// Milestone 3
// Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio,
// inserendo solamente nome e colore e colore e opacità del fiocco per ogni gatto.


const nuovoFemine = [];

femine.forEach((item, i) => {
  const {
    nome,
    colore,
    opacità
  } = item;
  let obj = {
    nome,
    colore,
    opacità
  }
  nuovoFemine.push(obj);
});

nuovoFemine.forEach((item, i) => {
  $('.nuovo-femine ul').append(`<li> Nome: ${item.nome}, colore: ${item.colore}, opacità: ${item.opacità}`)
});


const nuovoMaschi = [];

maschi.forEach((item, i) => {
  const {
    nome,
    colore,
    opacità
  } = item;
  let obj = {
    nome,
    colore,
    opacità
  }
  nuovoMaschi.push(obj);
});

nuovoMaschi.forEach((item, i) => {
  $('.nuovo-maschi ul').append(`<li> Nome: ${item.nome}, colore: ${item.colore}, opacità: ${item.opacità}`)
});

const gattini =  [...nuovoFemine, ...nuovoMaschi]

gattini.forEach((item, i) => {
  
  for (let key in item) {
    $('.gattini ul').append(`<li>${item[key]}</li>`);
  }
  $('.gattini ul').append("</br>");
});
