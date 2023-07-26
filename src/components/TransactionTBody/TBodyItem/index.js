import React from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { setDetailTransactions } from "../../../store/thunk";
import { setModalWindow } from "../../../store/reducer/modal";

const TBodyItem = ({ item, index }) => {
  const dispatch = useDispatch();
  const {
    _id,
    sender,
    summa,
    toPlace,
    addressee,
    fromPlace,
    createdAt,
    updatedAt,
  } = item || {};

  const updateDate = moment(createdAt).format("MMMM Do YYYY, h:mm:ss");
  const createDate = moment(updatedAt).format("MMMM Do YYYY, h:mm:ss");

  return (
    <tr
      onClick={() => {
        dispatch(setModalWindow(true));
        dispatch(setDetailTransactions(_id));
      }}
      className={
        index % 2 === 0
          ? "border-b bg-gray-900 border-gray-700 text-left text-white"
          : "border-b bg-gray-700 border-gray-700 text-left text-white"
      }
    >
      <th
        scope="row"
        className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white my-8"
      >
        {_id}
      </th>
      <td className="px-6 py-2">{toPlace}</td>
      <td className="px-6 py-2">{fromPlace}</td>
      <td className="px-6 py-2">{addressee}</td>
      <td className="px-6 py-2">{sender}</td>
      <td className="px-6 py-2">{summa}</td>
      <td className="px-6 py-2">{updateDate}</td>
      <td className="px-6 py-2">{createDate}</td>
    </tr>
  );
};

export default TBodyItem;
