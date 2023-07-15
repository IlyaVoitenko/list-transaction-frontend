import {
  loadTransactionsClient,
  loadDetailTransaction,
  loadSearchNumberPhone,
  loadSingIn,
  testLoginClient,
} from "../API";
import {
  getErrorAuthMessage,
  setEmployee,
  getClientByIdUser,
  getSelectedTransactionAction,
  getArrayByNumberPhone,
  getClient,
} from "../../store/createActions";

export function getTransactionsClients(numberPhoneClient) {
  return (dispatch) => {
    return loadTransactionsClient(numberPhoneClient).then((data) => {
      return dispatch(getClientByIdUser(data));
    });
  };
}

export function getDetailTransaction(id) {
  return (dispatch) => {
    loadDetailTransaction(id).then((data) =>
      dispatch(getSelectedTransactionAction(data.value))
    );
  };
}

export function getEmployeeData(login, password) {
  return (dispatch) => {
    testLoginClient(login, password)
      .then((data) => {
        dispatch(setEmployee(data.employee));
        dispatch(getErrorAuthMessage(false));
      })
      .catch((err) => {
        dispatch(getErrorAuthMessage(true));
        console.warn(err);
      });
  };
}

export function getDataByNumberPhone(numberPhone) {
  return (dispatch) => {
    loadSearchNumberPhone(numberPhone)
      .then((data) => dispatch(getArrayByNumberPhone(data)))
      .catch((err) => console.warn(err));
  };
}

export function LogOutEmployee() {
  return (dispatch) => {
    dispatch(setEmployee({}));
    dispatch(getClient({}));
  };
}
