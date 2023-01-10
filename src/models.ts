import { Point } from "w3ts";
import { UNIT_IDS, BUILDING_IDS, DESTRUCTABLE_ID, TERRAIN_CODE, CUSTOM_UID } from "enums";

export interface PointClusterConfig {
    originLoc: Point, 
    minTileDistanceFromOrigin: number, 
    maxTileDistanceTiles: number, 
    numberOfPoints: number,
}

export interface GeneratedEntity {
    /**
     * Controls what kind of will be created.
     */
    type: 'Town' | 'Landmark' | 'Boss' | 'Unit' | 'Camp' | 'Shop'
    /**
     * The boundary which defines where no other entity can be created
     * Perhaps should be calculated based on the point cluster config used to create the entity, it would make sense anyways
     */
    tileBoundRadius: number,
    origin: Point,
    /**
     * Controls what tile types spawn around the entity
     * 
     * The set willl be of 
     */
    tileSetId: number,
    /**
     * Controls what trees spawn around the entity
     */
    treeSetId: number,
}

export interface TileSetType{
    terrainCodes: number[],
}
