import { useSelector } from "react-redux";
import ClientContext from "./ClientContext";
import BtnCloseModal from "./BtnCloseModal";
import { getClientSelector } from "../../store/selectors";

const InfoClientModal = () => {
  const client = useSelector(getClientSelector);
  return (
    <div className="flex justify-center items-center text-white fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="bg-slate-800  rounded w-2/4">
        <BtnCloseModal />
        <ClientContext client={client} />
      </div>
    </div>
  );
};

export default InfoClientModal;
