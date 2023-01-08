import { Destructable, File, FogModifier, Group, Point, Timer, TimerDialog, Trigger, Unit, Widget, Handle, Effect, MapPlayer, Region, Rectangle, Color } from "w3ts";
import { Players } from "w3ts/globals";
import { OrderId } from "w3ts/globals/order";
import { addScriptHook, W3TS_HOOK } from "w3ts/hooks";
import { UNIT_IDS, ZOMBIE_MUTATION_ID, SHRIFT_ABILITIES, PLAYER_HERO_ID, CUSTOM_UID, BUILDING_IDS, TERRAIN_CODE } from "enums";
import { PointClusterConfig } from "models";
import { createPointCluster_Simple } from "utils/points";

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

let testSpawn = new Point(7150, -2150);

const treePointClusterConfig: PointClusterConfig = {
    numberOfPoints: 10,
    minTileDistanceFromOrigin: 5,
    maxTileDistanceTiles: 10,
    originLoc: new Point(testSpawn.x, testSpawn.y)
}

export function initializePlayers(){
    
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

    for (let x = 0; x < 15; x++) {
        autoGenerateTown()
    }
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



function autoGenerateTown(){
    let townHall = new Unit(Players[9], BUILDING_IDS.townHall, testSpawn.x, testSpawn.y, 0);
    
    if(townHall.isUnitType(UNIT_TYPE_STRUCTURE)) townHall.name += ` - ${new Color(255, 100, 0).code}Structure|r \nTest new line`;

    for (let x = 0; x < 3; x++) {
        new Unit(Players[9], UNIT_IDS.footman, (testSpawn.x + 300 - 100*x), (testSpawn.y + 300 + 100*x), 0)
        new Unit(Players[9], UNIT_IDS.rifleman, (testSpawn.x - 300 + 100*x), (testSpawn.y - 300 - 100*x), 0)
    }
    
    // checkTerrainRegion(4, new Point(0,0))
    // checkTerrainRegion(0, new Point(0,0))
    // checkTerrainRegion(1, new Point(0,0))
    // checkTerrainRegion(3, new Point(0,0))
    // checkTerrainRegion(9, new Point(0,0))
    // checkTerrainRegion(16, new Point(0,0));
    
    createTreeCluster();
    createTreeCluster();
    createTreeCluster();
    createTreeCluster();
    
    // printTerrainTypes();

    //At the end of every town creation, test spawn coords change.
    testSpawn = new Point(3600 + Math.random()*12500, Math.cos(180*Math.random())*10000);
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

function createTreeCluster(){
    treePointClusterConfig.originLoc = testSpawn;

    let points = createPointCluster_Simple(treePointClusterConfig);

    points.forEach(point => {
        new Destructable(FourCC('LTlt'), point.x, point.y, 500, 0, 1, 0);
        SetTerrainType(point.x, point.y, TERRAIN_CODE.darkGrass, 0, 2, 0);
    });
}




/**
 * Creates a cluster of units centered around a given location.
 */
function createUnitCluster(){

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