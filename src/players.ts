import { File, Point, Trigger, Unit, MapPlayer, Camera } from "w3ts";
import { Players } from "w3ts/globals";
import { capturableUSet, CUSTOM_UID } from "enums";
import { townsCreated } from "dynamicCreation";

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

export function getUsersPlaying(): MapPlayer[]{
    let arr:MapPlayer[] = [];

    Players.forEach((player, playerIndex) => {
        if(player.slotState === PLAYER_SLOT_STATE_PLAYING && (player.controller === MAP_CONTROL_USER)){
            arr.push(player);
        }
    });

    return arr;
}

export function initializePlayers(){

    trig_controlTown();

    Players.forEach((player, playerIndex) => {

        player.setState(PLAYER_STATE_GIVES_BOUNTY, 1);
        
        player.setAlliance(Players[25], ALLIANCE_PASSIVE, true);

        if(player.slotState === PLAYER_SLOT_STATE_PLAYING && player.isPlayerAlly(Players[0]) && (player.controller === MAP_CONTROL_USER)){
            // print(`Player ${player.name} is playing and is red's ally!`);

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

    new Unit(player, CUSTOM_UID.soul, attackerSpawnCoords.x, attackerSpawnCoords.y, 0);
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
        
        //Works
        // print(u.typeId, u.name);
        //Check by unit id instead of type
        if(capturableUSet.has(u.typeId) && (u.life < (0.20*u.maxLife))){
            u.setOwner(a.owner, true);
            u.life = u.maxLife;
        }

        // if(u.isUnitType(UNIT_TYPE_STRUCTURE) && u.isUnitType(UNIT_TYPE_TOWNHALL) && u.life < (0.20*u.maxLife)){
        //     u.setOwner(a.owner, true);
        //     u.life = u.maxLife;
        // }

        return true;
    })
}

export function givePlayersStartingTown(){
    let p = getUsersPlaying()
    
    // if(townsCreated) print("VAR: ",townsCreated)

    p.forEach((player, index) => {

        // let t = townsCreated[index]
        // print("Number of towns: ",townsCreated.length);
        // if(t){
        //     // t.setOwner(player, true);
        //     print(`Player ${player.name} just got their first town!`);

        // }
        // else{
        //     print("Town does not exist!");
        // }


        // Camera.pan(t.x, t.y, 0);
    });
}
