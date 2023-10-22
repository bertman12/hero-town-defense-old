import { townsCreated } from "../dynamicCreation";
import { ABILITY_ID, ITEM_ID } from "../enums";
import { MapPlayer } from "w3ts";

export const playerStates = new Map<number, PlayerState>();

//Keeps track of a particular player's state
export class PlayerState {
    artifactNames: ArtifactName[];

    constructor(public player: MapPlayer){}

    addArtifact(artifactName: keyof typeof artifactDataSheet){
        //When you add an artifact, setup the trigger for the artifact pedestal for the
    }

    initializeArtifact(artifactName: ArtifactName){
        artifactDataSheet[artifactName].artifactPedestalEquipTrigger(this.player);
    }

    removeArtifact(artifactName: keyof typeof artifactDataSheet){

    }

}

//This object will keep track of the artifact and it's associated affects

/**
 * Anything relevant to the function or what an artifact does ought to be stored here.
 */
type ArtifactName = keyof typeof artifactDataSheet;

const artifactDataSheet = {
    demonCrown: {
        artifactItemNumber: ITEM_ID.demonCrown,
        artifactCreationAbilityId: ABILITY_ID.demonCrownCreate,
        pedestalEquipAbility: ABILITY_ID.demonCrownDarkPortal,
        artifactHeroEquipTrigger: (player: MapPlayer) => null,
        artifactPedestalEquipTrigger: demonCrownPedestalEquipTrigger,
        artifactDestructionTrigger: (player: MapPlayer) => null,
    },
}

function demonCrownPedestalEquipTrigger(this: typeof artifactDataSheet.demonCrown, player: MapPlayer, ){
    //Add the dark portal ability to all towns
    print("demon crown pedestal equip trigger");
    townsCreated.forEach(town => {
        if(town.owner === player){
            town.addAbility(this.pedestalEquipAbility);
            print("Found a player owner for the town, adding demon crown ability");
        }
    })

}
