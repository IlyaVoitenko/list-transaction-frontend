import {
  SET_EMPLOYEE,
  IS_SING_IN,
  GET_CLIENTS,
  GET_CLIENT,
  GET_VALID_SEARCH_PHONE,
  GET_SELECTED_TRANSACTION,
  GET_INPUT_SEARCH_NUMBER_PHONE_TEXT,
  GET_ARRAY_BY_NUMBER_PHONE,
  GET_CLIENT_BY_ID_USER,
  GET_ACCESS_TOKEN,
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
export function getSearchInputNumberPhoneText(payload) {
  return { type: GET_INPUT_SEARCH_NUMBER_PHONE_TEXT, payload };
}
export function getClientsAction(payload) {
  return { type: GET_CLIENTS, payload };
}
export function getSelectedTransactionAction(payload) {
  return { type: GET_SELECTED_TRANSACTION, payload };
}
export function getClientByIdUser(payload) {
  return { type: GET_CLIENT_BY_ID_USER, payload };
}
export function getClient(payload) {
  return { type: GET_CLIENT, payload };
}
export function setEmployee(payload) {
  return { type: SET_EMPLOYEE, payload };
}
export function getValidSearchPhone(payload) {
  return { type: GET_VALID_SEARCH_PHONE, payload };
}
export function getArrayByNumberPhone(payload) {
  return { type: GET_ARRAY_BY_NUMBER_PHONE, payload };
}
export function LogOutEmployeeAction(payload) {
  return { type: SET_EMPLOYEE, payload };
}
export function getErrorAuthMessage(payload) {
  return { type: IS_SING_IN, payload };
}
export function getAccessToken(payload) {
  return { type: GET_ACCESS_TOKEN, payload };
}
export function setModalClient(payload) {
  return { type: IS_MODAL_CLIENT, payload };
}
export function getDetailInfoTransactionTestAction(payload) {
  return { type: detailInfoTransactionTest, payload };
}
export function setTestTransactionsAction(payload) {
  return { type: setTestTransactions, payload };
}
//Sorted
export function getArraySorteredByIdTestTransactionsAction() {
  return { type: GET_ARRAY_SORTED_BY_ID_TRANSACTIONS };
}
export function getArraySorteredByNameTestTransactionsAction() {
  return { type: GET_ARRAY_SORTED_BY_NAME_TRANSACTIONS };
}
export function getArraySorteredByUserNameTestTransactionsAction() {
  return { type: GET_ARRAY_SORTED_BY_USERNAME_TRANSACTIONS };
}
export function getArraySorteredByEmailTestTransactionsAction() {
  return { type: GET_ARRAY_SORTED_BY_EMAIL_TRANSACTIONS };
}
export function getArraySorteredByCompanyTestTransactionsAction() {
  return { type: GET_ARRAY_SORTED_BY_COMPANY_TRANSACTIONS };
}
export function getArraySorteredByAddressTestTransactionsAction() {
  return { type: GET_ARRAY_SORTED_BY_ADDRESS_TRANSACTIONS };
}
export function getArraySorteredByWebsiteTestTransactionsAction() {
  return { type: GET_ARRAY_SORTED_BY_WEBSITE_TRANSACTIONS };
}
export function getArraySorteredByNumberPhoneTestTransactionsAction() {
  return { type: GET_ARRAY_SORTED_BY_NUMBER_PHONE_TRANSACTIONS };
}
