import { UserType } from "../../types";
import Users from "../Users";

interface HomePagePropsI {
  users: UserType[];
}

const Home: React.FC<HomePagePropsI> = ({ users }) => {
  return <Users users={users} />;
};

export default Home;
