/*
class Pokemon {
    constructor (name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    attackPokemon(pokemon){
        if(this.isLucky()) {
            let damage = this.attack - pokemon.defense
            pokemon.hp -= damage
                console.log (this.name +" a attaqué " + pokemon.name + " pour " + damage + " de dégats! Il lui reste " + pokemon.hp + "points de vie")
            } else {
            console.log (this.name +" a raté son attaque " )
           
        }
    }
isLucky(){
    return this.luck > Math.random()
}
}

let romain = new Pokemon("romain", 12, 5, 160, 0.5)
let none = new Pokemon ("none", 6, 10, 70, 0.5)

while (none.hp > 0 && romain.hp > 0) {

    romain.attackPokemon(none)

if (none.hp < 0) {
    console.log("none est décédé")
    break
}
none.attackPokemon(romain)

if (romain.hp < 0) {
    console.log("romain est décédé")
    break ;
}
}
*/