import { UserType } from "../types";

type UserTilePropsI = UserType;

const UserTile: React.FC<UserTilePropsI> = ({
  id,
  first_name,
  last_name,
  email,
  gender,
}) => {
  return (
    <div className="user-list-preview">
      {id}
      <h2>
        <strong>User:</strong> {first_name} {last_name}
      </h2>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Gender:</strong>
        {gender}
      </p>
    </div>
  );
};

export default UserTile;
