import { File, Point, Trigger, Unit, MapPlayer } from "w3ts";
import { Players } from "w3ts/globals";
import { CUSTOM_UID } from "enums";

export let userPlayers = 0;

export const userPlayerIndexes = [];

const defenderSpawnCoords = {
    x: -15880,
    y: -16400
}

const attackerSpawnCoords = {
    x: 16500,
    y: -16850
}

export function initializePlayers(){
    SetCinematicCameraForPlayer(Players[0].handle, '');
    trig_controlTown();
    Players.forEach((player, playerIndex) => {
        if(player.slotState === PLAYER_SLOT_STATE_PLAYING && player.isPlayerAlly(Players[0]) && (player.controller === MAP_CONTROL_USER)){
            print(`Player ${player.name} is playing and is red's ally!`);

            if(player.team === 0) {
                handleDefenderInitialization(player, playerIndex);
            }
            else if(player.team === 1){
                handleAttackerInitialization(player, playerIndex)
            }
        }
    });
}

//Move camera too
function trig_moveTrainedHeroToStartLoc(player: MapPlayer){
    let trigger = new Trigger()

    trigger.registerAnyUnitEvent( EVENT_PLAYER_UNIT_SELL)

    trigger.addAction(() => {
        print("Moved unit to the center of map!");
        let buyingUnit = Unit.fromHandle(GetBuyingUnit());
        print("Buying unit: ", buyingUnit.name);
        buyingUnit.kill();
        let createdUnit = Unit.fromHandle(GetSoldUnit());
        createdUnit.x = 0;
        createdUnit.y = -350;
        print("Created unit: ",createdUnit.name);
    });
}

function handleDefenderInitialization(player: MapPlayer, playerIndex: number){
    userPlayers++;

    userPlayerIndexes.push(playerIndex);

    player.setState(PLAYER_STATE_RESOURCE_GOLD, 500);
    player.setState(PLAYER_STATE_RESOURCE_LUMBER, 500);
    player.setState(PLAYER_STATE_RESOURCE_FOOD_CAP, 100);
    
    trig_moveTrainedHeroToStartLoc(player);

    let soul = new Unit(player, CUSTOM_UID.soul, defenderSpawnCoords.x, defenderSpawnCoords.y, 0);
}

function handleAttackerInitialization(player: MapPlayer, playerIndex: number){
    userPlayers++;

    userPlayerIndexes.push(playerIndex);

    player.setState(PLAYER_STATE_RESOURCE_GOLD, 500);
    player.setState(PLAYER_STATE_RESOURCE_LUMBER, 500);
    player.setState(PLAYER_STATE_RESOURCE_FOOD_CAP, 100);
    
    trig_moveTrainedHeroToStartLoc(player);

    let soul = new Unit(player, CUSTOM_UID.soul, attackerSpawnCoords.x, attackerSpawnCoords.y, 0);
}

/**
 * 
 */
function trig_controlTown(){
    let t = new Trigger();
    t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ATTACKED);
    t.addCondition(() => {
        
        //Works
        let u = Unit.fromHandle(GetAttackedUnitBJ());
        let a = Unit.fromHandle(GetAttacker());

        if(u.isUnitType(UNIT_TYPE_STRUCTURE) && u.isUnitType(UNIT_TYPE_TOWNHALL) && u.life < (0.15*u.maxLife)){
            // print("Structure has low health: " , u.name);
            u.setOwner(a.owner, true);
            u.life = u.maxLife;
        }

        return true;
    })
}




