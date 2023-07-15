import { useSelector } from "react-redux";
import { employeeSelector, isModalClientSelector } from "../../store/selectors";
import Header from "../Header";
import TransactionsTable from "../TransactionsTable";
import InfoClientModal from "../InfoClientModal";

const MainPage = () => {
  const isModalClient = useSelector(isModalClientSelector);
  return (
    <div className="flex flex-col h-screen bg-neutral-900">
      <Header />
      <TransactionsTable />
      {isModalClient ? <InfoClientModal /> : null}
    </div>
  );
};
export default MainPage;
