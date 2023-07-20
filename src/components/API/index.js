import axios from "axios";
const {
  REACT_APP_URL_ADMIN,
  REACT_APP_URL_USER,
  REACT_APP_PSW_HASH,
  REACT_APP_API_KEY_VALUE,
  REACT_APP_TRANSACTION_URL,

  REACT_APP_TEST_URL_AUTH,
  REACT_APP_TEST_GET_ALL_TRANS,
  REACT_APP_TEST_GET_ALL_TRANS_CLIENT,

  REACT_APP_CLIENT,
} = process.env;

const setToken = (token) => {
  token
    ? (axios.defaults.headers.authorization = `Bearer ${token}`)
    : (axios.defaults.headers.authorization = ``);
};

const loadPswhash = async (login, password) => {
  return await axios
    .get(`${REACT_APP_URL_ADMIN}${REACT_APP_PSW_HASH}${login}%3A${password}`, {
      headers: {
        accept: "application/json",
      },
    })
    .then(({ data }) => data.resultText);
};
export async function loadSingIn(login, password) {
  const pswhash = await loadPswhash(login, password);
  const body = {
    login,
    pswhash,
    role: "oper",
  };
  const config = {
    headers: {
      accept: "application/json",
      "X-CC-Api-Key": REACT_APP_API_KEY_VALUE,
      "Content-Type": "application/json",
    },
  };

  return axios
    .post(`${REACT_APP_URL_ADMIN}/employee-signin`, body, config)
    .then(({ data }) => data)
    .catch((err) => console.warn(err));
}
export function loadTransactionsClient(idClient) {
  return axios
    .get(`${REACT_APP_TRANSACTION_URL}${idClient}`)
    .then(({ data }) => {
      return data;
    });
}
export function loadDetailTransaction(id) {
  return axios
    .get(`${REACT_APP_TRANSACTION_URL}${id}`)
    .then(({ data }) => data)
    .catch((err) => console.warn(err));
}
export function loadGetUsers(login, password) {
  return axios
    .get(`http://localhost:4001/users?login=${login}&password=${password}`)
    .then(({ data }) => data)
    .catch((err) => console.warn(err));
}
export function loadSearchNumberPhone(textSearchInput) {
  return axios
    .get(`${REACT_APP_URL_USER}/_/find-by-alias/${textSearchInput} `)
    .then(({ data }) => console.log("loadSearchNumberPhone :", data))
    .catch((err) => console.warn("loadSearchNumberPhone:", err));
}
//test
export const testLoginEmployee = async (login, password) => {
  try {
    const { data } = await axios.post(`${REACT_APP_TEST_URL_AUTH}login`, {
      login,
      password,
    });
    setToken(data.employee.token);

    return data;
  } catch (error) {
    console.warn(error);
  }
};
export const loadListTransactions = async () => {
  try {
    const { data } = await axios.get(`${REACT_APP_TEST_GET_ALL_TRANS}/`);
    return data.trans;
  } catch (error) {
    console.warn(error);
  }
};
export const loadListTransactionsClient = async (numberPhoneClient) => {
  try {
    const transactionsClient = await axios.get(
      `${REACT_APP_TEST_GET_ALL_TRANS_CLIENT}${numberPhoneClient}`
    );
    return transactionsClient;
  } catch (error) {
    console.warn(error);
  }
};
export const loadClient = async (numberPhone) => {
  try {
    const client = await axios.get(`${REACT_APP_CLIENT}${numberPhone}`);
    return client;
  } catch (error) {
    console.warn(error);
  }
};
