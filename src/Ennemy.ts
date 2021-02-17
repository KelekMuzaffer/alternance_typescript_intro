import Character from "./Character";
import {InterfaceFight} from "./interface/InterfaceFight";

export default class Ennemy implements InterfaceFight{
    life: number;

    constructor() {
        this.life = Math.floor(Math.random()*80)+1;
    }

    attack(charac: Character){
        let force: number =Math.floor(Math.random()*20)/2;

            charac.life = charac.life - force;
    }

    takeDamage(damage: number): void {
    }
}