import axios from "axios";
const { URL_ADMIN, URL_USER, PSW_HASH, API_KEY_VALUE, TRANSACTION_URL } =
  process.env;

const adminUrl = axios.create({ baseURL: URL_ADMIN });
const transUrl = axios.create({ baseURL: TRANSACTION_URL });
const userUrl = axios.create({ baseURL: URL_USER });

const loadPswhash = (login, password) => {
  return adminUrl
    .get(`${PSW_HASH}${login}%3A${password}`, {
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
      "X-CC-Api-Key": API_KEY_VALUE,
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
