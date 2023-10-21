import { Destructable, File, FogModifier, Group, Point, Timer, TimerDialog, Trigger, Unit, Widget, Handle, Effect, Frame } from "w3ts";
import { Players } from "w3ts/globals";
import { OrderId } from "w3ts/globals/order";
import { addScriptHook, W3TS_HOOK } from "w3ts/hooks";
import { UNIT_IDS, ZOMBIE_MUTATION_ID, SHRIFT_ABILITIES, DESTRUCTABLE_ID, TERRAIN_CODE, ABILITY_ID } from "enums";
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

function tsMain() {
  print(`Build: ${BUILD_DATE}`);
  print(`Typescript: v${TS_VERSION}`);
  print(`Transpiler: v${TSTL_VERSION}`);
  print(" ");
  // print("Welcome to TypeScript!");

  print("Map created by JediMindTrix/Nihilism_Is_Death");

  //Works
  // SetCameraBounds(-1200,-1200,-1200,1200, 1200, 1200, 1200, -1200);

  try {
    let startTimer = new Timer();

    SetDefaultDifficulty(MAP_DIFFICULTY_INSANE);

    print("The Good Lord Gaben said let there be light, and there was light!");

    // printTerrainTypes();

    startTimer.start(5, false, mapStart)

    // SetBlightRadiusLocBJ(true, Players[0].handle, Location(0,0), 500)

  } catch (error) {
    print(`An error occurred: ${error}`);
  }
}

function mapStart(){
  StopMusic(false);
  
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
}

addScriptHook(W3TS_HOOK.MAIN_AFTER, tsMain);
