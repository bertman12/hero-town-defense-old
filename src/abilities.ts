import { Destructable, File, FogModifier, Group, Point, Timer, TimerDialog, Trigger, Unit, Widget, Handle, Effect } from "w3ts";
import { Players } from "w3ts/globals";
import { UNIT_IDS, ZOMBIE_MUTATION_ID, SHRIFT_ABILITIES } from "enums";

export function setupAbilityTriggers(){
    initTheUnbound();
    initTheGlutton();
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



