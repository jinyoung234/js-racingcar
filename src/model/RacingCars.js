import { AVALIABLE_RANDOM_NUMBER, CAR_STATUS_SYMBOLS } from '../constants/index.js';

class RacingCars {
  #moveStatus;

  #numberMaker;

  constructor(carNames, numberMaker) {
    this.#moveStatus = RacingCars.#initMoveStatus(carNames);
    this.#numberMaker = numberMaker;
  }

  static #initMoveStatus(carNames = []) {
    return carNames.reduce((acc, cur) => {
      acc[cur] = CAR_STATUS_SYMBOLS.EMPTY;
      return acc;
    }, {});
  }

  #isMove(carName) {
    const randomNumber = this.#numberMaker.createRandomNumber(carName);
    return randomNumber >= AVALIABLE_RANDOM_NUMBER;
  }

  move(carNames) {
    carNames.forEach((carName) => {
      if (this.#isMove(carName)) this.#moveStatus[carName] += CAR_STATUS_SYMBOLS.MOVE;
    });
    return this.#moveStatus;
  }

  getCarNames() {
    return Object.keys(this.#moveStatus);
  }
}

export default RacingCars;
