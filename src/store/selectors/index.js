// employee
export const employeeSelector = (state) => state.employee.employee;
export const isLoadingEmployee = (state) => state.employee.isLoading;
//client
export const isValidSearchSelector = (state) =>
  state.client.isValidSearchClient;
export const getClientSelector = (state) => state.client.client;
export const numberPhoneSelector = (state) => state.client.numberPhone;
//transactions
export const getTestTransactions = (state) => state.trans.transactions;
export const getIsDetailTransaction = (state) =>
  state.trans.isDetailTransaction;
export const getDetailTransaction = (state) => state.trans.detailTransaction;
//auth
export const isMessageErrorAuthSelector = (state) =>
  state.auth.authErrorMessage;
//modal
export const isModalSelector = (state) => state.modal.isModalWindow;
