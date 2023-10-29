
const music = ["Elo Wehout", "Le temps d'une vie", "Wejdene Anissa", "Lue ka i aja", "Orio" ]

class Personnage {
    constructor ( name, santeMentale) {
    this.name = name;
    this.santeMentale = santeMentale;
    }
}

class Trajet {
    constructor (radio, changements, feuxRouge) {
        this.radio = radio;
        this.changements = changements;
        this.feuxRouge = feuxRouge;
    }
}

const feuxRouge = 30; 
const santeMentale = 10;
const trajet = new Trajet ("Radio", 0, feuxRouge);
const john = new Personnage ("John", santeMentale);

function choisirMusique() {
    let musique;
    do {
        musique = music[Math.floor(Math.random() * music.length)]
    } while ( musique === "Wejdene Anissa");
   return musique;
}

for (let i = 1; i <= trajet.feuxRouge; i++) {
    const musique = choisirMusique();
    console.log("Feu rouge" + i + ": playsMusic -" + musique + ", Feux restants -" + (trajet.feuxRouge - i))

    if(musique === "Wejdene Anissa") {
        john.santeMentale -=1;
        trajet.changements++;
        if (john.santeMentale <= 0) {
            console.log ("explosion");
            break;
        }
    }
}
if (john.santeMentale > 0) {
console.log( "John est bien arrivé chez lui " + trajet.changements + "changement de taxi");
}
