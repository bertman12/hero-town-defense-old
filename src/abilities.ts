import { Destructable, File, FogModifier, Group, Point, Timer, TimerDialog, Trigger, Unit, Widget, Handle, Effect, Color } from "w3ts";
import { Players } from "w3ts/globals";
import { UNIT_IDS, ZOMBIE_MUTATION_ID, SHRIFT_ABILITIES, Ability_IDS, DESTRUCTABLE_ID } from "enums";
import { OrderId } from "w3ts/globals/order";

export function setupAbilityTriggers(){
    initTheUnbound();
    initTheGlutton();
    trig_CurseOfWildGrowth();
}

function initTheUnbound(){  
    let trigger = new Trigger();
    
    trigger.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT);

    trigger.addCondition(() => {
        let castUnit = Unit.fromEvent();

        if(GetSpellAbility() === castUnit.getAbility(SHRIFT_ABILITIES.theUnbound)){
            return true;
        }

        return false
    })

    trigger.addAction(() => {
        //Select units in range of the caster;
        let castUnit = Unit.fromEvent();
        let affectedUnits = new Group()

        //Play spell effect regardless of enemies being nearby
        let spellEffect = new Effect('Abilities\Spells\Human\Thunderclap\ThunderClapCaster.mdl', GetSpellTargetX(), GetSpellTargetY());
        spellEffect.scale = castUnit.getAbilityLevel(SHRIFT_ABILITIES.theUnbound);
        spellEffect.playAnimation(ANIM_TYPE_SPELL);

        affectedUnits.enumUnitsInRange(GetSpellTargetX(), GetSpellTargetY(), 450,  () => {
            let unit = Group.getFilterUnit();
            
            if(!unit.isAlly(Players[0])){
                castUnit.damageTarget(unit.handle, 100, false, false, ATTACK_TYPE_HERO, DAMAGE_TYPE_NORMAL, WEAPON_TYPE_WHOKNOWS)
            }

            // let effect = new Effect('Abilities\Spells\Human\Thunderclap\ThunderClapCaster.mdl', GetSpellTargetX(), GetSpellTargetY());
            // effect.scale = castUnit.getAbilityLevel(SHRIFT_ABILITIES.theUnbound);
            // effect.playAnimation(ANIM_TYPE_SPELL);
            return true;    
        })
    });
}

let devouredUnits = 0;

/**
 * @todo show a tooltip of gained stats
 */
function initTheGlutton(){
    let trigger = new Trigger()
    trigger.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT);

    
    trigger.addCondition(() => {
        let castUnit = Unit.fromEvent();

        if(GetSpellAbility() === castUnit.getAbility(SHRIFT_ABILITIES.theGlutton)){
            return true;
        }

        return false;
    })

    trigger.addAction(() => {

        //Select units in range of the caster;
        let castUnit = Unit.fromEvent();

        let targetedUnit = Unit.fromHandle(GetSpellTargetUnit()); 

        devouredUnits++;

        castUnit.maxLife += Math.ceil(targetedUnit.maxLife*0.1);
        castUnit.maxMana += Math.ceil(targetedUnit.maxMana*0.1);
        castUnit.setBaseDamage(castUnit.getBaseDamage(0) + targetedUnit.getBaseDamage(0),0);
        castUnit.armor += Math.ceil(targetedUnit.armor*0.10);
        castUnit.moveSpeed += Math.ceil(targetedUnit.moveSpeed*0.1);

        // castUnit.turnSpeed -= castUnit.turnSpeed*0.1;

        castUnit.setScale(1 + devouredUnits*0.25, 0, 0);
        
    });
}

/**
 * Cast entangle on all units in an area, then spawn a tree on the unit that will kill them instantly.
 */
function trig_CurseOfWildGrowth(){

    let t  = new Trigger();

    t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT);

    t.addCondition(() => {
        let castUnit = Unit.fromEvent();

        if(GetSpellAbility() === castUnit.getAbility(Ability_IDS.curseOfWildGrowth)){
            print("Curse of wild growth used!");
            print("The caster: ",castUnit.name);

            let target = Unit.fromHandle(GetSpellTargetUnit());

            print("Curse target: ",target.name);

            return true;
        }

        return false;
    });

    t.addAction(() => {
        let castUnit = Unit.fromEvent();
        
        castUnit.setVertexColor(100, 100, 100, 255);
        print("Your soul darkens...");

        let target = Unit.fromHandle(GetSpellTargetUnit());

        //Create the tree at target
        let d = new Destructable(DESTRUCTABLE_ID.summerTree, target.x, target.y, GetLocationZ(Location(target.x, target.y)), 0, 1, 0);
        
        d.setAnim('birth');

        //Create blight at target
        SetBlight(Players[24].handle, target.x, target.y, 260, true);

        let u = new Unit(Players[24], UNIT_IDS.treant, target.x, target.y,0);
        //Make treant invulnerable
        u.invulnerable = true;
        
        u.setScale(2,0,0);

        u.name = `${new Color(255, 0,0,255).code} Demon Treant|r`;

        u.setVertexColor(50,50,50,125);
        u.setAttackCooldown(0.2, 0);

        //Play evil laugh because you are evil.
        PlaySoundOnUnitBJ(gg_snd_SargerasLaugh, 100, castUnit.handle);

        //Make treant attack the unit
        u.issueTargetOrder(OrderId.Attack, target);

        new Timer().start(6, false, () => {
            ExplodeUnitBJ(u.handle);
        })

    });

}

