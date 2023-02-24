import React from "react";
import { UserList } from "./Home";

interface users {
  user: UserList;
}

function Card({ user }: users) {
  return (
    <div className="flex flex-col gap-y-3 items-start p-2 justify-start h-[120px] w-[220px] border border-gray-400 rounded">
      <span>{user.name}</span>
      <span>{user.email}</span>
      <span>{user.title}</span>
    </div>
  );
}

export default Card;
