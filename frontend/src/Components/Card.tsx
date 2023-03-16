import DeleteModal from "./Modal/DeleteModal";
import EditModal, { Inputs } from "./Modal/EditModal";

export interface users {
  user: Inputs;
}

function Card({ user }: users) {
  return (
    <div className="flex shadow flex-col gap-y-3 items-center p-3 justify-start h-[180px] w-[225px] hover:transition-all border border-gray-400 hover:border-gray-700 rounded">
      <div className="flex flex-row gap-2 items-center">
        <span>{user?.name}</span>
        <EditModal user={user} />
      </div>
      <span>{user?.email}</span>
      <span>{user?.title}</span>
      <DeleteModal id={user?._id} />
    </div>
  );
}

export default Card;
