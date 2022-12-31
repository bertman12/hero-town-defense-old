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

export function initializePlayers(){
    
    Players.forEach((player, index) => {
        if(player.slotState === PLAYER_SLOT_STATE_PLAYING && player.isPlayerAlly(Players[0]) && (player.controller === MAP_CONTROL_USER)){
            print(`Player ${player.name} is playing and is red's ally!`);
            
            // SetPlayerMaxHeroesAllowed(1, Player(0))
            // SetPlayer
            
            userPlayers++;

            userPlayerIndexes.push(index);

            player.setState(PLAYER_STATE_RESOURCE_GOLD, 1000);
            player.setState(PLAYER_STATE_RESOURCE_LUMBER, 500);
            player.setState(PLAYER_STATE_RESOURCE_FOOD_CAP, 100);

            if(player.team === 0) print("Player is on team 0!");
            
            trig_moveTrainedHeroToStartLoc(player);

            let soul = new Unit(player, CUSTOM_UID.soul, defenderSpawnCoords.x, defenderSpawnCoords.y, 0);


            // playerStartUnit.nameProper = "\"G\" - The Glutton";

            // let playerStartUnit = new Unit(player, PLAYER_HERO_ID.theGlutton , 0,0,0);
            
            // playerStartUnit.addAbility(SHRIFT_ABILITIES.theUnbound);

            // playerStartUnit.addAbility(SHRIFT_ABILITIES.theGlutton);
            // playerStartUnit.addAbility(SHRIFT_ABILITIES._theGluttonCargo);

            // player.team
            // player.setState()
            // print("The Giver has granted you the shrift ...", GetAbilityName(SHRIFT_ABILITIES.theUnbound));
            // print("The Giver has granted you the shrift ...", GetAbilityName(SHRIFT_ABILITIES.theGlutton));
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

/**
 * Gets all the players playing
 */
function getCurrentPlayers(){

}

function handlePlayerDisconnect(){
    // let trigger = new Trigger();

    // Players.forEach((player, index) => {
    //     if(userPlayerIndexes.some(val => val === index)){
    //         trigger.registerPlayerStateEvent(player)
    //     }
    // });   
}

