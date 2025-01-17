import type { Character } from '../common';
import { Vector } from '../vector';
import type { ActionName } from '../animations/actions';
export const donkeyKong: Character = {
  scale: 1,
  shieldOffset: new Vector(2.724, 9.003), // model units // TODO
  shieldSize: 1 * 17.75, // world units
  animationMap: new Map<ActionName, string>([
    ['AppealL', 'AppealL'],
    ['AppealR', 'AppealR'],
    ['AttackS3Hi', 'AttackS3Hi'],
    ['AttackS3HiS', 'AttackS3Hi'],
    ['AttackS3Lw', 'AttackS3Lw'],
    ['AttackS3LwS', 'AttackS3Lw'],
    ['AttackS3S', 'AttackS3S'],
    ['AttackS4Hi', 'AttackS4Hi'],
    ['AttackS4HiS', 'AttackS4Hi'],
    ['AttackS4Lw', 'AttackS4Lw'],
    ['AttackS4LwS', 'AttackS4Lw'],
    ['AttackS4S', 'AttackS4S'],
    ['BarrelWait', ''],
    ['Bury', ''],
    ['BuryJump', ''],
    ['BuryWait', ''],
    ['CaptureCaptain', ''],
    ['CaptureDamageKoopa', ''],
    ['CaptureDamageKoopaAir', ''],
    ['CaptureKirby', ''],
    ['CaptureKirbyYoshi', ''],
    ['CaptureKoopa', ''],
    ['CaptureKoopaAir', ''],
    ['CaptureMewtwo', ''],
    ['CaptureMewtwoAir', ''],
    ['CaptureWaitKirby', ''],
    ['CaptureWaitKoopa', ''],
    ['CaptureWaitKoopaAir', ''],
    ['CaptureYoshi', ''],
    ['CatchDashPull', 'CatchWait'],
    ['CatchPull', 'CatchWait'],
    ['DamageBind', ''],
    ['DamageIce', ''],
    ['DamageIceJump', 'Fall'],
    ['DamageSong', ''],
    ['DamageSongRv', ''],
    ['DamageSongWait', ''],
    ['DeadDown', ''],
    ['DeadLeft', ''],
    ['DeadRight', ''],
    ['DeadUpFallHitCamera', ''],
    ['DeadUpFallHitCameraIce', ''],
    ['DeadUpFallIce', ''],
    ['DeadUpStar', ''],
    ['DeadUpStarIce', ''],
    ['DownReflect', ''],
    ['EntryEnd', 'Entry'],
    ['EntryStart', 'Entry'],
    ['Escape', 'EscapeN'],
    ['FlyReflectCeil', ''],
    ['FlyReflectWall', 'WallDamage'],
    ['Guard', 'Guard'],
    ['GuardOff', 'GuardOff'],
    ['GuardOn', 'GuardOn'],
    ['GuardReflect', 'Guard'],
    ['GuardSetOff', 'GuardDamage'],
    ['ItemParasolDamageFall', ''],
    ['ItemParasolFall', ''],
    ['ItemParasolFallSpecial', ''],
    ['ItemParasolOpen', ''],
    ['KirbyYoshiEgg', ''],
    ['KneeBend', 'Landing'],
    ['LandingFallSpecial', 'Landing'],
    ['LiftTurn', ''],
    ['LiftWait', ''],
    ['LiftWalk1', ''],
    ['LiftWalk2', ''],
    ['LightThrowAirB4', 'LightThrowAirB'],
    ['LightThrowAirF4', 'LightThrowAirF'],
    ['LightThrowAirHi4', 'LightThrowAirHi'],
    ['LightThrowAirLw4', 'LightThrowAirLw'],
    ['LightThrowB4', 'LightThrowB'],
    ['LightThrowF4', 'LightThrowF'],
    ['LightThrowHi4', 'LightThrowHi'],
    ['LightThrowLw4', 'LightThrowLw'],
    ['Rebirth', 'Entry'],
    ['RebirthWait', 'Wait'],
    ['ReboundStop', ''],
    ['RunDirect', ''],
    ['ShieldBreakDownD', 'DownBoundD'],
    ['ShieldBreakDownU', 'DownBoundU'],
    ['ShieldBreakFall', 'DamageFall'],
    ['ShieldBreakFly', ''],
    ['ShieldBreakStandD', 'DownStandD'],
    ['ShieldBreakStandU', 'DownStandU'],
    ['ShoulderedTurn', ''],
    ['ShoulderedWait', ''],
    ['ShoulderedWalkFast', ''],
    ['ShoulderedWalkMiddle', ''],
    ['ShoulderedWalkSlow', ''],
    ['SwordSwing1', 'Swing1'],
    ['SwordSwing3', 'Swing3'],
    ['SwordSwing4', 'Swing4'],
    ['SwordSwingDash', 'SwingDash'],
    ['ThrownB', ''],
    ['ThrownCopyStar', ''],
    ['ThrownF', ''],
    ['ThrownFB', ''],
    ['ThrownFF', ''],
    ['ThrownFHi', ''],
    ['ThrownFLw', ''],
    ['ThrownHi', ''],
    ['ThrownKirby', ''],
    ['ThrownKirbyStar', ''],
    ['ThrownKoopaAirB', ''],
    ['ThrownKoopaAirF', ''],
    ['ThrownKoopaB', ''],
    ['ThrownKoopaF', ''],
    ['ThrownLw', ''],
    ['ThrownLwWomen', ''],
    ['ThrownMewtwo', ''],
    ['ThrownMewtwoAir', ''],
    ['Wait', 'Wait'],
    ['YoshiEgg', ''],
  ]),
  specialsMap: new Map<number, string>([
    [351, 'ThrowFWait'],
    [352, 'ThrowFWalkSlow'],
    [353, 'ThrowFWalkMiddle'],
    [354, 'ThrowFWalkFast'],
    [355, 'ThrowFTurn'],
    [356, 'ThrowFWait'], // jump squat
    [357, 'ThrowFWait'], // fall
    [358, 'ThrowFWait'], // jump
    [359, 'ThrowFWait'], // landing
    [360, ''], // unused
    [361, 'ThrowFF'],
    [362, 'ThrowFB'],
    [363, 'ThrowFHi'],
    [364, 'ThrowFLw'],
    [365, 'ThrowFF'],
    [366, 'ThrowFB'],
    [367, 'ThrowFHi'],
    [368, 'ThrowFLw'],
    [369, 'SpecialNStart'],
    [370, 'SpecialNLoop'],
    [371, 'SpecialNCansel'],
    [372, 'SpecialN'],
    [373, 'SpecialN'],
    [374, 'SpecialAirNStart'],
    [375, 'SpecialAirNLoop'],
    [376, 'SpecialAirNCansel'],
    [377, 'SpecialAirN'],
    [378, 'SpecialAirN'],
    [379, 'SpecialS'],
    [380, 'SpecialAirS'],
    [381, 'SpecialHi'],
    [382, 'SpecialAirHi'],
    [383, 'SpecialLwStart'],
    [384, 'SpecialLwLoop'],
    [385, 'SpecialLwEnd'],
  ]),
};
