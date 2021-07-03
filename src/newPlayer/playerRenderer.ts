import type { FrameEntryType, PlayerType } from '@slippi/slippi-js';
import { CharacterAnimations, fetchAnimation } from './animations';
import { actions, specials } from './animations/actions';
import {
  CharacterData,
  characterDataById,
  characters,
} from './characters/character';
import type { DeepRequired } from './common';
import type { Renderer } from './gameRenderer';

const colors = ['red', 'blue', 'yellow', 'green'];
const teamColors = ['red', 'blue', 'green'];

export class PlayerRenderer implements Renderer {
  public static async create(
    settings: DeepRequired<PlayerType>,
    screenSpaceRenderingContext: CanvasRenderingContext2D,
    worldSpaceRenderingContext: CanvasRenderingContext2D,
    isDoubles: boolean,
  ): Promise<PlayerRenderer> {
    const animations = await fetchAnimation(settings.characterId);
    return new PlayerRenderer(
      settings,
      screenSpaceRenderingContext,
      worldSpaceRenderingContext,
      animations,
      isDoubles,
    );
  }

  private character: CharacterData;

  private constructor(
    private settings: DeepRequired<PlayerType>,
    private screenSpaceRenderingContext: CanvasRenderingContext2D,
    private worldSpaceRenderingContext: CanvasRenderingContext2D,
    private animations: CharacterAnimations,
    private isDoubles: boolean,
  ) {
    this.character = characterDataById[this.settings.characterId];
  }

  public isInFrame(frame: DeepRequired<FrameEntryType>): boolean {
    return Boolean(frame.players[this.settings.playerIndex]);
  }

  public render(frame: DeepRequired<FrameEntryType>): void {
    if (!this.isInFrame(frame)) {
      return;
    }
    this.renderUi(frame);
    this.renderCharacter(frame);
    this.renderShield(frame);
    this.renderShine(frame);
  }

  private renderUi(frame: DeepRequired<FrameEntryType>): void {
    const renderer = this.screenSpaceRenderingContext;
    renderer.save();
    const playerUiX = 1200 * 0.2 * (this.settings.playerIndex + 1);
    const playerUiY = -600;
    renderer.translate(playerUiX, playerUiY);
    this.renderStocks(frame);
    this.renderPercent(frame);
    this.renderPlayerDetails(frame);
    renderer.restore();
  }

  private renderStocks(frame: DeepRequired<FrameEntryType>): void {
    const renderer = this.screenSpaceRenderingContext;
    const playerFrame = frame.players[this.settings.playerIndex].post;
    const stockCount = playerFrame.stocksRemaining;
    renderer.save();
    renderer.fillStyle = this.isDoubles
      ? teamColors[this.settings.teamId]
      : colors[playerFrame.playerIndex];
    for (let stockIndex = 0; stockIndex < stockCount; stockIndex++) {
      const x = (stockIndex - 2) * 30;
      const y = 0;
      const radius = 12;
      renderer.beginPath();
      renderer.arc(x, y, radius, 0, 2 * Math.PI);
      renderer.closePath();
      renderer.fill();
    }
    renderer.restore();
  }

  private renderPercent(frame: DeepRequired<FrameEntryType>): void {
    const renderer = this.screenSpaceRenderingContext;
    const playerFrame = frame.players[this.settings.playerIndex].post;
    const percent = playerFrame.percent;
    renderer.save();
    renderer.font = '900 53px Arial';
    renderer.textAlign = 'center';
    renderer.strokeStyle = 'black';
    renderer.fillStyle = this.isDoubles
      ? teamColors[this.settings.teamId]
      : colors[playerFrame.playerIndex];
    const x = 0;
    const y = -70;
    renderer.translate(x, y);
    renderer.scale(1, -1); // flip text back right-side after global flip
    renderer.fillText(`${Math.floor(percent)}%`, 0, 0);
    renderer.strokeText(`${Math.floor(percent)}%`, 0, 0);
    renderer.restore();
  }

  private renderPlayerDetails(frame: DeepRequired<FrameEntryType>): void {
    const renderer = this.screenSpaceRenderingContext;
    const playerFrame = frame.players[this.settings.playerIndex].post;
    const percent = playerFrame.percent;
    renderer.save();
    renderer.font = '900 24px Arial';
    renderer.textAlign = 'center';
    renderer.strokeStyle = 'black';
    renderer.fillStyle = this.isDoubles
      ? teamColors[this.settings.teamId]
      : colors[playerFrame.playerIndex];
    const x = 0;
    const y = -100;
    renderer.translate(x, y);
    // flip text back right-side after global flip
    renderer.scale(1, -1);
    const name = `${this.settings.displayName}`;
    renderer.fillText(name, 0, 0);
    renderer.strokeText(name, 0, 0);
    renderer.restore();
  }

