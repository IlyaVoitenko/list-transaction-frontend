import { useSelector } from "react-redux";
import {
  isModalSelector,
  getClientSelector,
  getDetailTransaction,
} from "../../store/selectors";
import Header from "../Header";
import TransactionsTable from "../TransactionsTable";
import InfoClientModal from "../InfoClientModal";
import Footer from "../Footer";

const MainPage = () => {
  const isModal = useSelector(isModalSelector);
  const client = useSelector(getClientSelector);
  const detailTransaction = useSelector(getDetailTransaction);
  return (
    <div className="flex flex-col h-screen bg-neutral-900">
      <Header />
      <TransactionsTable />
      {isModal && <InfoClientModal client={client} trans={detailTransaction} />}
      <Footer />
    </div>
  );
};
export default MainPage;
