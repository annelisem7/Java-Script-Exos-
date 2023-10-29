/*
class Character {
    constructor (name, probabilityToDie, probabilityToDamage, probabilityToDieWithDamage) {
        this.name = name;
        this.probabilityToDie = probabilityToDie;
        this.probabilityToDamage = probabilityToDamage;
        this.probabilityToDieWithDamage = probabilityToDieWithDamage;
        this.hp = 100;

    }
    attack() {
        const random = Math.random();
    
        if (random < this.probabilityToDie) { 
            return "est mort";
        } else if (random < this.probabilityToDieWithDamage + this.probabilityToDamage) {
            return "damage";
        } else if (random < this.probabilityToDie + this.probabilityToDamage + this.probabilityToDieWithDamage) {
            return "damageWithDie";
        } else {
            return "survivor";
        } 
    }
}

const Jason = new Character("Jason", 0.3, 0.5, 0.2);

const names = ["Cam la menace ", "Wen le péteur", "Iz le delinks", "Jojo le silipe", "Ali la charge"];
const survivors = [] ; 

for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * names.length);
    const name = names[randomIndex];
    const characteristics = [ "Nerd", "Sportif", "Blonde"];
    const randomCharacteristic = characteristics[Math.floor(Math.random() * characteristics.length)];
    const probabilityToDie = Math.random();
    const probabilityToDamage = Math.random();
    const probabilityToDieWithDamage = Math.random();
    survivors.push(new Character(name, probabilityToDie, probabilityToDamage, probabilityToDieWithDamage));
}

const deadSurvivors = [];

while (Jason.hp > 0 && survivors.length > 0) {
    const randomSurvivorIndex = Math.floor(Math.random() * survivors.length);
    const randomSurvivor = survivors[randomSurvivorIndex];
    const result = Jason.attack(randomSurvivor);

    if (result === "survivor") {
        console.log(randomSurvivor.name + " a esquivé et n'a pas été touché");
    } else if (result === "damage") {
        Jason.hp -= 10;
        console.log(randomSurvivor.name + " a esquivé et infligé 10 points de dégâts à Jason");
    } else if (result === "DamageWithDie") {
        Jason.hp -= 15;
        deadSurvivors.push(randomSurvivor.name);
        survivors.splice(randomSurvivorIndex, 1);
        console.log(randomSurvivor.name + " a infligé 15 points de dégâts mais est mort ");
        console.log (randomSurvivor.name + " a été tué par Jason " );
    } else {
        deadSurvivors.push(randomSurvivor.name);
        survivors.splice(randomSurvivorIndex, 1);
        console.log(randomSurvivor.name + " a été tué par" + Jason.name);
    }
}

console.log("Morts : ", deadSurvivors);
console.log(Jason.hp <= 0 ? "Jason a été tué ! " : "Jason a survécu ! ");
*/