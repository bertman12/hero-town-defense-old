import { Timer } from 'w3ts';
import { Players } from "w3ts/globals";

export function initEconomy(){
    passiveIncomeSetup();
    print("Economy initialized!");
}

function passiveIncomeSetup(){
    const timer = new Timer()
    timer.start(1, true, distributeGold)
}

function distributeGold(){
    Players.forEach(player => {
        // print("Giving gold!");
        player.setState(PLAYER_STATE_RESOURCE_GOLD, (player.getState(PLAYER_STATE_RESOURCE_GOLD) + 1));
    });  
}

