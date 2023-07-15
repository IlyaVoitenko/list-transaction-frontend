import {
  getArraySorteredByIdTestTransactionsAction,
  getArraySorteredByNameTestTransactionsAction,
  getArraySorteredByUserNameTestTransactionsAction,
  getArraySorteredByEmailTestTransactionsAction,
  getArraySorteredByCompanyTestTransactionsAction,
  getArraySorteredByAddressTestTransactionsAction,
  getArraySorteredByWebsiteTestTransactionsAction,
  getArraySorteredByNumberPhoneTestTransactionsAction,
} from "../../../../store/createActions";

export function handleSelectChange(dispatch, { value }) {
  switch (value) {
    case "id":
      dispatch(getArraySorteredByIdTestTransactionsAction());
      break;
    case "name":
      dispatch(getArraySorteredByNameTestTransactionsAction());
      break;
    case "email":
      dispatch(getArraySorteredByEmailTestTransactionsAction());
      break;
    case "username":
      dispatch(getArraySorteredByUserNameTestTransactionsAction());
      break;
    case "company":
      dispatch(getArraySorteredByCompanyTestTransactionsAction());
      break;
    case "address":
      dispatch(getArraySorteredByAddressTestTransactionsAction());
      break;
    case "website":
      dispatch(getArraySorteredByWebsiteTestTransactionsAction());
      break;
    case "phone":
      dispatch(getArraySorteredByNumberPhoneTestTransactionsAction());
      break;
    default:
      console.warn("value :", value);
      break;
  }
}
