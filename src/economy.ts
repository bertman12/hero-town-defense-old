import { economyUnitSet } from 'enums';
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
        // ClearTextMessages();
        
        Players.forEach(player => {
            let g = new Group();
            let totalIncome = 0;

            g.enumUnitsOfPlayer(player, () => {
                let u = Group.getFilterUnit();
                
                economyUnitSet.forEach(obj => {
                    if(obj.code === u.typeId){
                        player.setState(PLAYER_STATE_RESOURCE_GOLD, (player.getState(PLAYER_STATE_RESOURCE_GOLD) + obj.income));
                        totalIncome += obj.income;
                    }
                });

                return true;
            });

            DisplayTextToPlayer(player.handle, 0, 0, '===== Income Report =====' );
            DisplayTextToPlayer(player.handle, 0, 0, `Income: ${totalIncome}` );
            DisplayTextToPlayer(player.handle, 0, 0, '=====================' );

        });
    });
}





