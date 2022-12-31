import { Destructable, File, FogModifier, Group, Point, Timer, TimerDialog, Trigger, Unit, Widget, Handle, Effect, TextTag } from "w3ts";
import { Players } from "w3ts/globals";
import { OrderId } from "w3ts/globals/order";
import { addScriptHook, W3TS_HOOK } from "w3ts/hooks";
import { UNIT_IDS, ZOMBIE_MUTATION_ID, SHRIFT_ABILITIES } from "enums";

/**
 * The round count will be used to modify the base zombie stats when they are spawned.
 */
let waveCount = 0;
let waveTag:TextTag = null;

export function initEnemyWaves(){
    let waveTimer = new Timer();
  
    // waveTag = new TextTag();
    // waveTag.setLifespan(30000)
    // waveTag.setPos(0,0,200);
    // waveTag.setText(`Wave: ${waveCount} `, 0, false);
    // waveTag.setLifespan(30000)
    // waveTag.setVisible(true);

    waveTimer.start(30, true, handleSpawnEnemyWave);

    // let waveTimerDialog = new TimerDialog(waveTimer);
    // print("Remaining time on the wave timer: ", waveTimer.remaining);
    // waveTimerDialog.setTimeRemaining(waveTimer.remaining);
    // waveTimerDialog.setTitle(`Time until wave ${waveCount}...`);
    // waveTimerDialog.setTimeColor(255,255,255,255);
    // waveTimerDialog.display = true;
}

function handleSpawnEnemyWave(){
    waveTag.setText(`Wave: ${waveCount} `, 0, false);

    for (let x = 0; x <= waveCount; x++) {
      spawnEnemy(UNIT_IDS.zombie);
      
      //Spawns abom every 3 waves after wave 5 and only on odd waves counts
      if((waveCount > 5) && !(waveCount%3)){
        spawnEnemy(UNIT_IDS.abomination);
      }
    }
    
    print(`Incoming wave ${waveCount}`);
    waveCount++;
}

function spawnEnemy(unitId: number){

    let unit = new Unit(Players[12], unitId, -1000,0,0);

    unit.name += ` - Round ${waveCount}`;

    unit.issuePointOrder(OrderId.Attack, new Point(0,0));

    unit.maxLife += waveCount*25;
    unit.life += waveCount*25;

    //Adds 1 armor every 2 waves
    unit.armor += Math.floor(waveCount/2);

    let randomNumber = Math.random()*10;

    if(randomNumber > 9){
      mutateEnemy(unit)
    }

}

function mutateEnemy(unit: Unit){
    print("MUTATED ZOMBIE CREATED!!!!");
  
    unit.maxLife += 600;
    
    unit.life += 600;
    
    unit.setScale(1.5, 0, 0);
  
    unit.setVertexColor(255, 0, 0, 255);
  
    unit.setAttackCooldown(0.8, 0);
  
    unit.armor += 12;
  
    unit.moveSpeed += 100;
  
    unit.name = `Mutated Zombie - Round ${waveCount}`;
}

