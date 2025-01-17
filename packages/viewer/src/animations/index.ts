import { BlobReader, TextWriter, ZipReader } from '@zip.js/zip.js';

// @ts-ignore
import bowserAnimationsUrl from './zips/bowser.zip';
// @ts-ignore
import captainFalconAnimationsUrl from './zips/captainFalcon.zip';
// @ts-ignore
import doctorMarioAnimationsUrl from './zips/doctorMario.zip';
// @ts-ignore
import donkeyKongAnimationsUrl from './zips/donkeyKong.zip';
// @ts-ignore
import falcoAnimationsUrl from './zips/falco.zip';
// @ts-ignore
import foxAnimationsUrl from './zips/fox.zip';
// @ts-ignore
import ganondorfAnimationsUrl from './zips/ganondorf.zip';
// @ts-ignore
import iceClimbersAnimationsUrl from './zips/iceClimbers.zip';
// @ts-ignore
import jigglypuffAnimationsUrl from './zips/jigglypuff.zip';
// @ts-ignore
import kirbyAnimationsUrl from './zips/kirby.zip';
// @ts-ignore
import linkAnimationsUrl from './zips/link.zip';
// @ts-ignore
import luigiAnimationsUrl from './zips/luigi.zip';
// @ts-ignore
import marioAnimationsUrl from './zips/mario.zip';
// @ts-ignore
import marthAnimationsUrl from './zips/marth.zip';
// @ts-ignore
import mewtwoAnimationsUrl from './zips/mewtwo.zip';
// @ts-ignore
import mrGameAndWatchAnimationsUrl from './zips/mrGameAndWatch.zip';
// @ts-ignore
import nessAnimationsUrl from './zips/ness.zip';
// @ts-ignore
import peachAnimationsUrl from './zips/peach.zip';
// @ts-ignore
import pichuAnimationsUrl from './zips/pichu.zip';
// @ts-ignore
import pikachuAnimationsUrl from './zips/pikachu.zip';
// @ts-ignore
import royAnimationsUrl from './zips/roy.zip';
// @ts-ignore
import samusAnimationsUrl from './zips/samus.zip';
// @ts-ignore
import sheikAnimationsUrl from './zips/sheik.zip';
// @ts-ignore
import yoshiAnimationsUrl from './zips/yoshi.zip';
// @ts-ignore
import youngLinkAnimationsUrl from './zips/youngLink.zip';
// @ts-ignore
import zeldaAnimationsUrl from './zips/zelda.zip';
export { isOneIndexed } from './oneIndexed';
export { animationNameByActionId } from './actions';

const animationsCache = new Map<number, CharacterAnimations>();

export type AnimationFrames = string[];
export type CharacterAnimations = { [animationName: string]: AnimationFrames };

export const fetchAnimations = async (
  charId: number,
): Promise<CharacterAnimations> => {
  if (animationsCache.has(charId)) {
    return animationsCache.get(charId)!;
  }
  const animations = await load(characterZipUrlById[charId]);
  animationsCache.set(charId, animations);
  return animations;
};

export const characterZipUrlById = [
  captainFalconAnimationsUrl,
  donkeyKongAnimationsUrl,
  foxAnimationsUrl,
  mrGameAndWatchAnimationsUrl,
  kirbyAnimationsUrl,
  bowserAnimationsUrl,
  linkAnimationsUrl,
  luigiAnimationsUrl,
  marioAnimationsUrl,
  marthAnimationsUrl,
  mewtwoAnimationsUrl,
  nessAnimationsUrl,
  peachAnimationsUrl,
  pikachuAnimationsUrl,
  iceClimbersAnimationsUrl,
  jigglypuffAnimationsUrl,
  samusAnimationsUrl,
  yoshiAnimationsUrl,
  zeldaAnimationsUrl,
  sheikAnimationsUrl,
  falcoAnimationsUrl,
  youngLinkAnimationsUrl,
  doctorMarioAnimationsUrl,
  royAnimationsUrl,
  pichuAnimationsUrl,
  ganondorfAnimationsUrl,
];

const load = async (url: string): Promise<CharacterAnimations> => {
  const animations: CharacterAnimations = {};
  const response = await fetch(url);
  const animationsZip = await response.blob();
  const reader = new ZipReader(new BlobReader(animationsZip));
  const files = await reader.getEntries();
  await Promise.all(
    files.map(async (file) => {
      const animationName = file.filename.replace('.json', '');
      const contents = await file.getData?.(new TextWriter());
      const animationData = JSON.parse(contents);
      animations[animationName] = animationData;
    }),
  );
  return animations;
};
