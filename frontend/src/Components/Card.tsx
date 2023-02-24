import { UserList } from "./Home";
import DeleteModal from "./Modal/DeleteModal";
import EditModal from "./Modal/EditModal";

export interface users {
  user: UserList;
}

function Card({ user }: users) {
  return (
    <div className="flex flex-col gap-y-3 items-center p-2 justify-start h-[160px] w-[220px] border border-gray-400 rounded">
      <div className="flex flex-row items-center">
        <span>{user.name}</span>
        <EditModal user={user} />
      </div>
      <span>{user.email}</span>
      <span>{user.title}</span>
      <DeleteModal id={user?._id} />
    </div>
  );
}

export default Card;
