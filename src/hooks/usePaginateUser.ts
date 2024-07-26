import { useSearchParams } from "react-router-dom";
import { useStore } from "../zustand/store";

const usePaginateUser = () => {
  const perPage = 4;
  const { users } = useStore();
  const totalPages = Math.ceil(users.length / perPage);
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || "1");
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const currentUsers = users.slice(startIndex, endIndex);

  return {
    currentUsers,
    totalPages,
    page,
  };
};

export default usePaginateUser;
