import useSWR from "swr";
import { getAllUser } from "../api/api";
import Card from "./Card";
import EditModal, { Inputs } from "./Modal/EditModal";
import Loader from "../assets/Loader";

function Home() {
  const { data, error, isLoading } = useSWR<Inputs[]>("/users", getAllUser);

  if (error) {
    return <h1 className="text-red-500 text-center text-2xl">Error...</h1>;
  }
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <EditModal />
      <div className="flex flex-wrap gap-4 mt-6">
        {data &&
          data?.map((user) => {
            return <Card key={user?._id} user={user} />;
          })}
      </div>
    </div>
  );
}

export default Home;
