import { Destructable, Timer, Unit } from "w3ts";
import { Players } from "w3ts/globals";
import { addScriptHook, W3TS_HOOK } from "w3ts/hooks";

const BUILD_DATE = compiletime(() => new Date().toUTCString());
const TS_VERSION = compiletime(() => require("typescript").version);
const TSTL_VERSION = compiletime(() => require("typescript-to-lua").version);

function tsMain() {
  print(`Build: ${BUILD_DATE}`);
  print(`Typescript: v${TS_VERSION}`);
  print(`Transpiler: v${TSTL_VERSION}`);
  print(" ");
  print("Welcome to TypeScript!");
  
  const unit = new Unit(Players[0], FourCC("hfoo"), 0, 0, 270);
  unit.name = "TypeScript";
  
  new Timer().start(1.00, true, () => {
    unit.color = Players[math.random(0, bj_MAX_PLAYERS)].color;
    if(unit.life < 300){
      print("Unit is dead!", unit);
      unit.maxMana = 500;
      unit.life++;
      print("Unit life incremented: ",unit.life);
    }
  });

  // try {
  //   createCoolAbility(unit);
  // } catch (error) {
  //   print(`There was a problem with creating the cool ability! ... ${error}`)    
  // }

  generateTerrain();
  createSuperFootman();
}

enum BASE_UNIT_IDS {
  footman =- FourCC('hfoo')
}

function generateTerrain(){
  for (let x = 0; x < 10; x++) {
    CreateDestructable(FourCC('ZTd3'), 100*x, 100*x, 0, 1, 0);   
  }
}

function createCoolAbility(unit){
  let ab = BlzGetUnitAbility(unit, 0);
  print("The ability: ", ab);
}

function createSuperFootman(){
  const _unit = new Unit(Players[0], BASE_UNIT_IDS.footman, 0, 0, 270);
  _unit.setScale(2,2,0);
  _unit.setBaseDamage(200, 0);
  _unit.maxLife += 1000;
  _unit.maxMana += 1000;
  print(_unit.skin);
  // unit.skin += 1;
  print(_unit.skin);
  print("Super footman created!");
  const trig = CreateTrigger();

  CreateUnit(Players[0],'hfoo',100,100,0);

  TriggerRegisterUnitEvent(trig, _unit, EVENT_UNIT_ISSUED_TARGET_ORDER);
  TriggerAddAction(trig, () => {

  })
}

addScriptHook(W3TS_HOOK.MAIN_AFTER, tsMain);



