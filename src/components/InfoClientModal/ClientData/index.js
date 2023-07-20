import React from "react";

const ClientData = ({ client }) => {
  return (
    <div>
      <div className="pb-3 text-left">
        <p className="text-lg font-bold mb-2">Info about client</p>
        <p className="text-gray-400">
          Name: {client.name} {client.surname}
        </p>
        <p className="text-gray-400">Birthday: {client.birthday}</p>
        <p className="text-gray-400">Email: {client.email}</p>
        <p className="text-gray-400">Number phone: {client.numberPhone}</p>
        <p className="text-gray-400">Country: {client.country}</p>
      </div>
    </div>
  );
};

export default ClientData;
