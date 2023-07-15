import { setTestTransactionsAction } from "../../../store/createActions";
import axios from "axios";

export const fetchTestTransactions = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const transactions = response.data;
      dispatch(setTestTransactionsAction(transactions));
    } catch (error) {
      console.error(error);
    }
  };
};
