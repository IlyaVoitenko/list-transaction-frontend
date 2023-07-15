import React from "react";

const AvatarClient = ({ data }) => {
  // console.log("AvatarClient :", data); //will delete
  // const { country, avatarUrl } = data || {};
  // const upperCaseCounrty = country.toUpperCase();
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
  // const actualCounctry = countries.find(
  //   (countryItem) => countryItem.code === upperCaseCounrty
  // );
  // const { flag } = actualCounctry || {};
  const flag = "https://flagcdn.com/256x192/us.png"; //will delete
  return (
    <div className="flex flex-col items-center   space-y-4 ">
      <img
        // src={avatarUrl === "" ? defaultUlr : avatarUrl}
        src={defaultUlr}
        alt="Avatar"
        className="w-[100px]"
      />
      {flag === undefined ? (
        <span>country not found</span>
      ) : (
        <img src={flag} alt="country" className="w-[70px] pb-3" />
      )}
    </div>
  );
};

export default AvatarClient;
