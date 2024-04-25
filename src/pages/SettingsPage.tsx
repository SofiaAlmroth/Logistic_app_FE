import { Table } from "@components/common";
import { useUser } from "@hooks";
import { Column, SortColumn, User } from "@types";
import _ from "lodash";
import { useState } from "react";

const DEFAULT_SORT_COLUMN: SortColumn = { path: "name", order: "asc" };

function Settings() {
  const [sortColumn, setSortColumn] = useState(DEFAULT_SORT_COLUMN);
  const { users } = useUser();

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
      content: () => (
        <input type="checkbox" className="toggle toggle-primary" />
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
