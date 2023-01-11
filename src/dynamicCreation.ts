import { TileConfig } from './models';
import { LANDMARK_IDS, TERRAIN_VARIANCES } from './enums';
import { numWorldlyEntities, TILE_WIDTH, treePointClusterConfig } from "gameConstants";
import { BUILDING_IDS, DESTRUCTABLE_ID, TERRAIN_CODE, UNIT_IDS } from "enums";
import { GeneratedEntity } from "models";
import { generateRandomName } from "utils/names";
import { createPointCluster_Simple } from "utils/points";
import { Destructable, Point, Rectangle, Timer, Unit } from "w3ts";
import { Players } from "w3ts/globals";
import { tileSets } from 'gameConstants';
import { chooseRandomEnumValue } from 'utils/enumUtils';


let initialEntitySpawn = new Point(Math.cos(180*Math.random())*16000, Math.cos(180*Math.random())*16000);

/**
 * Track all entity spawn points
 */
let entitySpawnOriginPoints:Point[] = [initialEntitySpawn];

/**
 * Track all entities during creation.
 */
const entities: GeneratedEntity[] = [];

/**
 * All destructables will be added after all terrain deformations
 */
let destructableSpawnPoints: Point[] = []

/**
 * Perhaps instead of always creating a town, we should randomly decide what to create, like landmarks, etc.
 */
export function generateWorld(){

    //Create Terrain Deformations



    //Create an finite amount of entities - add break condition if attempts get to high
    for (let x = 0; x < numWorldlyEntities; x++) {

        //Start a timer to spread the creation of entities over time
        let t = new Timer().start(1 + 0.05*x,false,() => {
            //Towns must be separated by each other by a fixed amount

            //Check every point in the array, if none of them make the new point invalid then add the point
            //Otherwise repeat the cycle
            let validPoint = true;
            
            let entity:GeneratedEntity = generateEntityType()

            do{
                //Reset to true after a full loop
                validPoint = true;

                //Compare the new point against all other points
                for (let x = 0; x < entities.length; x++) {
                    //set to entity and then use the entity tile bound radius for the next condition.
                    const pointToTest = entities[x].origin;
                    //Add condition to not select point if the comparison entity point is breaking it's boundary range 
                    if((pointToTest.x - entity.origin.x)*(pointToTest.x - entity.origin.x) + (pointToTest.y - entity.origin.y)*(pointToTest.y - entity.origin.y)  < (TILE_WIDTH*entity.tileBoundRadius)*(TILE_WIDTH*entity.tileBoundRadius)){
                        entity.origin = new Point(Math.cos(180*Math.random())*16000, Math.cos(180*Math.random())*16000);

                        validPoint = false;

                        break;
                    }
                }

            //Repeat until valid point is true
            } while (!validPoint);

            entities.push(entity);

            createEntity(entity);
            
            t.destroy();
        });
        
    }

    // print("Testing random enum value: ", chooseRandomEnumValue(BUILDING_IDS));

    //Create Destructables

}

function clearDestructableInRegion(){
    new Timer().start(8, false, () => {


        // print("Prepping to enum  destructables...");
        let rec = new Rectangle(0,0,15000,15000);

        rec.enumDestructables(() => {
            // print("In filter")
            const d = GetFilterDestructable();
            // print('Filter Destructable: ', d);
            
            return true;
        }, () => {
            // print("In action")
            const d = GetEnumDestructable();
            // Destructable.fromHandle(d).destroy();
        })
    
    });
}

