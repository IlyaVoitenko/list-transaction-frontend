import "./App.css";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./utils/ProtectedRoutes";

import Layout from "./components/Layout";

const Auth = lazy(() => import("./components/Auth"));
const MainPage = lazy(() => import("./components/MainPage"));
const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<ProtectedRoutes />}>
              <Route path="/list-transactions" element={<MainPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route index element={<Auth />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
