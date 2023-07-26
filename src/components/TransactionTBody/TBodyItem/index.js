import React from "react";
import { useDispatch } from "react-redux";
import { splitString } from "./helper";
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

  const createdData = splitString(createdAt, ".", 0);
  const updatedData = splitString(updatedAt, ".", 0);
  const createdYear = splitString(createdData, "T", 0);
  const createdTime = splitString(createdData, "T", 1);
  const updatedYear = splitString(updatedData, "T", 0);
  const updatedTime = splitString(updatedData, "T", 1);

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
      <td className="px-6 py-2">
        {createdYear} {createdTime}
      </td>
      <td className="px-6 py-2">
        {updatedYear} {updatedTime}
      </td>
    </tr>
  );
};

export default TBodyItem;