function generateEntityType(){
    let randomChoiceNumber = Math.floor(Math.random()*10);

    let entity:GeneratedEntity = {
        origin: new Point(0,0),
        tileBoundRadius: 0,
        tileSetId: 0,
        treeSetId: 0,
        type: 'Town'
    }

 

    if(randomChoiceNumber >= 5){
        entity = {
            origin: new Point(Math.cos(180*Math.random())*16000, Math.cos(180*Math.random())*16000),
            type: 'Town',
            tileBoundRadius: 18,
            tileSetId: Math.floor(Math.random()*Object.keys(tileSets['Town']).length),
            treeSetId: 0
        } 
    }
    else if(randomChoiceNumber > 8){
        entity = {
            origin: new Point(Math.cos(180*Math.random())*16000, Math.cos(180*Math.random())*16000),
            type: 'Landmark',
            tileBoundRadius: 5,
            tileSetId: Math.floor(Math.random()*Object.keys(tileSets['Landmark']).length),
            treeSetId: 0
        } 
    }
    else if(randomChoiceNumber < 5){
        entity = {
            origin: new Point(Math.cos(180*Math.random())*16000, Math.cos(180*Math.random())*16000),
            type: 'Terrain Feature',
            tileBoundRadius: 30,
            tileSetId: Math.floor(Math.random()*Object.keys(tileSets['Terrain Feature']).length),
            treeSetId: 0
        } 
    }

    entity = {
        origin: new Point(Math.cos(180*Math.random())*16000, Math.cos(180*Math.random())*16000),
        type: 'Terrain Feature',
        tileBoundRadius: 30,
        tileSetId: Math.floor(Math.random()*Object.keys(tileSets['Terrain Feature']).length),
        treeSetId: 0
    } 

    return entity;
}

function createEntity(entity: GeneratedEntity){
    let createdEntity = null;

    switch (entity.type) {
        case 'Town':
            createdEntity = new Unit(Players[9], chooseRandomEnumValue(BUILDING_IDS), entity.origin.x, entity.origin.y, Math.random()*360);
            createdEntity.name = generateRandomName({town: true});
            break;
        case 'Landmark':
            createdEntity = new Unit(Players[9], chooseRandomEnumValue(LANDMARK_IDS), entity.origin.x, entity.origin.y, -90);
            createdEntity.name = generateRandomName({landmark: true});
            break;
        default:
            break;
    }

    // if(!createdEntity) print("Thing was not assigned!");

    for (let x = 0; x < 1; x++) {
        new Unit(Players[9], UNIT_IDS.footman, (entity.origin.x + 300 - 100*x), (entity.origin.y + 300 + 100*x), 0)
        new Unit(Players[9], UNIT_IDS.rifleman, (entity.origin.x - 300 + 100*x), (entity.origin.y - 300 - 100*x), 0)
    }
    
    for (let x = 0; x < 5; x++) {
        createTreeCluster(entity.origin);
    }

    /**
     * @testing maybe more performant?
     */
    // let tileSetVariantMap = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    // tileSetVariantMap.forEach((variantNumber) => {
    //     variantNumber = returnDiminishingChoice(18);
    //     print("Variant number: ", variantNumber);
    // });

    // print("Created tile variant map for entity: ", ...tileSetVariantMap);


    //Create tiles from each tile config; String interpolation
    tileSets[`${entity.type}`][entity.tileSetId].forEach((tileConfig: TileConfig) => {
        //Give the origin for the tileset creation
        tileConfig.clusterConfig.originLoc = entity.origin;
        


        for (let x = 0; x < tileConfig.pointClusterCount; x++) {
            let points = createPointCluster_Simple(tileConfig.clusterConfig);
            
            let previousVariant = null;

            points.forEach(point => {
                let randomTileVariant = returnDiminishingChoice(TERRAIN_VARIANCES[tileConfig.terrainCode]);
                
                /**
                 * @testing maybe more performant?
                 */
                // let randomTileVariant = tileSetVariantMap[Math.floor(Math.random()*TERRAIN_VARIANCES[tileConfig.terrainCode])];


                //Make the lower numbered variants more common, and others less common , otherwise it looks fucking weird in game. 
                // 75% change
                //Distribute the chance over 18 variants, 
                //variant number
                /**
                 * variant number n = 0
                 * selection chance is 100% - 1/(n + 1) 25% total chance
                 * as n increases, the chance for selection decreases
                 */

                // let randomTileVariance  = Math.floor(Math.random()*TERRAIN_VARIANCES[tileConfig.terrainCode]);
                
                // if(randomTileVariant === previousVariant){
                //     print(`Current:${randomTileVariant} is same as previous ${previousVariant}`);

                //     do {
                //         randomTileVariant = Math.floor(Math.random()*5);
                //     } while (randomTileVariant === previousVariant);
                // }
                
                previousVariant = randomTileVariant;

                SetTerrainType(point.x, point.y, tileConfig.terrainCode, randomTileVariant , tileConfig.tileArea ?? 1, 0);
            })   
        }
    });
        
    /**
     * After creating the trees we can  create the path to each town, and if there are any destructables at the path then it should be deleted to make the path valid.
     */
}

