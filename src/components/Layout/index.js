import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../Loading";

const Layout = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
