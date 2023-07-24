import React from "react";
import AvatarClient from "../AvatarClient";
import ClientData from "../ClientData";
import TransData from "../TransData";
import lodash from "lodash";

const Context = ({ client, trans }) => {
  return (
    <div className="flex flex-row-reverse justify-around">
      {!lodash.isEmpty(client) && <AvatarClient />}
      {!lodash.isEmpty(client) && <ClientData client={client} />}
      {!lodash.isEmpty(trans) && <TransData trans={trans} />}
    </div>
  );
};

export default Context;
