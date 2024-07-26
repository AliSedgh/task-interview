import TitlePage from "../components/TitlePage";
import UserForm from "../components/UserForm";

const CreateUser = () => {
  return (
    <>
      <TitlePage boldText="Create" normalText="New Item" />
      <UserForm type="create" />
    </>
  );
};

export default CreateUser;
