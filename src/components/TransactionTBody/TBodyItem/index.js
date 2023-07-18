// import React from "react";
// import { useDispatch } from "react-redux";
// import {
//   getDetailInfoTransactionTestAction,
//   setModalClient,
// } from "../../../store/createActions";

// const TBodyItem = ({ item }) => {
//   const dispatch = useDispatch();
//   const {
//     _id,
//     sender,
//     summa,
//     toPlace,
//     addressee,
//     fromPlace,
//     createdAt,
//     updatedAt,
//     isGot,
//     dateReceiving,
//   } = item || {};
//   return (
//     <tr
//       onClick={() => {
//         dispatch(getDetailInfoTransactionTestAction(item));
//         dispatch(setModalClient(true));
//       }}
//       className={
//         _id % 2 === 0
//           ? " border-b bg-gray-1000 border-gray-700 text-left"
//           : "border-b bg-gray-800 border-gray-700 text-left"
//       }
//     >
//       <th
//         scope="row"
//         className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white my-8"
//       >
//         {_id}
//       </th>
//       <td className="px-6 py-2">{dateReceiving}</td>

//       <td className="px-6 py-2">{isGot}</td>

//       <td className="px-6 py-2">{sender}</td>
//       <td className="px-6 py-2">{summa}</td>
//       <td className="px-6 py-2">{toPlace}</td>
//       <td className="px-6 py-2">{addressee}</td>
//       <td className="px-6 py-2">{fromPlace}</td>
//       <td className="px-6 py-2">{updatedAt}</td>
//       <td className="px-6 py-2">{createdAt}</td>
//     </tr>
//   );
// };

// export default TBodyItem;
