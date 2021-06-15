import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link to="/">
        <h1>Go to Home</h1>
      </Link>
    </div>
  );
};

export default About;
