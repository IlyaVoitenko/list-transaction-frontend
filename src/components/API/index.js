import axios from "axios";

const setToken = (token) => {
  token
    ? (axios.defaults.headers.authorization = `Bearer ${token}`)
    : (axios.defaults.headers.authorization = ``);
};

const loadPswhash = async (login, password) => {
  return await axios
    .get(
      `${process.env.REACT_APP_URL_ADMIN}${process.env.REACT_APP_PSW_HASH}${login}%3A${password}`,
      {
        headers: {
          accept: "application/json",
        },
      }
    )
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
      "X-CC-Api-Key": process.env.REACT_APP_API_KEY_VALUE,
      "Content-Type": "application/json",
    },
  };

  return axios
    .post(`${process.env.REACT_APP_URL_ADMIN}/employee-signin`, body, config)
    .then(({ data }) => data)
    .catch((err) => console.warn(err));
}
export function loadTransactionsClient(idClient) {
  return axios
    .get(`${process.env.REACT_APP_TRANSACTION_URL}${idClient}`)
    .then(({ data }) => {
      return data;
    });
}
export function loadDetailTransaction(id) {
  return axios
    .get(`${process.env.REACT_APP_TEST_GET_TRANS}${id}`)
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
    .get(
      `${process.env.REACT_APP_URL_USER}/_/find-by-alias/${textSearchInput} `
    )
    .then(({ data }) => console.log("loadSearchNumberPhone :", data))
    .catch((err) => console.warn("loadSearchNumberPhone:", err));
}
//test
export const testLoginEmployee = async (login, password) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_TEST_URL_AUTH}`,
      {
        login,
        password,
      }
    );
    setToken(data.employee.token);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};
export const loadListTransactions = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_TEST_GET_ALL_TRANS}/`
    );
    return data.trans;
  } catch (error) {
    console.error(error.message);
  }
};
export const loadListTransactionsClient = async (numberPhoneClient) => {
  try {
    const transactionsClient = await axios.get(
      `${process.env.REACT_APP_TEST_GET_ALL_TRANS_CLIENT}${numberPhoneClient}`
    );
    return transactionsClient;
  } catch (error) {
    console.error(error.message);
  }
};
export const loadClient = async (numberPhone) => {
  try {
    const client = await axios.get(
      `${process.env.REACT_APP_CLIENT}${numberPhone}`
    );
    return client;
  } catch (error) {
    console.error(error.message);
  }
};
