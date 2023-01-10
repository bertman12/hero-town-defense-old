import { numWorldlyEntities, TILE_WIDTH, treePointClusterConfig } from "constants";
import { BUILDING_IDS, DESTRUCTABLE_ID, TERRAIN_CODE, UNIT_IDS } from "enums";
import { GeneratedEntity } from "models";
import { generateRandomName } from "utils/names";
import { createPointCluster_Simple } from "utils/points";
import { Destructable, Point, Rectangle, Timer, Unit } from "w3ts";
import { Players } from "w3ts/globals";


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

let _enumKeys: string[];

/**
 * Perhaps instead of always creating a town, we should randomly decide what to create, like landmarks, etc.
 */
export function generateWorld(){

    _enumKeys = Object.keys(BUILDING_IDS);

    _enumKeys = _enumKeys.filter(val => {
        print('Val = ', val);
        print("The test ", typeof +val);
        return typeof +val === 'string';
    });

    //Create an finite amount of entities - add break condition if attempts get to high
    for (let x = 0; x < numWorldlyEntities; x++) {

        //Start a timer to spread the creation of entities over time
        let t = new Timer().start(1 + 0.05*x,false,() => {
            //Towns must be separated by each other by a fixed amount

            //Check every point in the array, if none of them make the new point invalid then add the point
            //Otherwise repeat the cycle
            let validPoint = true;

            let randomChoiceNumber = Math.floor(Math.random()*10);
            
            let entity:GeneratedEntity = {
                origin: new Point(0,0),
                tileBoundRadius: 0,
                tileSetId: 0,
                treeSetId: 0,
                type: 'Town' 
            }

            if(randomChoiceNumber >= 2){
                entity = {
                    origin: new Point(Math.cos(180*Math.random())*16000, Math.cos(180*Math.random())*16000),
                    type: 'Town',
                    tileBoundRadius: 18,
                    tileSetId: 0,
                    treeSetId: 0
                } 
            }
            else{
                print("Landmark entity selected!");
                entity = {
                    origin: new Point(Math.cos(180*Math.random())*16000, Math.cos(180*Math.random())*16000),
                    type: 'Landmark',
                    tileBoundRadius: 5,
                    tileSetId: 0,
                    treeSetId: 0
                } 
            }
            
            do{
                //Reset to true after a full loop
                validPoint = true;

                //Compare the new point against all other points
                for (let x = 0; x < entities.length; x++) {
                    const pointToTest = entities[x].origin;

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

function createEntity(entity: GeneratedEntity){
    // let choice = Math.floor(Math.random()*10); 
    let thing = null;

    switch (entity.type) {
        case 'Town':
            thing = new Unit(Players[9], BUILDING_IDS.townHall, entity.origin.x, entity.origin.y, Math.random()*360);
            thing.name = generateRandomName({town: true});
            break;
        case 'Landmark':
            print("Making landmark");
            thing = new Unit(Players[9], BUILDING_IDS.heroicStatue, entity.origin.x, entity.origin.y, -90);
            thing.name = generateRandomName({landmark: true});
            break;
        default:
            break;
    }

    if(!thing) print("Thing was not assigned!");

    let points = createPointCluster_Simple({
        minTileDistanceFromOrigin: 1,
        maxTileDistanceTiles:5,
        numberOfPoints: 20,
        originLoc: entity.origin
    });
    
    for (let x = 0; x < 3; x++) {
        points = createPointCluster_Simple({
            minTileDistanceFromOrigin: 1,
            maxTileDistanceTiles:5,
            numberOfPoints: 20,
            originLoc: entity.origin
        });

        //Create rough dirt area around town spawn
        points.forEach(point => {
            SetTerrainType(point.x, point.y, TERRAIN_CODE.roughDirt, 0, 1, 0);
        });
    }

    for (let x = 0; x < 3; x++) {
        points = createPointCluster_Simple({
            minTileDistanceFromOrigin: 1,
            maxTileDistanceTiles:5,
            numberOfPoints: 20,
            originLoc: entity.origin
        });
    
        //Create grassy dirt around town
        points.forEach(point => {
            SetTerrainType(point.x, point.y, TERRAIN_CODE.grassyDirt, 0, 1, 0);
        });

    }

    for (let x = 0; x < 3; x++) {
        points = createPointCluster_Simple({
            minTileDistanceFromOrigin: 1,
            maxTileDistanceTiles:5,
            numberOfPoints: 20,
            originLoc: entity.origin
        });
    
        //Create grass around town
        points.forEach(point => {
            SetTerrainType(point.x, point.y, TERRAIN_CODE.grass, 0, 1, 0);
        });

    }

    for (let x = 0; x < 3; x++) {
        points = createPointCluster_Simple({
            minTileDistanceFromOrigin: 0,
            maxTileDistanceTiles:2,
            numberOfPoints: 20,
            originLoc: entity.origin
        });
    
        //Create cobble around town
        points.forEach(point => {
            SetTerrainType(point.x, point.y, TERRAIN_CODE.stonePath, 0, 1, 0);
        });

    }


    for (let x = 0; x < 3; x++) {
        new Unit(Players[9], UNIT_IDS.footman, (entity.origin.x + 300 - 100*x), (entity.origin.y + 300 + 100*x), 0)
        new Unit(Players[9], UNIT_IDS.rifleman, (entity.origin.x - 300 + 100*x), (entity.origin.y - 300 - 100*x), 0)
    }
    
    for (let x = 0; x < 5; x++) {
        createTreeCluster(entity.origin);
    }
    
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

