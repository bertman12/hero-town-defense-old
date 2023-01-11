import { EntityType, TileConfig } from './models';
import { PointClusterConfig } from "models";
import { Point } from "w3ts";
import { TERRAIN_CODE } from "enums";
import { createPointCluster_Simple } from "utils/points";

let testSpawn = new Point(7150, -2150);

const DEFAULT_ORIGIN = new Point(0,0);

/**
 * Size in units of attack range
 */
export const TILE_WIDTH = 130;

export const treePointClusterConfig: PointClusterConfig = {
    numberOfPoints: 10,
    minTileDistanceFromOrigin: 5,
    maxTileDistanceTiles: 10,
    originLoc: new Point(testSpawn.x, testSpawn.y)
}

/**
 * The number of entities to be spawned at game creation time
 */
export const numWorldlyEntities = 50;

/**
 * Tile sets describe what tile will be used as well as quantity and distance from a point
 */
export const tileSets:{[key:string]:{[key:string]: TileConfig[]}} = {
    //Tile set type
    Town: {
        //Tile set variation
        0: [
            {
                tileConfigId: 0,
                terrainCode: TERRAIN_CODE.grass,
                tileVariations: 0,
                clusterConfig: {
                    minTileDistanceFromOrigin: 1,
                    maxTileDistanceTiles:5,
                    numberOfPoints: 20,
                    originLoc: DEFAULT_ORIGIN
                },
                //The number of time this tile cluster will be created
                pointClusterCount: 3
            },
            {
                tileConfigId: 0,
                terrainCode: TERRAIN_CODE.roughDirt,
                tileVariations: 0,
                clusterConfig: {
                    minTileDistanceFromOrigin: 1,
                    maxTileDistanceTiles:5,
                    numberOfPoints: 20,
                    originLoc: DEFAULT_ORIGIN
                },
                //The number of time this tile cluster will be created
                pointClusterCount: 3
            },
            {
                tileConfigId: 0,
                terrainCode: TERRAIN_CODE.grassyDirt,
                tileVariations: 0,
                clusterConfig: {
                    minTileDistanceFromOrigin: 1,
                    maxTileDistanceTiles:5,
                    numberOfPoints: 20,
                    originLoc: DEFAULT_ORIGIN
                },
                //The number of time this tile cluster will be created
                pointClusterCount: 3
            },
            {
                tileConfigId: 0,
                terrainCode: TERRAIN_CODE.stonePath,
                tileVariations: 0,
                clusterConfig: {
                    minTileDistanceFromOrigin: 0,
                    maxTileDistanceTiles:2,
                    numberOfPoints: 20,
                    originLoc: DEFAULT_ORIGIN
                },
                //The number of time this tile cluster will be created
                pointClusterCount: 3
            },
            {
                tileConfigId: 0,
                terrainCode: TERRAIN_CODE.crops,
                tileVariations: 0,
                clusterConfig: {
                    minTileDistanceFromOrigin: 4,
                    maxTileDistanceTiles:5,
                    numberOfPoints: 3,
                    originLoc: DEFAULT_ORIGIN
                },
                //The number of time this tile cluster will be created
                pointClusterCount: 1,
                tileArea: 2

            },
        ],
        //Tile set variation
        1: [
            {
                tileConfigId: 0,
                terrainCode: TERRAIN_CODE.grass,
                tileVariations: 0,
                clusterConfig: {
                    minTileDistanceFromOrigin: 1,
                    maxTileDistanceTiles:5,
                    numberOfPoints: 20,
                    originLoc: DEFAULT_ORIGIN
                },
                //The number of time this tile cluster will be created
                pointClusterCount: 3
            },
            {
                tileConfigId: 0,
                terrainCode: TERRAIN_CODE.roughDirt,
                tileVariations: 0,
                clusterConfig: {
                    minTileDistanceFromOrigin: 1,
                    maxTileDistanceTiles:5,
                    numberOfPoints: 20,
                    originLoc: DEFAULT_ORIGIN
                },
                //The number of time this tile cluster will be created
                pointClusterCount: 4
            },
            {
                tileConfigId: 0,
                terrainCode: TERRAIN_CODE.grassyDirt,
                tileVariations: 0,
                clusterConfig: {
                    minTileDistanceFromOrigin: 1,
                    maxTileDistanceTiles:5,
                    numberOfPoints: 20,
                    originLoc: DEFAULT_ORIGIN
                },
                //The number of time this tile cluster will be created
                pointClusterCount: 3
            },
            {
                tileConfigId: 0,
                terrainCode: TERRAIN_CODE.crops,
                tileVariations: 0,
                clusterConfig: {
                    minTileDistanceFromOrigin: 4,
                    maxTileDistanceTiles:5,
                    numberOfPoints: 3,
                    originLoc: DEFAULT_ORIGIN
                },
                //The number of time this tile cluster will be created
                pointClusterCount: 1,
                tileArea: 2

            },
        ],
        //Tile set variation
        2: [
            {
                tileConfigId: 0,
                terrainCode: TERRAIN_CODE.grass,
                tileVariations: 0,
                clusterConfig: {
                    minTileDistanceFromOrigin: 1,
                    maxTileDistanceTiles:5,
                    numberOfPoints: 20,
                    originLoc: DEFAULT_ORIGIN
                },
                //The number of time this tile cluster will be created
                pointClusterCount: 3
            },
            {
                tileConfigId: 0,
                terrainCode: TERRAIN_CODE.roughDirt,
                tileVariations: 0,
                clusterConfig: {
                    minTileDistanceFromOrigin: 1,
                    maxTileDistanceTiles:5,
                    numberOfPoints: 20,
                    originLoc: DEFAULT_ORIGIN
                },
                //The number of time this tile cluster will be created
                pointClusterCount: 4
            },
            {
                tileConfigId: 0,
                terrainCode: TERRAIN_CODE.grassyDirt,
                tileVariations: 0,
                clusterConfig: {
                    minTileDistanceFromOrigin: 1,
                    maxTileDistanceTiles:5,
                    numberOfPoints: 20,
                    originLoc: DEFAULT_ORIGIN
                },
                //The number of time this tile cluster will be created
                pointClusterCount: 3
            },
        ],
        3: [
            {
                tileConfigId: 0,
                terrainCode: TERRAIN_CODE.grass,
                tileVariations: 0,
                clusterConfig: {
                    minTileDistanceFromOrigin: 1,
                    maxTileDistanceTiles:5,
                    numberOfPoints: 20,
                    originLoc: DEFAULT_ORIGIN
                },
                //The number of time this tile cluster will be created
                pointClusterCount: 3
            },
            {
                tileConfigId: 0,
                terrainCode: TERRAIN_CODE.roughDirt,
                tileVariations: 0,
                clusterConfig: {
                    minTileDistanceFromOrigin: 1,
                    maxTileDistanceTiles:5,
                    numberOfPoints: 20,
                    originLoc: DEFAULT_ORIGIN
                },
                //The number of time this tile cluster will be created
                pointClusterCount: 3
            },
            {
                tileConfigId: 0,
                terrainCode: TERRAIN_CODE.grassyDirt,
                tileVariations: 0,
                clusterConfig: {
                    minTileDistanceFromOrigin: 1,
                    maxTileDistanceTiles:5,
                    numberOfPoints: 20,
                    originLoc: DEFAULT_ORIGIN
                },
                //The number of time this tile cluster will be created
                pointClusterCount: 3
            },
            {
                tileConfigId: 0,
                terrainCode: TERRAIN_CODE.stonePath,
                tileVariations: 0,
                clusterConfig: {
                    minTileDistanceFromOrigin: 0,
                    maxTileDistanceTiles:2,
                    numberOfPoints: 20,
                    originLoc: DEFAULT_ORIGIN
                },
                //The number of time this tile cluster will be created
                pointClusterCount: 3
            },
        ],
    },

    Landmark: {
        //Tile set variation
        0: [
            {
                tileConfigId: 0,
                terrainCode: TERRAIN_CODE.grass,
                tileVariations: 0,
                clusterConfig: {
                    minTileDistanceFromOrigin: 1,
                    maxTileDistanceTiles:5,
                    numberOfPoints: 20,
                    originLoc: DEFAULT_ORIGIN
                },
                //The number of time this tile cluster will be created
                pointClusterCount: 3
            },
            {
                tileConfigId: 0,
                terrainCode: TERRAIN_CODE.cobblePath,
                tileVariations: 0,
                clusterConfig: {
                    minTileDistanceFromOrigin: 0,
                    maxTileDistanceTiles:2,
                    numberOfPoints: 20,
                    originLoc: DEFAULT_ORIGIN
                },
                //The number of time this tile cluster will be created
                pointClusterCount: 2
            }
        ],
        //Tile set variation
        1: [
            {
                tileConfigId: 0,
                terrainCode: TERRAIN_CODE.grass,
                tileVariations: 0,
                clusterConfig: {
                    minTileDistanceFromOrigin: 1,
                    maxTileDistanceTiles:5,
                    numberOfPoints: 20,
                    originLoc: DEFAULT_ORIGIN
                },
                //The number of time this tile cluster will be created
                pointClusterCount: 3
            },
            {
                tileConfigId: 0,
                terrainCode: TERRAIN_CODE.roughDirt,
                tileVariations: 0,
                clusterConfig: {
                    minTileDistanceFromOrigin: 0,
                    maxTileDistanceTiles:2,
                    numberOfPoints: 20,
                    originLoc: DEFAULT_ORIGIN
                },
                //The number of time this tile cluster will be created
                pointClusterCount: 2
            }
        ],
        //Tile set variation
        2: [
            {
                tileConfigId: 0,
                terrainCode: TERRAIN_CODE.grass,
                tileVariations: 0,
                clusterConfig: {
                    minTileDistanceFromOrigin: 1,
                    maxTileDistanceTiles:5,
                    numberOfPoints: 20,
                    originLoc: DEFAULT_ORIGIN
                },
                //The number of time this tile cluster will be created
                pointClusterCount: 3
            },
            
        ],
    },
    'Terrain Feature' : {
        0: [
            {
                tileConfigId: 0,
                terrainCode: TERRAIN_CODE.grass,
                tileVariations: 0,
                clusterConfig: {
                    minTileDistanceFromOrigin: 0,
                    maxTileDistanceTiles:26,
                    numberOfPoints: 50,
                    originLoc: DEFAULT_ORIGIN
                },
                //The number of time this tile cluster will be created
                pointClusterCount: 150,
                tileArea: 1
            },
            {
                tileConfigId: 0,
                terrainCode: TERRAIN_CODE.darkGrass,
                tileVariations: 0,
                clusterConfig: {
                    minTileDistanceFromOrigin: 0,
                    maxTileDistanceTiles:26,
                    numberOfPoints: 30,
                    originLoc: DEFAULT_ORIGIN
                },
                //The number of time this tile cluster will be created
                pointClusterCount: 25,
                tileArea: 1
            },
            {
                tileConfigId: 0,
                terrainCode: TERRAIN_CODE.grassyDirt,
                tileVariations: 0,
                clusterConfig: {
                    minTileDistanceFromOrigin: 0,
                    maxTileDistanceTiles:26,
                    numberOfPoints: 15,
                    originLoc: DEFAULT_ORIGIN
                },
                //The number of time this tile cluster will be created
                pointClusterCount: 10
            },
            {
                tileConfigId: 0,
                terrainCode: TERRAIN_CODE.roughDirt,
                tileVariations: 0,
                clusterConfig: {
                    minTileDistanceFromOrigin: 0,
                    maxTileDistanceTiles:26,
                    numberOfPoints: 15,
                    originLoc: DEFAULT_ORIGIN
                },
                //The number of time this tile cluster will be created
                pointClusterCount: 10
            },
        ]
    }
}