import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <h1>Navigation</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Navigation;
