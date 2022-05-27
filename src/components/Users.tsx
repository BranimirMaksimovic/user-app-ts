import { UserType } from "../types";
import UserList from "./UserList";

interface UsersPropsI {
  users: UserType[];
}

const Users: React.FC<UsersPropsI> = ({ users }) => {
  return (
    <div className="users">
      <UserList users={users} />
    </div>
  );
};

export default Users;
