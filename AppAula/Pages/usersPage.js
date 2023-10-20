import { useContext, useEffect, useState } from "react";
import UserListCard from "../Components/UserListCardComponent/UserListCard";
import { UsersContext } from "../Context/UsersContext";

export default function UsersPage() {
  const { users } = useContext(UsersContext);
  const { sla, setSla } = useState([]);

  console.log(users);

  const Users = () => {
    return users.map((usr) => {
      return (
        <>
          <UserListCard user={usr}></UserListCard>
        </>
      );
    });
  };

  return (
    <>
      <Users></Users>
    </>
  );
}
