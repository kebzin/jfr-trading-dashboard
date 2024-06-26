import UserDataTable from "@/components/user/DataTable";
import { GetAllUsers } from "@/libs/superbase/serverAction/userServerAction";
import React from "react";
// import DataTable from "";

const Users = async () => {
  const data = await GetAllUsers();

  // if the data is not avelable do not passed an empty array to the component
  // console.log(data);

  return (
    <div className="flex min-h-screen w-full flex-col mt-24 sm:pl-20">
      <UserDataTable users={data} />
    </div>
  );
};

export default Users;
