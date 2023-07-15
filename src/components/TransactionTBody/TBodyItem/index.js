import React from "react";
import { useDispatch } from "react-redux";
import {
  getDetailInfoTransactionTestAction,
  setModalClient,
} from "../../../store/createActions";

const TBodyItem = ({ item }) => {
  const dispatch = useDispatch();
  // const { body, login, password, phone, role, title, userId } = item || {};
  const { id, name, username, email, address, company, phone, website } =
    item || {};
  return (
    <tr
      onClick={() => {
        dispatch(getDetailInfoTransactionTestAction(item));
        dispatch(setModalClient(true));
      }}
      className={
        id % 2 === 0
          ? " border-b bg-gray-1000 border-gray-700 text-left"
          : "border-b bg-gray-800 border-gray-700 text-left"
      }
    >
      <th
        scope="row"
        className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white my-8"
      >
        {id}
      </th>
      <td className="px-6 py-2">{name}</td>
      <td className="px-6 py-2">{username}</td>
      <td className="px-6 py-2">{email}</td>
      <td className="px-6 py-2">
        {address.city} - {address.street}
      </td>
      <td className="px-6 py-2">{phone}</td>
      <td className="px-6 py-2">{website}</td>
      <td className="px-6 py-2">{company.name}</td>
    </tr>
  );
};

export default TBodyItem;
