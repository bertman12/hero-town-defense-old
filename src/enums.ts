/**
 * The different types a zombie can mutate into.
 */
export enum ZOMBIE_MUTATION_ID { 
    rage = 0
}

export enum PLAYER_HERO_ID  {
    theGlutton = FourCC('H001'),
}

export enum UNIT_IDS {
    rifleman = FourCC('hrif'),
    footman = FourCC('hfoo'),
    sapper = FourCC('ngsp'),
    // paladin = FourCC('Hpal'),

    zombie = FourCC('n000'),
    abomination = FourCC('u000'),
    // customPaladin = FourCC('H000'),
    // theGlutton = FourCC('H001'),
}

export enum BUILDING_IDS {
    townHall = FourCC('h004')
}

export enum SHRIFT_ABILITIES {
    //"U" The unbound
    theUnbound = FourCC('A000'),
    //"G" The glutton - adds all the stats of the devoured target to the user.
    theGlutton = FourCC("A001"),
    _theGluttonCargo = FourCC("A002"),
    //"F" - spawn trees that stun units, then treants spawn.
    // theForest = FourCC("A001"),
}

export const ABILITY_SETS = {
    A : [SHRIFT_ABILITIES.theGlutton, SHRIFT_ABILITIES.theUnbound]
}

/**
 * Custom unit ids
 */
export enum CUSTOM_UID {
    soul = FourCC('e001')
}

export enum TERRAIN_CODE {
    //Lordaeron Summer - 12 prefix
    dirt = 1281651316,
    grass = 1281847923,
    darkGrass = 1281847908,
    grassyDirt = 1281651303,
    roughDirt = 1281651311,
    rocks = 1282568043,
    //Village Tileset - 14 prefix
    stonePath = 1450407024,
    cobblePath = 1449353840,
    crops = 1449357936
}

export enum SHAPE_CODE {
    circle = 0,
    square = 0,
}

/**
 * 
 * "Terrain 0 number:, 1281651316
 * Terrain 1 number:, 1281847923Terrain 2 number:, 1281847908Terrain 3 number:, 1281651303Terrain 4 number:, 1281651311Terrain 5 number:, 1281651316
 * Terrain 6 number:, 1281651316Terrain 7 number:, 1281651316Terrain 8 number:, 12816513"
 */
// Object.freeze(ABILITY_SETS);