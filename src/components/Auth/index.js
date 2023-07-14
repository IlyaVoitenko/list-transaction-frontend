import React, { useState } from "react";
import { isSingInSelector } from "../../../store/selectors";
import { useDispatch, useSelector } from "react-redux";
import { getEmployeeData } from "../thunk";

const Auth = () => {
  //   const isSingIn = useSelector(isSingInSelector);
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  //i.agarkov
  //12345678
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center	bg-neutral-900  h-screen align">
      <div className="flex flex-col items-center justify-center f  h-3/6 w-[20%] space-y-4 md:space-y-6">
        {isSingIn ? (
          <div className="flex flex-col items-center justify-center f  bg-red-700 pl-2 pr-2 pt-2 pb-2">
            <span className="text-white ">
              Error: Incorrect login or password
            </span>
          </div>
        ) : null}

        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm  text-slate-400  text-left"
          >
            Login
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="outline-none border-b-[1px] border-blue-700 bg-neutral-900  text-white pt-1 pb-1 "
            onChange={({ target }) => setLogin(target.value)}
            required=""
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm text-slate-400 text-left"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className=" outline-none border-b-[1px] border-blue-700 bg-neutral-900  text-white pt-1 pb-1 "
            onChange={({ target }) => setPassword(target.value)}
            required=""
          />
        </div>
        <div className="flex items-center justify-center w-[60%]  ">
          <button
            onClick={() => dispatch(getEmployeeData(login, password))}
            className=" bg-blue-700  pt-2 pb-2 text-white rounded-md w-full"
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