function createTreeCluster(origin: Point, treeType?: string, ){

    treePointClusterConfig.originLoc = origin;

    let points = createPointCluster_Simple(treePointClusterConfig);

    TerrainDeformCrater(points[0].x, points[0].y, 400, -(100 + Math.random()*150), 5, true);

    points.forEach(point => {
        //Start a timer to get accurate unit z location after terrain deformations
        let t = new Timer().start(1,false, () => {
            //Accurately place tree height with unit z location
            let d = new Destructable(DESTRUCTABLE_ID.summerTree, point.x, point.y, GetLocationZ(Location(point.x, point.y)), 0, 1, 0);
            t.destroy();
            d.setAnim('birth');
            let m = CreateMinimapIcon(d.x, d.y, 255, 255, 0, 'Abilities\Spells\Human\Thunderclap\ThunderClapCaster.mdl', FOG_OF_WAR_VISIBLE);
            SetMinimapIconVisible(m, true);
        });

        SetTerrainType(point.x, point.y, TERRAIN_CODE.darkGrass, 0, 2, 0);
    });
}

/**
 * very slow algorithm
 * @param numberOfChoices 
 * @returns 
 */
function returnDiminishingChoice(numberOfChoices: number){
    if(numberOfChoices < 5) return 0;
    // print("Number of choices:", numberOfChoices);
    //Random number [0, numberOfChoices], inclusive

    //The greatest the chance will be for a number item to be picked
    let maximumSuccessChance = 0.75*numberOfChoices; 

    for (let x = 0; x < numberOfChoices; x++) {
        // The selected range keeps getting smaller as you reach the higher variance numbers which means its harder for those numbers to get chosen
        let selectedRange = maximumSuccessChance/(x + 1);
        //Recalculate the random number every loop so there is a chance for other variants to be chosen
        let randNumber = Math.random()*numberOfChoices;
            
        if(randNumber < selectedRange){

            // print("Selected variant: ", x);
            // print("Selection range: ", selectedRange);
            // print("Max success chance: ", maximumSuccessChance);
            // print("The random number chosen: ", randNumber);
            
            return x;
        }
        
    }

    //Always return 0 so there is always a variant number returned back
    return 0;

    //0 -> 18 number has to be less than 18
    //1 -> 9 number has to be less than 9
    //2 -> 6 number has to be less than 6
    //3 -> 4.5 number has to be less than 4.5
    //4 -> 3.6 number has to be less than 3.6
    //17 -> 1.05 number has to be less than 1.05
    //Goal

    // 1/(randNumber + x)
    // let selectedRange = 100 * (1/(x + 1)) 
    
    // numberOfChoices/(x + 1)

    // let choiceNumber = 1/(randNumber);
    
    //The closer to 0 the greater the chance of selection
    // 13.75 75% chance for the first tile variant to be picked
    // 1/n^2
    //If number is 0 then pick a number from this large range for it to be chosen
    //If number is 5 then pick a random number in this smaller range for it to be chosen
    //If its not chosen then find the number above it and try to pick that number, continue process until 0 is reached.

    //Make the lower numbered variants more common, and others less common , otherwise it looks fucking weird in game. 
    // 75% change
    //Distribute the chance over 18 variants, 
    //variant number
    /**
     * variant number n = 0
     * selection chance is 100% - 1/(n + 1) 25% total chance
     * as n increases, the chance for selection decreases
     * 
     * We have to return a number from the set of choices, so how does the random number translate to the available choice numbers?
     */
}