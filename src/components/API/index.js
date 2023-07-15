import axios from "axios";
const {
  REACT_APP_URL_ADMIN,
  REACT_APP_URL_USER,
  REACT_APP_PSW_HASH,
  REACT_APP_API_KEY_VALUE,
  REACT_APP_TRANSACTION_URL,

  REACT_APP_TEST_URL_AUTH,
  REACT_APP_TEST_GET_ALL_TRANS,
} = process.env;
const adminUrl = axios.create({ baseURL: REACT_APP_URL_ADMIN });
const transUrl = axios.create({ baseURL: REACT_APP_TRANSACTION_URL });
const userUrl = axios.create({ baseURL: REACT_APP_URL_USER });

const testAuth = axios.create({ baseURL: REACT_APP_TEST_URL_AUTH });
const testTrans = axios.create({ baseURL: REACT_APP_TEST_GET_ALL_TRANS });

const setToken = (token, url) => {
  if (token) {
    return (url.defaults.headers.authorization = `Bearer ${token}`);
  }
  url.defaults.headers.authorization = ``;
};

const loadPswhash = async (login, password) => {
  return await adminUrl
    .get(`${REACT_APP_PSW_HASH}${login}%3A${password}`, {
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

  return adminUrl
    .post("/employee-signin", body, config)
    .then(({ data }) => data)
    .catch((err) => console.warn(err));
}
export function loadTransactionsClient(idClient) {
  return transUrl.get(`${idClient}`).then(({ data }) => {
    return data;
  });
}

export function loadDetailTransaction(id) {
  return transUrl
    .get(`${id}`)
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
  return userUrl
    .get(`/_/find-by-alias/${textSearchInput} `)
    .then(({ data }) => console.log("loadSearchNumberPhone :", data))
    .catch((err) => console.warn("loadSearchNumberPhone:", err));
}

export const testLoginClient = async (login, password) => {
  try {
    const { data } = await testAuth.post(`login`, {
      login,
      password,
    });
    console.log(data.employee.token);
    setToken(data.employee.token, testAuth);

    return data;
  } catch (error) {
    console.warn(error);
  }
};

export const getListTransactions = async () => {
  try {
    const { data } = await testTrans.get("/");
    console.log("trans :", data);
    return data;
  } catch (error) {
    console.warn(error);
  }
};
