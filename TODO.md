# @slippilab/viewer

## SVG

- Bowser upsmash needs to translate up
- Show objects/projectiles
- Use kirby hat stuff or trim their animations
  - dynamically load those?
- Redo Falcon/Falco/Marth/Puff (Sheik/Peach?) to use potrace pipeline. It should shrink their .zip files a bit
- G&W needs all his props
- Samus downB/roll should use ball model
- Dynamic model parts are stuck in t-pose (bowser hair, dresses, capes)
- Thrown animations
- Shield break animations

## Character Render

- Zelda/Sheik transformations
- Calculate shield origin
- Spacies calculate shine origin
- Does shield break use item blind? what about mewtwo downB?
- Invisible upBs
- Yoshi shield
- Show Shield tilting (original visualiser reads inputs and checks for stun)
- Some attacks are rotated or flipped
  - Luigi upB, falcon upB release, kirby bair, etc
- Shield put up / take down animation
- Correct laser & fly guy sizes
- Tether grabs / air tethers
- Many animations are backwards if they turn you around
  - rolls/some bairs/run turn/some throws/others?
- Powershield animation 0x0b6: 'GUARD', //GuardReflect (182 decimal)
- Lightshield: Read pre.trigger, do some math?
- Death animation
- Effects for hits/electric/fire/darkness
- Color by costume instead of port
- Marth sideB colors / sword swings in general
- Spacie sideB clones
- Optional state-dependent colors? (hitstun, shieldstun, actionable)

## Performance / Load times

- combine all of a character's jsons into one?
- Render loop problems on windows firefox

## Stage

- Background visuals (grid?)
- Better stage coloring
- Fountain platforms/Wispy
  - infeasible until it's added to .slp spec

## Game UI / Viewer UI

- Game timer
  - Convert seekbar from frames to h:m:s?
- Higher % = darker text
- % dances when hit
- % hidden immediately on death until respawn
- Stock icons that look like the character
  - First letter(s)?
- Actionstate/frame below % as option (stun/lag remaining too)
- Play/Pause button, other GUI controls
- Input display?

## Other

- Camera freaks out on some replays.. almost all my IC replays. maybe just old ones?
- Colorblind friendly colors - Make every match red vs blue?
- Debug canvas for viewing individual animations

# @slippilab/search

- Other filters (matchup, date, player, stage)
- Opponent frame available to frame predicates (at least in singles)
- Fix doubles

# @slippilab/parser

- Output missing data that is present in .slp (Marked as TODOs)

# Export Highlight

- Re-enable
- Export to other formats better than gif? apng, webp, mp4?
  - Discord doesn't like .apng and .webp. Will it allow embeded mp4 from url?
- Upload gif to some host (example project with imgur: https://github.com/eirikb/gifie)
- Able to adjust start/end clip

# @slippilab/slippilab

- Tests
- Save settings
- Webworkers?
- Publish subpackages
