import Pagination from "../components/Pagination";
import TitlePage from "../components/TitlePage";
import UsersTable from "../components/UsersTable";

const Home = () => {
  return (
    <div>
      <TitlePage boldText="List" normalText="Items" />
      <UsersTable />
      <Pagination />
    </div>
  );
};

export default Home;
