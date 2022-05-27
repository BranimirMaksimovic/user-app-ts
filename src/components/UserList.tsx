import { UserType } from "../types";
import UserTile from "./UserTile";

interface UserListPropsI {
  users: UserType[];
}

const UserList: React.FC<UserListPropsI> = ({ users }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserTile key={user.id} {...user} />
      ))}
    </div>
  );
};

export default UserList;
