import React from "react";
import AvatarClient from "../AvatarClient";
import ClientData from "../ClientData";

const ClientContext = ({ client }) => {
  return (
    <div className="flex flex-row-reverse justify-around">
      <AvatarClient client={client} />
      <ClientData client={client} />
    </div>
  );
};

export default ClientContext;
