import React from "react";
import AvatarClient from "../AvatarClient";
import ClientData from "../ClientData";

const ClientContext = ({ data }) => {
  return (
    <div className="flex flex-row-reverse justify-around">
      <AvatarClient data={data} />
      <ClientData data={data} />
    </div>
  );
};

export default ClientContext;
