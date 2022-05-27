import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h1>User aplication</h1>
      <div className="links">
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;
