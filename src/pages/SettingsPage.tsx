import { Table, Toggle } from "@components/common";
import { useUser } from "@hooks";
import { updateUser } from "@services/userService";
import { Column, SortColumn, User } from "@types";
import _ from "lodash";
import { useState } from "react";

const DEFAULT_SORT_COLUMN: SortColumn = { path: "name", order: "asc" };

function Settings() {
  const [sortColumn, setSortColumn] = useState(DEFAULT_SORT_COLUMN);
  const { users, setUsers } = useUser();

  // skapa en handlechange som ska toggla och anropa put
  function handleToggle(id: string) {
    const newUsers = users.map((user) => {
      if (user.id === id) {
        user.isAdmin = !user.isAdmin;
      }
      updateUser(user);
      console.log(user);
      return user;
    });
    setUsers(newUsers);
  }

  const columns: Column<User>[] = [
    {
      path: "name",
      label: "Name",
    },
    {
      path: "email",
      label: "Email",
    },
    {
      path: "isAdmin",
      label: "Admin",
      key: "isAdmin",
      content: (user) => (
        <Toggle checked={user.isAdmin} onAdmin={() => handleToggle(user.id)} />
      ),
    },
  ];

  const sortedUsers = _.orderBy(users, sortColumn.path, sortColumn.order);

  return (
    <div className="grid grid-flow-row w-full h-full justify-items-center items-center">
      <Table
        columns={columns}
        items={sortedUsers}
        onSort={setSortColumn}
        sortColumn={sortColumn}
      />
    </div>
  );
}

export default Settings;
