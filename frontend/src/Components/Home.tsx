import useSWR from "swr";
import { getAllUser } from "../api/api";
import Card from "./Card";
import EditModal from "./Modal/EditModal";

export interface UserList {
  _id: string;
  name: string;
  email: string;
  title: string;
}

function Home() {
  const {
    data = [],
    error,
    isLoading,
  } = useSWR<UserList[]>("/users", getAllUser);

  return (
    <div>
      <EditModal />
      {data?.map((user) => {
        return <Card key={user?._id} user={user} />;
      })}
    </div>
  );
}

export default Home;
