import React from "react";

const ClientData = ({ data }) => {
  const { email, address, name, phone, username, company } = data || {};
  return (
    <div>
      <div className="pb-3 text-left">
        <p className="text-lg font-bold mb-2">Info about client</p>
        <p className="text-gray-400">Name: {name}</p>
        <p className="text-gray-400">User name: {username}</p>
        <p className="text-gray-400">Email: {email}</p>
        <p className="text-gray-400">Number phone: {phone}</p>
        <p className="text-gray-400">Company: {company.name}</p>
        <p className="text-gray-400">
          Address: {address.city} {address.street}
        </p>
      </div>
    </div>
  );
};

export default ClientData;
