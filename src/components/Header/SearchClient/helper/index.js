import {
  getValidSearchPhone,
  getSearchInputNumberPhoneText,
} from "../../../../store/createActions";

export function phoneValidation(name, dispatch) {
  const indiaRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
  if (name.match(indiaRegex)) {
    dispatch(getValidSearchPhone(true));
    dispatch(getSearchInputNumberPhoneText(name));
    return name;
  } else {
    dispatch(getValidSearchPhone(false));
    return name;
  }
}

export function handleInput(target, setState, dispatch) {
  const formattedPhoneNumber = phoneValidation(target.value, dispatch);
  setState(formattedPhoneNumber);
}
