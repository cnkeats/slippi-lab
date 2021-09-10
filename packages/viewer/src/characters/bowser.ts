import type { Character } from '../common';
import { Vector } from '../vector';
import type { ActionName } from '../animations/actions';
export const bowser: Character = {
  scale: 0.69,
  shieldOffset: new Vector(2.724, 9.003), // model units // TODO
  shieldSize: 0.69 * 31.25, // world units
  animationMap: new Map<ActionName, string>([
    ['AppealL', 'Appeal'],
    ['AppealR', 'Appeal'],
    ['AttackS3Hi', 'AttackS3Hi'],
    ['AttackS3HiS', 'AttackS3Hi'],
    ['AttackS3Lw', 'AttackS3Lw'],
    ['AttackS3LwS', 'AttackS3Lw'],
    ['AttackS3S', 'AttackS3S'],
    ['AttackS4Hi', 'AttackS4Hi'],
    ['AttackS4HiS', 'AttackS4Hi'],
    ['AttackS4Lw', 'AttackS4Lw'],
    ['AttackS4LwS', 'AttackS4Lw'],
    ['AttackS4S', 'AttackS4'],
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
    ['RebirthWait', 'Wait1'],
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
    ['Wait', 'Wait1'],
    ['YoshiEgg', ''],
  ]),
  specialsMap: new Map<number, string>([
    [341, 'SpecialNStart'],
    [342, 'SpecialN'],
    [343, 'SpecialNEnd'],
    [344, 'SpecialAirNStart'],
    [345, 'SpecialAirN'],
    [346, 'SpecialAirNEnd'],
    [347, 'SpecialSStart'],
    [348, 'SpecialSHit'],
    [349, 'SpecialSHit'],
    [350, 'SpecialSHit'],
    [351, 'SpecialSEndF'],
    [352, 'SpecialSEndB'],
    [353, 'SpecialAirSStart'],
    [354, 'SpecialAirSHit'],
    [355, 'SpecialAirSHit'],
    [356, 'SpecialAirSHit'],
    [357, 'SpecialAirSEndF'],
    [358, 'SpecialAirSEndB'],
    [359, 'SpecialHi'],
    [360, 'SpecialAirHi'],
    [361, 'SpecialLw'],
    [362, 'SpecialAirLw'],
    [363, 'SpecialLwLanding'],
  ]),
};
