import { user } from "@services";
import { User } from "@types";
import { useEffect, useState } from "react";

export function useUser() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetch() {
      const { data: users } = await user.getUsers();
      setUsers(users);
    }

    fetch();
  }, []);

  return { users, setUsers };
}
