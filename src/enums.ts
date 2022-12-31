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
    
    footman = FourCC('hfoo'),
    sapper = FourCC('ngsp'),
    // paladin = FourCC('Hpal'),

    zombie = FourCC('n000'),
    abomination = FourCC('u000'),
    // customPaladin = FourCC('H000'),
    // theGlutton = FourCC('H001'),
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

// Object.freeze(ABILITY_SETS);