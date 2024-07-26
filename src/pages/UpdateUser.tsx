import { useParams } from "react-router-dom";
import TitlePage from "../components/TitlePage";
import UserForm from "../components/UserForm";

const UpdateUser = () => {
  const { id } = useParams();

  return (
    <>
      <TitlePage boldText="Edit" normalText="Item" />
      <UserForm type="update" userId={Number(id)} />
    </>
  );
};

export default UpdateUser;
