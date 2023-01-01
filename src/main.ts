import { Destructable, File, FogModifier, Group, Point, Timer, TimerDialog, Trigger, Unit, Widget, Handle, Effect } from "w3ts";
import { Players } from "w3ts/globals";
import { OrderId } from "w3ts/globals/order";
import { addScriptHook, W3TS_HOOK } from "w3ts/hooks";
import { UNIT_IDS, ZOMBIE_MUTATION_ID, SHRIFT_ABILITIES } from "enums";
import { setupAbilityTriggers } from "abilities";
import { initAttackerForces } from "enemies";
import { initializePlayers } from "players";
import { initEconomy } from "economy";
import { playStartMusic } from "music";
 
const BUILD_DATE = compiletime(() => new Date().toUTCString());
const TS_VERSION = compiletime(() => require("typescript").version);
const TSTL_VERSION = compiletime(() => require("typescript-to-lua").version);


// const unit = new Unit(Players[0], FourCC("hfoo"), 0, 0, 270);
// unit.name = "TypeScript";

// new Timer().start(1.00, true, () => {
//   unit.color = Players[math.random(0, bj_MAX_PLAYERS)].color;
// });


function tsMain() {
  print(`Build: ${BUILD_DATE}`);
  print(`Typescript: v${TS_VERSION}`);
  print(`Transpiler: v${TSTL_VERSION}`);
  print(" ");
  print("Welcome to TypeScript!");
  
  try {
    mapStart();
  } catch (error) {
    print(`An error occurred: ${error}`);
  }
}

/**
 * MVP Game idea - Cool hero zombie defense
 * Different zombies will be spawned and ordered to attack the center of the map
 * If all players die then its game over.
 * Zombies get stronger each round and some gain abilities
 */

function mapStart(){
  let clearFogState = new FogModifier(Players[0], FOG_OF_WAR_VISIBLE, 0,0, 3000, true, true)
  clearFogState.start();

  setupAbilityTriggers();
  initializePlayers();
  initEconomy();
  initAttackerForces();
  playStartMusic();
  // Players[12].setState(PLAYER_STATE_GIVES_BOUNTY, 1);
  // Players[12].name = 'Zombie Forces';
}





addScriptHook(W3TS_HOOK.MAIN_AFTER, tsMain);
