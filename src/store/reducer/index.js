import {
  sortedArrayByString,
  sortedArrayById,
  sortedArrayByNumberPhone,
} from "./transactions/helper";
import {
  SET_EMPLOYEE,
  GET_CLIENTS,
  GET_CLIENT,
  GET_SELECTED_TRANSACTION,
  GET_INPUT_SEARCH_NUMBER_PHONE_TEXT,
  GET_ARRAY_BY_NUMBER_PHONE,
  GET_VALID_SEARCH_PHONE,
  GET_CLIENT_BY_ID_USER,
  IS_SING_IN,
  IS_MODAL_CLIENT,
  detailInfoTransactionTest,
  GET_ARRAY_SORTED_BY_ID_TRANSACTIONS,
  GET_ARRAY_SORTED_BY_NAME_TRANSACTIONS,
  GET_ARRAY_SORTED_BY_USERNAME_TRANSACTIONS,
  GET_ARRAY_SORTED_BY_EMAIL_TRANSACTIONS,
  GET_ARRAY_SORTED_BY_COMPANY_TRANSACTIONS,
  GET_ARRAY_SORTED_BY_ADDRESS_TRANSACTIONS,
  GET_ARRAY_SORTED_BY_WEBSITE_TRANSACTIONS,
  GET_ARRAY_SORTED_BY_NUMBER_PHONE_TRANSACTIONS,
  setTestTransactions,
} from "../createTypes";

const initialState = {
  clients: [],
  employee: {},
  arrayFiltereByNumberPhone: [],
  nameClient: null,
  client: {},
  clientByIdUser: null,
  selectedTransaction: {},
  searchInputNumberPhoneText: null,
  isModalClient: false,
  isValidSearch: null,
  isSingIn: false,
  detailInfoTransactionTest: {},
  testTransactions: [],
};
// check user name
// хранить инфо в обьекте юзер и делать проверку на имя админа

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_MODAL_CLIENT:
      return { ...state, isModalClient: action.payload };
    case IS_SING_IN:
      return { ...state, isSingIn: action.payload };
    case GET_INPUT_SEARCH_NUMBER_PHONE_TEXT:
      return { ...state, searchInputNumberPhoneText: action.payload };
    case GET_ARRAY_BY_NUMBER_PHONE:
      return { ...state, arrayFiltereByNumberPhone: action.payload };
    case SET_EMPLOYEE:
      return { ...state, employee: { ...action.payload } };
    case GET_CLIENTS:
      return { ...state, clients: [...action.payload] };
    case GET_CLIENT:
      return { ...state, client: action.payload };
    case GET_CLIENT_BY_ID_USER:
      return {
        ...state,
        clientByIdUser: [...action.payload],
      };
    case GET_SELECTED_TRANSACTION:
      return {
        ...state,
        selectedTransaction: action.payload,
      };
    case GET_VALID_SEARCH_PHONE:
      return { ...state, isValidSearch: action.payload };
    case detailInfoTransactionTest:
      return { ...state, detailInfoTransactionTest: action.payload };
    case GET_ARRAY_SORTED_BY_ID_TRANSACTIONS:
      return {
        ...state,
        testTransactions: [
          ...state.testTransactions.sort((a, b) => sortedArrayById(a, b)),
        ],
      };
    case GET_ARRAY_SORTED_BY_NAME_TRANSACTIONS:
      return {
        ...state,
        testTransactions: [
          ...state.testTransactions.sort((a, b) =>
            sortedArrayByString(a.name, b.name)
          ),
        ],
      };
    case GET_ARRAY_SORTED_BY_USERNAME_TRANSACTIONS:
      return {
        ...state,
        testTransactions: [
          ...state.testTransactions.sort((a, b) =>
            sortedArrayByString(a.username, b.username)
          ),
        ],
      };
    case GET_ARRAY_SORTED_BY_EMAIL_TRANSACTIONS:
      return {
        ...state,
        testTransactions: [
          ...state.testTransactions.sort((a, b) =>
            sortedArrayByString(a.email, b.email)
          ),
        ],
      };
    case GET_ARRAY_SORTED_BY_COMPANY_TRANSACTIONS:
      return {
        ...state,
        testTransactions: [
          ...state.testTransactions.sort((a, b) =>
            sortedArrayByString(a.company.name, b.company.name)
          ),
        ],
      };
    case GET_ARRAY_SORTED_BY_ADDRESS_TRANSACTIONS:
      return {
        ...state,
        testTransactions: [
          ...state.testTransactions.sort((a, b) =>
            sortedArrayByString(a.address.city, b.address.city)
          ),
        ],
      };
    case GET_ARRAY_SORTED_BY_WEBSITE_TRANSACTIONS:
      return {
        ...state,
        testTransactions: [
          ...state.testTransactions.sort((a, b) =>
            sortedArrayByString(a.website, b.website)
          ),
        ],
      };
    case GET_ARRAY_SORTED_BY_NUMBER_PHONE_TRANSACTIONS:
      return {
        ...state,
        testTransactions: [
          ...state.testTransactions.sort((a, b) =>
            sortedArrayByNumberPhone(a.phone, b.phone)
          ),
        ],
      };
    case setTestTransactions:
      return { ...state, testTransactions: action.payload };
    default:
      return state;
  }
};
export default reducer;
