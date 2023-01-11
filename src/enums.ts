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
    townHall = FourCC('h004'),
    castle = FourCC('h003'),
    keep = FourCC('h007'),
    orcFortress = FourCC('ofrt'),
    orcGreatHall = FourCC('ogre'),
    orcStrongHold = FourCC('ostr'),
    orcBarracks = FourCC('obar'),
    humanBarracks = FourCC('hbar'),
    arcaneObservatory = FourCC('haro'),
}

export enum LANDMARK_IDS {
    heroicStatue = FourCC('h006'),
    heroicStatueShield = FourCC('h009'),
    theKeeper = FourCC('h008'),
}

export enum SHOP_UIDS {
    shop1 = FourCC('n002'),
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
    soul = FourCC('e001'),
    positionalTarget = FourCC('h005')
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

export enum DESTRUCTABLE_ID {
    winterTree = FourCC('WTtw'),
    summerTree = FourCC('LTlt'),
    volcano = FourCC('Volc'),
    outlandTreeWall = FourCC('OTtw'),
    
    orgrimmarGate = FourCC('YTcn'),
    //Current usage
    // rock = FourCC('B001'),
    damagedShip = FourCC('NTbd'),
    originSpawn = FourCC('B002'), 
    attemptedOriginSpawn = FourCC('B003'), 

    rock = FourCC('B004'),
    flowers = FourCC('B000'),
    // testRock = FourCC('B001'),
}



export const TERRAIN_VARIANCES = {
    1281651316 : 18,
    1281847923 : 18,
    1281847908 : 18,
    1281651303 : 18,
    1281651311 : 18,
    1282568043 : 18,
    1449357936 : 18,
    1450407024 : 2,
    1449353840 : 2,
} 

/**
 * 
 * "Terrain 0 number:, 1281651316
 * Terrain 1 number:, 1281847923Terrain 2 number:, 1281847908Terrain 3 number:, 1281651303Terrain 4 number:, 1281651311Terrain 5 number:, 1281651316
 * Terrain 6 number:, 1281651316Terrain 7 number:, 1281651316Terrain 8 number:, 12816513"
 */
// Object.freeze(ABILITY_SETS);