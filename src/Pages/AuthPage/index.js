import React from "react";
import Auth from "../../components/Auth";
import LoadingPage from "../LoadingPage";
import { isLoadingEmployee } from "../../store/selectors";

import { useSelector } from "react-redux";

const AuthPage = () => {
  const isLoading = useSelector(isLoadingEmployee);
  return !isLoading ? <Auth /> : <LoadingPage />;
};

export default AuthPage;
