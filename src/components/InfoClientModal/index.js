import { useSelector } from "react-redux";
import ClientContext from "./ClientContext";
import BtnCloseModal from "./BtnCloseModal";
import { getDetailInfoTransactionTestSelector } from "../selectors";

const InfoClientModal = () => {
  const testDataTrans = useSelector(getDetailInfoTransactionTestSelector); //will delete
  // console.log("testDataTrans :", testDataTrans);
  const client = {
    name: "Jack",
    surname: "London",
    number: "+45566225522",
    avatarUrl: "",
    country: "us",
    email: "zzadasd@fewf.com",
  }; //will delete when will get data

  return (
    <div className="flex justify-center items-center text-white fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="bg-slate-800  rounded w-2/4">
        <BtnCloseModal />
        <ClientContext data={testDataTrans} />
      </div>
    </div>
  );
};

export default InfoClientModal;
