import { useParams, useNavigate } from "react-router-dom";
import { UserType } from "../../types";

interface UserPropsI {
  findUser: (id: number) => UserType | undefined;
}
const User: React.FC<UserPropsI> = ({ findUser }) => {
  let { userId } = useParams<{ userId: string | undefined }>();

  let user = findUser(Number(userId));

  if (!userId) return <div>userId udefind</div>;
  if (!user) return <div>User with thet id not found</div>;
  return <UserInformation {...user} />;
};

interface UserInformationPropsI extends UserType {}

const UserInformation: React.FC<UserInformationPropsI> = ({
  id,
  first_name,
  last_name,
  email,
  gender,
}) => {
  //napravio promenjivu koja koristi useNavigate func.
  let navigate = useNavigate();
  // funkcija koje je definisana od strane react router dom paketa, moze se procitati vise u dokumentaciji
  // ova funkcija dozvoljava nam da se krecemo u sklop aplikacije, koristeci pre-definisane rute u App.js
  const onFormCancel = () => navigate("/", { replace: true });

  return (
    <div className="user-information">
      {id}
      <h1>
        {first_name} {last_name}
      </h1>
      <p> {email} </p>
      <p> {gender} </p>
      {/*dodao button za vracanje na sve korisnike*/}
      <button className="btn" type="button" onClick={onFormCancel}>
        Back to all users
      </button>
    </div>
  );
};
export default User;
