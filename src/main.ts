import { Destructable, File, FogModifier, Group, Point, Timer, TimerDialog, Trigger, Unit, Widget, Handle, Effect, Frame } from "w3ts";
import { Players } from "w3ts/globals";
import { OrderId } from "w3ts/globals/order";
import { addScriptHook, W3TS_HOOK } from "w3ts/hooks";
import { UNIT_IDS, ZOMBIE_MUTATION_ID, SHRIFT_ABILITIES, DESTRUCTABLE_ID, TERRAIN_CODE } from "enums";
import { setupAbilityTriggers } from "abilities";
import { initAttackerForces } from "enemies";
import { initializePlayers } from "players";
import { initEconomy } from "economy";
import { playStartMusic } from "music";
import { generateWorld } from "dynamicCreation";
import { printTerrainTypes } from "utils/terrain";
 
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

  // TerrainDeformCrater(0, 0, 1000, 1000, 5, true);
  // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,,0,0,0,0,0,0,0,0,0,0,].forEach((_, index) => {
  //   print(index);
  //   let d = new Destructable(DESTRUCTABLE_ID.testRock, 0, 0, 800, 0, 5, index);
  // })

  // InitAI();
  // SetMeleeAI();

  try {
    let startTimer = new Timer();
    SetDefaultDifficulty(MAP_DIFFICULTY_INSANE);

    print("The Good Lord Gaben said let there be light, and there was light!");
    
    // printTerrainTypes();


    startTimer.start(1, false, mapStart)

    // SetBlightRadiusLocBJ(true, Players[0].handle, Location(0,0), 500)
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
  StopMusic(false);

  let clearFogState = new FogModifier(Players[0], FOG_OF_WAR_VISIBLE, 0,0, 25000, true, true)
  DisplayCineFilterBJ(true);
  clearFogState.start();
  clearFogState.destroy();
  SetTimeOfDay(10);
  // const buttonFrame = new Frame("Button Test", Frame.fromOrigin(ORIGIN_FRAME_GAME_UI, 0), 0, 0, "GLUEBUTTON", "");
  // buttonFrame.setVisible(true);

  // BlzCreateFrame("Test", )

  setupAbilityTriggers();
  initializePlayers();
  initEconomy();
  generateWorld();
  playStartMusic();

  new Timer().start(20, false, initAttackerForces);

  // initAttackerForces();
  // Players[12].setState(PLAYER_STATE_GIVES_BOUNTY, 1);
  // Players[12].name = 'Zombie Forces';
}

addScriptHook(W3TS_HOOK.MAIN_AFTER, tsMain);
