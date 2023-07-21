import React from "react";

const AvatarClient = () => {
  const flag = "https://flagcdn.com/256x192/us.png"; //will delete
  return (
    <div className="flex flex-col items-center   space-y-4 ">
      <svg
        className=" w-22 h-22 text-gray-400 "
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
