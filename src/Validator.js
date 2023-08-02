import { CAR_MAX_LENGTH, CAR_MIN_LENGTH } from './constants/validate.js';
import { ERROR_MESSAGE, INPUT_MESSAGE } from './constants/message.js';
import { SEPERATOR_SYMBOLS } from './constants/commons.js';
import {
  isCharacter,
  isDuplicateRacingCars,
  isIncludeSpaces,
  isInvalidLengthRacingCars,
  isNumber,
} from './utils/validate.js';

const validateCarNames = (userInput) => {
  const racingCars = userInput.split(SEPERATOR_SYMBOLS.COMMA);
  if (isIncludeSpaces(racingCars)) throw new SyntaxError(ERROR_MESSAGE.INCLUDE_EMPTY_WORDS);
  if (!isCharacter(racingCars)) throw new TypeError(ERROR_MESSAGE.AVALIABLE_CHARACTER);
  if (isInvalidLengthRacingCars(racingCars))
    throw new RangeError(ERROR_MESSAGE.INVALID_RANGE(CAR_MIN_LENGTH, CAR_MAX_LENGTH));
  if (isDuplicateRacingCars(racingCars)) throw new SyntaxError(ERROR_MESSAGE.DUPLICATE_CAR_NAMES);
};

const validateCount = (userInput) => {
  const count = Number(userInput);
  if (!isNumber(count)) throw new TypeError(ERROR_MESSAGE.AVALIABLE_NUMBER);
};

const validators = {
  [INPUT_MESSAGE.RACING_CAR]: validateCarNames,
  [INPUT_MESSAGE.COUNT]: validateCount,
};

export const Validator = {
  check(userInput, message) {
    const validator = validators[message];
    validator(userInput);
  },
};
