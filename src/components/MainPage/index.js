import { useSelector } from "react-redux";
import { isModalClientSelector } from "../../store/selectors";
import Header from "../Header";
import TransactionsTable from "../TransactionsTable";
import InfoClientModal from "../InfoClientModal";
import Footer from "../Footer";

const MainPage = () => {
  const isModalClient = useSelector(isModalClientSelector);
  return (
    <div className="flex flex-col h-screen bg-neutral-900">
      <Header />
      <TransactionsTable />
      {isModalClient && <InfoClientModal />}
      <Footer />
    </div>
  );
};
export default MainPage;
