import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NewUserType } from "../../types";
import InputField from "../fields/InputField";
import SelectField from "../fields/SelectField";

interface NewUserPropsI {
  newUser: (newUser: NewUserType) => void;
  availableGenders: Set<string>;
}

const NewUser: React.FC<NewUserPropsI> = ({ newUser, availableGenders }) => {
  return <NewUserForm newUser={newUser} availableGenders={availableGenders} />;
};

interface NewUserFormPropsI {
  newUser: (newUser: NewUserType) => void;
  availableGenders: Set<string>;
}

const NewUserForm: React.FC<NewUserFormPropsI> = ({
  newUser,
  availableGenders,
}) => {
  let [formState, setFormState] = useState<NewUserType>({} as NewUserType);

  const genderOptions = [...availableGenders].map((gender) => ({
    id: gender.toLowerCase(),
    value: gender.toLowerCase(),
    label: gender,
  }));

  let navigate = useNavigate();

  const onChangeInputValue = (id: string, value: any) => {
    setFormState({
      ...formState,
      [id]: value,
    });
  };

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    newUser(formState);
  };

  const onFormCancel = () => navigate("/", { replace: true });

  return (
    <form onSubmit={onFormSubmit} className="create-user-form">
      <h1>Add new user</h1>
      <InputField
        id="first_name"
        label="First Name"
        onChange={(value: string) => onChangeInputValue("first_name", value)}
      />
      <InputField
        id="last_name"
        label="Last name"
        onChange={(value: string) => onChangeInputValue("last_name", value)}
      />
      <InputField
        type="email"
        id="email"
        label="E-mail"
        onChange={(value: string) => onChangeInputValue("email", value)}
      />
      <SelectField
        id="gender"
        label="Gender"
        options={genderOptions}
        onChange={(value: string) =>
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

export default NewUser;
