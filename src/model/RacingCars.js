import { AVALIABLE_RANDOM_NUMBER } from '../constants/randomNumber.js';
import { CAR_STATUS_SYMBOLS } from '../constants/view.js';
import { SEPERATOR_SYMBOLS } from '../constants/commons.js';

export class RacingCars {
  #moveStatus;

  #numberMaker;

  constructor(carNames, numberMaker) {
    this.#moveStatus = RacingCars.#initMoveStatus(carNames);
    this.#numberMaker = numberMaker;
  }

  static #initMoveStatus(carNames = []) {
    return carNames.split(SEPERATOR_SYMBOLS.COMMA).reduce((acc, cur) => {
      acc[cur] = CAR_STATUS_SYMBOLS.EMPTY;
      return acc;
    }, {});
  }

  #isMove(carName) {
    const randomNumber = this.#numberMaker.createRandomNumber(carName);
    return randomNumber >= AVALIABLE_RANDOM_NUMBER;
  }

  move() {
    Object.keys(this.#moveStatus).forEach((carName) => {
      if (this.#isMove(carName)) this.#moveStatus[carName] += CAR_STATUS_SYMBOLS.MOVE;
    });
    return this.#moveStatus;
  }
}
