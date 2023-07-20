import {
  setIsValidSearchClient,
  setNumberPhone,
} from "../../../../store/reducer/clients";

export function phoneValidation(number, dispatch) {
  const indiaRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
  if (number.match(indiaRegex)) {
    dispatch(setIsValidSearchClient(true));
    dispatch(setNumberPhone(number));
    return number;
  } else {
    dispatch(setIsValidSearchClient(false));
    return number;
  }
}

export function handleInput(target, setInputValue, dispatch) {
  const formattedPhoneNumber = phoneValidation(target.value, dispatch);
  return setInputValue(formattedPhoneNumber);
}
