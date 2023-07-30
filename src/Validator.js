import {
  CAR_MAX_LENGTH,
  CAR_MIN_LENGTH,
  ERROR_MESSAGE,
  INPUT_MESSAGE,
  SEPERATOR_SYMBOLS,
} from './constants/index.js';
import { convertStringToArray } from './utils/commons.js';
import {
  isDuplicateRacingCars,
  isInvalidLengthRacingCars,
} from './utils/validate.js';

const Validator = (function Validator() {
  const validateCarNames = (userInput) => {
    const racingCars = convertStringToArray(userInput, SEPERATOR_SYMBOLS.COMMA);
    if (isInvalidLengthRacingCars(racingCars))
      throw new RangeError(
        ERROR_MESSAGE.INVALID_RANGE(CAR_MIN_LENGTH, CAR_MAX_LENGTH),
      );
    if (isDuplicateRacingCars(racingCars))
      throw new SyntaxError(ERROR_MESSAGE.DUPLICATE_CAR_NAMES);
  };

  const validators = {
    [INPUT_MESSAGE.RACING_CAR]: validateCarNames,
  };

  return {
    check(userInput, message) {
      const validator = validators[message];
      validator(userInput);
    },
  };
})();

export default Validator;
