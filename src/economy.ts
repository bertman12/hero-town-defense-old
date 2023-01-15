import { Group, Timer, Trigger } from 'w3ts';
import { Players } from "w3ts/globals";

export function initEconomy(){
    passiveIncomeSetup();
    giveTownGold();
    // print("Economy initialized!");
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

/**
 * Gives gold based on number of towns owned.
 */
function giveTownGold(){
    let t = new Timer();

    t.start(60, true, () => {
        print("Income Distributed!");
        
        Players.forEach(player => {
            let g = new Group()
            g.enumUnitsOfPlayer(player, () => {
                let u = Group.getFilterUnit();
    
                if(u.isUnitType(UNIT_TYPE_STRUCTURE) && u.isUnitType(UNIT_TYPE_TOWNHALL)){
                    // print("Giving gold to player!");
    
                    player.setState(PLAYER_STATE_RESOURCE_GOLD, (player.getState(PLAYER_STATE_RESOURCE_GOLD) + 100));
                }
    
                return true;
            })
        })
    });

    
}

