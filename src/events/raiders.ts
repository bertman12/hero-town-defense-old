import { generateRandomName } from '../utils/names';
import { UNIT_IDS } from "../enums";
import { getRandomPointInMap, getRandomScalarDirection } from "../utils/points";
import { Group, Item, Point, Timer, Unit } from "w3ts";
import { Players } from "w3ts/globals";
import { OrderId } from "w3ts/globals/order";

/**
 * @todo in the future, configure the number of units spawned based on map time/player state.
 */
export function spawnRaiders(){
    let spawn = getRandomPointInMap(); 
    
    let g = new Group();

    let bl = new Unit(Players[20], UNIT_IDS.banditLord, spawn.x, spawn.y, 0);
    
    let bl_name = generateRandomName('Unit');

    bl.name += ` ${bl_name}`;

    //cloak of flames    
    bl.addItemById(FourCC('clfm'));
    //orb of darkness
    bl.addItemById(FourCC('odef'));

    g.addUnit(bl);

    for (let x = 0; x < 5; x++) {
        g.addUnit(new Unit(Players[20], UNIT_IDS.bandit, spawn.x, spawn.y, 0));
    }

    for (let x = 0; x < 3; x++) {
        g.addUnit(new Unit(Players[20], UNIT_IDS.banditBrigand, spawn.x, spawn.y, 0));
    }
    
    for (let x = 0; x < 2; x++) {
        g.addUnit(new Unit(Players[20], UNIT_IDS.banditAssassin, spawn.x, spawn.y, 0));
    }
    
    let firstAttackPoint = getRandomPointInMap();
    
    g.orderPoint(OrderId.Attack, firstAttackPoint);

    new Timer().start(10 + Math.floor(Math.random()*10) , true, () => {
        print(`Lord ${bl_name} and his raiders are pillaging the lands!`);
        g.orderPoint(OrderId.Attack, getRandomPointInMap());
    });

}