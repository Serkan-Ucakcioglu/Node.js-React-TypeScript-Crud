import React from "react";
import TrashSvg from "../assets/TrashSvg";
import { UserList } from "./Home";

interface users {
  user: UserList;
}

function Card({ user }: users) {
  return (
    <div className="flex flex-col gap-y-3 items-center p-2 justify-start h-[160px] w-[220px] border border-gray-400 rounded">
      <span>{user.name}</span>
      <span>{user.email}</span>
      <span>{user.title}</span>
      <span className="w-full flex justify-center items-center">
        {" "}
        <TrashSvg />
      </span>
    </div>
  );
}

export default Card;
