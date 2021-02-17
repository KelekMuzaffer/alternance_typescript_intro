import Character from "./Character";
import prompts, {PromptObject} from "prompts";
import Ennemy from "./Ennemy";


const questions:PromptObject[] = [
    {
        type: 'text',
        name: 'username',
        message: 'What is your username?'
    },
    {
        type: 'select',
        name: 'personnage',
        message: 'Are you Heroïne or Hero?',
        choices: [
            {title: "Heroïne", value: "heroïne"},
            {title: "Hero", value: "hero"}
        ]
    }
];


const fight: PromptObject =
    {
    type: "select",
    name: "fight",
    message: "Do you want fight?",
    choices: [
        {title: "Yes", value: "yes"},
        {title:"No", value:"no"}
    ]
};


(async () => {
    const response = await prompts(questions);
    let user = new Character(response.username,response.personnage);
    user.summary();

    let enemy = new Ennemy();
    console.log("Ennemi en approche !");
    while (user.life > 0 || enemy.life > 0) {
        const combat = await prompts(fight);
        if (combat.fight == 'yes') {

            user.attack(enemy);
            if (enemy.life > 0) {
                console.log(`Ah, le degat n'est pas souffisant, il est tousjours en vie, son point vie est  ${enemy.life} `);
                console.log("L'ennemi riposte !");
                enemy.attack(user);
                if (user.life > 0) {
                    console.log(`vous avez survecu à l'attaque. votre point vie est ${user.life}`);
                }
                else{
                    console.log(`vous avez perdu!`);
                    break;
                }
            } else {
                console.log(`Vous avez gagné! L'enemy est mort... `);
                break;
            }
        } else {
            console.log("vous avez quitte la partie");
            break;
        }
    }


    // => response => { username, age, about }
})();