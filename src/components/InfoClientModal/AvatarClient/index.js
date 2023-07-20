import React from "react";

const AvatarClient = ({ client }) => {
  const defaultUlr = "/defaultAvatar.png";
  const defaultFlag = "/emptyFlag.jpg";
  const countries = [
    { code: "US", flag: "https://flagcdn.com/256x192/us.png" },
    { code: "CN", flag: "https://flagcdn.com/256x192/cn.png" },
    { code: "IN", flag: "https://flagcdn.com/256x192/in.png" },
    { code: "ID", flag: "https://flagcdn.com/256x192/id.png" },
    { code: "PK", flag: "https://flagcdn.com/256x192/pk.png" },
    { code: "BR", flag: "https://flagcdn.com/256x192/br.png" },
    { code: "NG", flag: "https://flagcdn.com/256x192/ng.png" },
    { code: "BD", flag: "https://flagcdn.com/256x192/bd.png" },
    { code: "RU", flag: "https://flagcdn.com/256x192/ru.png" },
    { code: "JP", flag: "https://flagcdn.com/256x192/jp.png" },
    { code: "MX", flag: "https://flagcdn.com/256x192/mx.png" },
    { code: "PH", flag: "https://flagcdn.com/256x192/ph.png" },
    { code: "VN", flag: "https://flagcdn.com/256x192/vn.png" },
    { code: "ET", flag: "https://flagcdn.com/256x192/et.png" },
    { code: "EG", flag: "https://flagcdn.com/256x192/eg.png" },
    { code: "DE", flag: "https://flagcdn.com/256x192/de.png" },
    { code: "IR", flag: "https://flagcdn.com/256x192/ir.png" },
    { code: "TR", flag: "https://flagcdn.com/256x192/tr.png" },
    { code: "CD", flag: "https://flagcdn.com/256x192/cd.png" },
    { code: "FR", flag: "https://flagcdn.com/256x192/fr.png" },
    { code: "TH", flag: "https://flagcdn.com/256x192/th.png" },
    { code: "GB", flag: "https://flagcdn.com/256x192/gb.png" },
    { code: "IT", flag: "https://flagcdn.com/256x192/it.png" },
    { code: "ZA", flag: "https://flagcdn.com/256x192/za.png" },
    { code: "MM", flag: "https://flagcdn.com/256x192/mm.png" },
    { code: "KE", flag: "https://flagcdn.com/256x192/ke.png" },
    { code: "KR", flag: "https://flagcdn.com/256x192/kr.png" },
    { code: "UA", flag: "https://flagcdn.com/256x192/ua.png" },
    { code: "ES", flag: "https://flagcdn.com/256x192/es.png" },
    { code: "PL", flag: "https://flagcdn.com/256x192/pl.png" },
  ];
  const flag = "https://flagcdn.com/256x192/us.png"; //will delete
  return (
    <div className="flex flex-col items-center   space-y-4 ">
      <svg
        class=" w-12 h-12 text-gray-400 "
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clip-rule="evenodd"
        ></path>
      </svg>

      {flag === undefined ? (
        <span>country not found</span>
      ) : (
        <img src={flag} alt="country" className="w-[70px] pb-3" />
      )}
    </div>
  );
};

export default AvatarClient;
