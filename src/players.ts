import { Destructable, File, FogModifier, Group, Point, Timer, TimerDialog, Trigger, Unit, Widget, Handle, Effect, MapPlayer, Region, Rectangle } from "w3ts";
import { Players } from "w3ts/globals";
import { OrderId } from "w3ts/globals/order";
import { addScriptHook, W3TS_HOOK } from "w3ts/hooks";
import { UNIT_IDS, ZOMBIE_MUTATION_ID, SHRIFT_ABILITIES, PLAYER_HERO_ID, CUSTOM_UID } from "enums";

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

const attackerHeroStartCoords = {
    x: 0,
    y: 0
}

const defenderHeroStartCoords = {
    x: 0,
    y: 0
}

export function initializePlayers(){
    
    Players.forEach((player, playerIndex) => {
        if(player.slotState === PLAYER_SLOT_STATE_PLAYING && player.isPlayerAlly(Players[0]) && (player.controller === MAP_CONTROL_USER)){
            print(`Player ${player.name} is playing and is red's ally!`);
            
            // SetPlayerMaxHeroesAllowed(1, Player(0))
            // SetPlayer

            if(player.team === 0) {
                handleDefenderInitialization(player, playerIndex);
            }
            else if(player.team === 1){
                handleAttackerInitialization(player, playerIndex)
            }
        }
    });
}

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