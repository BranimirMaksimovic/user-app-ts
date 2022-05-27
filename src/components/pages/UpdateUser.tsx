import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import InputField from "../fields/InputField";
import SelectField from "../fields/SelectField";
import { UserType } from "../../types";

interface UpdateUserPropsI {
  findUser: (id: number) => UserType | undefined;
  updateUser: (updatedUser: UserType) => void;
  availableGenders: Set<string>;
}

const UpdateUser: React.FC<UpdateUserPropsI> = ({
  findUser,
  updateUser,
  availableGenders,
}) => {
  let { userId } = useParams();

  const genderOptions = [...availableGenders].map((gender) => ({
    id: gender.toLowerCase(),
    value: gender.toLowerCase(),
    label: gender,
  }));

  let user = findUser(Number(userId));
  if (!userId) return <div>userId undefind</div>;
  if (!user) return <div>User with that id not found</div>;

  return (
    <UpdateUserForm
      {...user}
      updateUser={updateUser}
      genderOptions={genderOptions}
    />
  );
};

interface UpdateUserFormPropsI extends UserType {
  updateUser: (updatedUser: UserType) => void;
  genderOptions: any;
}

const UpdateUserForm: React.FC<UpdateUserFormPropsI> = ({
  id,
  first_name,
  last_name,
  email,
  gender,
  updateUser,
  genderOptions,
}) => {
  let [formState, setFormState] = useState({
    first_name,
    last_name,
    email,
    gender,
  });

  let navigate = useNavigate();

  const onChangeInputValue = (id: string, value: any) => {
    setFormState({
      ...formState,
      [id]: value,
    });
  };

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    updateUser({ id, ...formState });
  };

  const onFormCancel = () => navigate("/", { replace: true });

  return (
    <form onSubmit={onFormSubmit} className="update-user-form">
      <h1>Update user: {id}</h1>
      <InputField
        id="first_name"
        label="First Name"
        initialValue={first_name}
        onChange={(value: any) => onChangeInputValue("first_name", value)}
      />
      <InputField
        id="last_name"
        label="Last name"
        initialValue={last_name}
        onChange={(value: any) => onChangeInputValue("last_name", value)}
      />
      <InputField
        type="email"
        id="email"
        label="E-mail"
        initialValue={email}
        onChange={(value: any) => onChangeInputValue("email", value)}
      />
      <SelectField
        id="gender"
        label="Gender"
        options={genderOptions}
        initialValue={gender}
        onChange={(value: any) =>
          onChangeInputValue(
            "gender",
            `${value[0].toUpperCase() + value.slice(1)}`
          )
        }
      />
      <button className="btn" type="submit">
        Save
      </button>
      <button className="btn" type="button" onClick={onFormCancel}>
        Cancel
      </button>
    </form>
  );
};

export default UpdateUser;

/* import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import InputField from "../fields/InputField";
import SelectField from "../fields/SelectField";

const UpdateUser = ({ findUser }) => {
  let { userId } = useParams();
  const genderOptions = [...availableGenders].map((gender) => ({
    id: gender.toLowerCase(),
    value: gender.toLowerCase(),
    label: gender,
  }));

  let user = findUser(userId);
  if (!userId) return <div>userId undefind</div>;
  if (!user) return <div>User with that id not found</div>;

  return (
    <UpdateUserForm
      {...user}
      updateUser={updateUser}
      genderOptions={genderOptions}
    />
  );
};

const UpdateUserForm = (
  id,
  first_name,
  last_name,
  email,
  gender,
  updateUser,
  genderOptions
) => {
  let [formState, setFormState] = useState({
    first_name,
    last_name,
    email,
    gender,
  });
  let navigate = useNavigate();

  const onFormCancel = () => navigate("/", { replace: true });

  return (
    <form className="update-user-form" action="/">
      <label htmlFor="first_name">First name:</label>
      <input type="text" id="first_name" name="first_name" />

      <label htmlFor="last_name">Last name:</label>
      <input type="text" id="last_name" name="last_name" />

      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" />

      <label htmlFor="gender">Gender:</label>

      <select name="gender" id="gender">
        <option value="Male">Male</option>
        <option value="Female">Femail</option>
        <option value="Genderfluid">Genderfluid</option>
      </select>

      <button type="submit">Save</button>
      <button type="button" onClick={onFormCancel}>
        Cancel
      </button>
    </form>
  );
};

export default UpdateUser; */
