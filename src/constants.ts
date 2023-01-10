import { PointClusterConfig } from "models";
import { Point } from "w3ts";

let testSpawn = new Point(7150, -2150);

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

export const numWorldlyEntities = 150;

