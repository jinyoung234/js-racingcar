import { INPUT_MESSAGE, OUTPUT_MESSAGE } from '../constants/message.js';
import { RacingTrack } from '../model/index.js';
import { InputView, OutputView } from '../view/index.js';

class GameController {
  constructor() {
    this.racingTrack = new RacingTrack();
  }

  static async #getRacingCarNames() {
    const racingCarNames = await InputView.input(INPUT_MESSAGE.RACING_CAR);
    return racingCarNames;
  }

  static #printRaceResult(results) {
    OutputView.print(OUTPUT_MESSAGE.RESULT);
    results.forEach((result) => {
      OutputView.print(`${result}\n`);
    });
  }

  static #printRacingWinners(winners) {
    OutputView.print(OUTPUT_MESSAGE.WINNERS(winners));
  }

  #getRacingResult() {
    return this.racingTrack.getRacingResult();
  }

  #getRacingWinners() {
    return this.racingTrack.getRacingWinners();
  }

  #updateRacingCars(racingCarNames) {
    this.racingTrack.updateMoveStatus(racingCarNames);
  }

  #raceStart(carNames) {
    this.racingTrack.race(carNames);
  }

  async run() {
    const racingCarNames = await GameController.#getRacingCarNames();
    this.#updateRacingCars(racingCarNames);
    this.#raceStart(racingCarNames);
    const result = this.#getRacingResult();
    const racingWinners = this.#getRacingWinners();
    GameController.#printRaceResult(result);
    GameController.#printRacingWinners(racingWinners);
  }
}

export default GameController;
