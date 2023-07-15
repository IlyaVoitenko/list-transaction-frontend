import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import TransactionsTable from "./components/TransactionsTable";
import NotFound from "./components/NotFound";
import ProtectedRoutes from "./utils/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/list-transactions" element={<TransactionsTable />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
