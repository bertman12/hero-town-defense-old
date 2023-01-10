import { DESTRUCTABLE_ID } from './enums';
import { Destructable, File, FogModifier, Group, Point, Timer, TimerDialog, Trigger, Unit, Widget, Handle, Effect, MapPlayer, Region, Rectangle, Color } from "w3ts";
import { Players } from "w3ts/globals";
import { OrderId } from "w3ts/globals/order";
import { addScriptHook, W3TS_HOOK } from "w3ts/hooks";
import { UNIT_IDS, ZOMBIE_MUTATION_ID, SHRIFT_ABILITIES, PLAYER_HERO_ID, CUSTOM_UID, BUILDING_IDS, TERRAIN_CODE } from "enums";
import { PointClusterConfig } from "models";
import { createPointCluster_Simple } from "utils/points";
import { TILE_WIDTH, treePointClusterConfig, numWorldlyEntities } from "constants";
import { generateRandomName } from 'utils/names';
import { generateWorld } from 'dynamicCreation';

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

let townSpawn = new Point(7150, -2150);

let townSpawnPoints:Point[] = [townSpawn];


export function initializePlayers(){
    SetCinematicCameraForPlayer(Players[0].handle, '');

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

    print("Camera X bound",GetCameraBoundMaxX())
    print("Camera Y bound",GetCameraBoundMaxY())
    
   
    generateWorld();
}

//MOve camera too
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

function printTerrainTypes(){
    //DIRT: 1281651316
    const startNumber = 1281651316;
    let terrainNumber = GetTerrainType(7100, 1500)
    print("Dirt terrain number: ", terrainNumber);

    let dataString = '';

    for (let x = 0; x < 10; x++) {
        // SetTerrainType(7100 + 260*x, 1500, 0, 0, 300, 0)
        let terrainNumber = GetTerrainType(7100 + 260*x, 1500)
        print(`Terrain ${x} number:`, terrainNumber);
        dataString += `Terrain ${x} number:, ${terrainNumber}`
        // Write to the file
    }
    // Terrain

    File.write("terrainCodes_test.txt", dataString);
}

/**
 * Checks if the terrain region is buildable
 * 
 */
function checkTerrainRegion(squareTileArea, originLoc: Point){
    if((Math.sqrt(squareTileArea) % 1) > 0){
        print(`Invalid square tile area: ${squareTileArea}`);
    }
    print(`Remainder of sqrt ${squareTileArea} : `,(Math.sqrt(squareTileArea) % 1));

    //3135 3265    130units wide? -> 1 tile
    //I have a building that consume 4x4 tiles

    /**
     * Then I need to check the center spawn position - 2tiles left(260units  + 130 safety) and the same for the right, top , and bottom
     */


}