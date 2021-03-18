// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’ unica proprietà da compilare, le altre saranno tutte settate a 0.

// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.

//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono

// solo nomi e falli subiti e stampiamo tutto in console.

const squadre = [{
    nome: "Milan",
    puntiFatti: Math.floor(Math.random() * (100 - 20 + 1) + 20),
    falliSubiti: Math.floor(Math.random() * (300 - 30 + 1) + 30)
  },
  {
    nome: "Inter",
    puntiFatti: Math.floor(Math.random() * (100 - 20 + 1) + 20),
    falliSubiti: Math.floor(Math.random() * (300 - 30 + 1) + 30)
  },
  {
    nome: "Roma",
    puntiFatti: Math.floor(Math.random() * (100 - 20 + 1) + 20),
    falliSubiti: Math.floor(Math.random() * (300 - 30 + 1) + 30)
  }
]

const nuovoArray = [];
for (var i = 0; i < squadre.length; i++) {
  // destrtrutturizzazione di squadre[i]
  const {
    nome,
    falliSubiti
  } = squadre[i];

  nuovoArray.push({
    nome,
    falliSubiti
  });
}

console.log(nuovoArray);
