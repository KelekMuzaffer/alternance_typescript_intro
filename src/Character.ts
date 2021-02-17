import Ennemy from "./Ennemy";
import {InterfaceFight} from "./interface/InterfaceFight";

export default class Character implements InterfaceFight{
   username: string;
   sexe: string;
   life: number;

    constructor(username: string, sexe: string ) {
        this.username = username;
        this.sexe = sexe;
        this.life = 100;
    }

    summary(): void {
        console.log(`Votre nom : ${this.username}, vous ête un(e) : ${this.sexe} et vous avez ${this.life} de point de vie !`);
    }
    attack(ennemy: Ennemy){
        let force: number =Math.floor(Math.random()*20)/2;

        ennemy.life = ennemy.life - force;
    }

    takeDamage(damage: number): void {
    }

}
