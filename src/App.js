import "./App.css";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Layout from "./components/Layout";

const Auth = lazy(() => import("./Pages/AuthPage"));
const MainPage = lazy(() => import("./Pages/MainPage"));
const NotFound = lazy(() => import("./Pages/NotFoundPage"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />

          {/* <Route path="/" element={<Layout />}>
            <Route element={<ProtectedRoutes />}>
              <Route path="/list-transactions" element={<MainPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route index element={<Auth />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
