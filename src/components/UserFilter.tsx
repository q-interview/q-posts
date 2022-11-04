import React, { ChangeEvent } from "react";
import { IUser } from "../@types/User";
import { api } from "../consts";
import { useFetch } from "../hooks";
import { actions, useStore } from "../store";

const UserFilter = () => {
  const { data: users } = useFetch<IUser[]>(`${api.USERS_ROUTE}`);
  const { dispatch } = useStore();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(actions.changeUser(+event.currentTarget.value));
  };

  return (
    <select className="w-40" onChange={handleChange}>
      <option value={0}>All People</option>
      {users?.map((user) => (
        <option key={user.name} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
};

export default UserFilter;
