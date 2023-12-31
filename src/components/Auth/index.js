import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmployee } from "../../store/thunk";
import { useNavigate } from "react-router-dom";
import lodash from "lodash";
import {
  isMessageErrorAuthSelector,
  employeeSelector,
} from "../../store/selectors";

const Auth = () => {
  const navigate = useNavigate();
  const isMessageError = useSelector(isMessageErrorAuthSelector);
  const employee = useSelector(employeeSelector);
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  //i.agarkov
  //12345678
  useEffect(() => {
    if (!lodash.isEmpty(employee)) {
      navigate("/list-transactions");
    }
  }, [employee, navigate]);

  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center	bg-neutral-900  h-screen align">
      <form className="flex flex-col items-center justify-center f  h-3/6 w-[20%] space-y-4 md:space-y-6">
        {isMessageError && (
          <div className="flex flex-col items-center justify-center max-sm:w-48  bg-red-700 pl-2 pr-2 pt-2 pb-2">
            <span className="text-white ">
              Error: Incorrect login or password
            </span>
          </div>
        )}

        <div>
          <label
            htmlFor="text"
            className="block mb-2 text-sm  text-slate-400  text-left"
          >
            Login
          </label>
          <input
            type="text"
            name="text"
            id="text"
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
        <div className="flex items-center justify-center w-[60%] max-sm:w-full  ">
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(setEmployee({ login, password }));
            }}
            className=" bg-blue-700  pt-2 pb-2 text-white rounded-md w-full"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
