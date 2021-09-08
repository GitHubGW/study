import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const AnimatedTitle = styled(animated.h1)`
  /* color: orange; */
`;

const Title = styled.h2`
  color: dodgerblue;
`;

const Home = () => {
  const animatedTitle = useSpring({
    from: { color: "orange" },
    to: { color: "dodgerblue" },
    delay: 3000,
    loop: { reset: false },
  });
  return (
    <>
      <AnimatedTitle style={animatedTitle}>Home</AnimatedTitle>
      <Title>Title</Title>
    </>
  );
};

export default Home;
