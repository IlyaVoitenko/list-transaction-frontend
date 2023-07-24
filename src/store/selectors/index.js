export const employeeSelector = (state) => state.employee.employee;
export const isValidSearchSelector = (state) =>
  state.client.isValidSearchClient;
export const numberPhoneSelector = (state) => state.client.numberPhone;
export const arrayByNumberPhoneSelector = (state) =>
  state.arrayFiltereByNumberPhone;
export const isMessageErrorAuthSelector = (state) =>
  state.auth.authErrorMessage;
export const getClientSelector = (state) => state.client.client;
export const isModalSelector = (state) => state.modal.isModalWindow;
export const getTestTransactions = (state) => state.trans.transactions;
export const getIsDetailTransaction = (state) =>
  state.trans.isDetailTransaction;
export const getDetailTransaction = (state) => state.trans.detailTransaction;
