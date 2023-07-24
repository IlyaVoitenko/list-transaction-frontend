import Context from "./ClientContext";
import BtnCloseModal from "./BtnCloseModal";

const InfoClientModal = ({ client, trans }) => {
  return (
    <div className="flex justify-center items-center text-white fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="bg-slate-800  rounded w-2/4">
        <BtnCloseModal client={client} />
        <Context client={client} trans={trans} />
      </div>
    </div>
  );
};

export default InfoClientModal;