  private renderCharacter(frame: DeepRequired<FrameEntryType>): void {
    const renderer = this.worldSpaceRenderingContext;
    const playerFrame = frame.players[this.settings.playerIndex].post;
    renderer.save();
    renderer.lineWidth *= 2;
    renderer.strokeStyle = 'black';
    renderer.fillStyle = this.isDoubles
      ? teamColors[this.settings.teamId]
      : colors[playerFrame.playerIndex];
    renderer.translate(playerFrame.positionX, playerFrame.positionY);
    // 4.5 is magic, -y is because the data seems to be flipped relative to
    // the stage data..
    // world space -> animation data space
    renderer.scale(this.character.scale / 4.5, -this.character.scale / 4.5);
    renderer.lineWidth /= this.character.scale / 4.5;
    renderer.scale(playerFrame.facingDirection, 1); // flip if facing left
    const animationName =
      actions[playerFrame.actionStateId] ??
      specials[characters[this.settings.characterId]][
        playerFrame.actionStateId
      ];
    if (animationName === undefined) {
      console.log(
        'characterId',
        this.settings.characterId,
        'actionStateId',
        playerFrame.actionStateId,
      );
    }
    if (animationName.match('DEAD')) {
      renderer.restore();
      return;
    }
    const animationData =
      this.animations[animationName] ??
      this.animations[
        animationName.substr(0, 6) + 'FOX' + animationName.substr(6, 10)
      ];
    if (animationData === undefined) {
      console.log(
        'actionStateCounter',
        playerFrame.actionStateCounter,
        'animationData',
        animationData,
        'animationName',
        animationName,
      );
    }
    const animationFrameIndex =
      Math.max(0, Math.floor(playerFrame.actionStateCounter) - 1) %
      animationData.length;
    const animationFrameLine = animationData[animationFrameIndex][0];
    renderer.beginPath();
    renderer.moveTo(animationFrameLine[0], animationFrameLine[1]);
    // starting from index 2, each set of 6 numbers are bezier curve coords
    for (var k = 2; k < animationFrameLine.length; k += 6) {
      const a = animationFrameLine;
      renderer.bezierCurveTo(
        a[k],
        a[k + 1],
        a[k + 2],
        a[k + 3],
        a[k + 4],
        a[k + 5],
      );
      // renderer.lineTo(animationFrameLine[k + 4], animationFrameLine[k + 5]);
    }
    renderer.closePath();
    renderer.fill();
    renderer.stroke();
    renderer.restore();
  }

  private renderShield(frame: DeepRequired<FrameEntryType>): void {
    const renderer = this.worldSpaceRenderingContext;
    const playerFrame = frame.players[this.settings.playerIndex].post;
    if (
      playerFrame.actionStateId < 0x0b2 ||
      playerFrame.actionStateId > 0x0b6
    ) {
      return;
    }
    renderer.save();
    renderer.globalAlpha = 0.75;
    renderer.fillStyle = this.isDoubles
      ? teamColors[this.settings.teamId]
      : colors[playerFrame.playerIndex];
    renderer.strokeStyle = 'white';
    const shieldPercent = playerFrame.shieldSize / 60;
    const shieldScale = 7.7696875;
    renderer.translate(playerFrame.positionX, playerFrame.positionY);
    renderer.translate(
      this.character.shieldOffset.x / 4.5,
      this.character.shieldOffset.y / 4.5,
    );
    // world space -> shield space (unit render distance === max shield size)
    renderer.scale(shieldScale, shieldScale);
    renderer.lineWidth /= shieldScale;
    renderer.beginPath();
    renderer.arc(0, 0, shieldPercent, 0, 2 * Math.PI);
    renderer.closePath();
    renderer.fill();
    renderer.stroke();
    renderer.restore();
  }

  private renderShine(frame: DeepRequired<FrameEntryType>) {
    const renderer = this.worldSpaceRenderingContext;
    const playerFrame = frame.players[this.settings.playerIndex].post;
    const character = characters[this.settings.characterId];
    if (
      (character !== 'Fox' && character !== 'Falco') ||
      playerFrame.actionStateId < 360 ||
      playerFrame.actionStateId > 369
    ) {
      return;
    }
    renderer.save();
    renderer.fillStyle = '#00FFFF';
    renderer.strokeStyle = '#00FFFF';
    renderer.lineWidth *= 5;
    const shieldScale = 7.7696875;
    renderer.translate(playerFrame.positionX, playerFrame.positionY);
    renderer.translate(
      this.character.shieldOffset.x / 4.5,
      this.character.shieldOffset.y / 4.5,
    );
    renderer.scale(shieldScale, shieldScale); // world space -> shield space
    renderer.lineWidth /= shieldScale;
    renderer.beginPath();
    renderer.scale(0.9, 0.9); // not as big as shield because we have linewidth
    const sixths = (2 * Math.PI) / 6;
    renderer.moveTo(0, 1);
    for (var hexPart = 0; hexPart < 6; hexPart++) {
      renderer.lineTo(
        1 * Math.sin(sixths * hexPart + 1),
        1 * Math.cos(sixths * hexPart + 1),
      );
    }
    renderer.moveTo(0, 0.5);
    for (var hexPart = 0; hexPart < 6; hexPart++) {
      renderer.lineTo(
        0.5 * Math.sin(sixths * hexPart + 1),
        0.5 * Math.cos(sixths * hexPart + 1),
      );
    }

    renderer.closePath();
    renderer.stroke();
    renderer.restore();
  }
}