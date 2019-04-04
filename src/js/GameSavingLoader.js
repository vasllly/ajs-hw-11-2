/* eslint-disable class-methods-use-this */
import GameSavingData from './GameSavingData';
import readGameSaving from './readGameSaving';

export default class GameSavingLoader {
  async load() {
    const data = await readGameSaving(); // возвращается Promise!
    const save = new GameSavingData(data);
    const value = await save.json(); // возвращается Promise!
    return value;
  }
}
