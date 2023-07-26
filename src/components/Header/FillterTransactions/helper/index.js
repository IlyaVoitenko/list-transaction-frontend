import {
  sortTransactonsByToPlace,
  sortTransactonsByFromPlace,
  sortTransactonsByAddressee,
  sortTransactonsBySumma,
  sortTransactonsBySender,
  sortTransactonsByCreated,
  sortTransactonsByUpdated,
} from "../../../../store/reducer/transactions";

export function handleSelectChange(dispatch, { value }) {
  switch (value) {
    case "addressee":
      dispatch(sortTransactonsByAddressee());
      return;
    case "sender":
      dispatch(sortTransactonsBySender());
      return;
    case "summa":
      dispatch(sortTransactonsBySumma());
      return;
    case "fromPlace":
      dispatch(sortTransactonsByFromPlace());
      return;
    case "toPlace":
      dispatch(sortTransactonsByToPlace());
      return;
    case "createdAt":
      dispatch(sortTransactonsByCreated());
      return;
    case "updatedAt":
      dispatch(sortTransactonsByUpdated());
      return;
    default:
      throw Error(404);
  }
}
