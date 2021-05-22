import { useState, useEffect } from "react";

const useScroll = () => {
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  });

  const handleScroll = (event) => {
    // console.log("handleScroll");
    // console.log(event);
    // console.log(window.scrollX);
    console.log(window.scrollY);

    setCoords({
      x: window.scrollX,
      y: window.scrollY,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return coords;
};

function UseScroll() {
  const { x, y } = useScroll();
  // console.log(x, y);

  return (
    <div style={{ height: "500vh", backgroundColor: y > 1500 ? "yellowgreen" : "dodgerblue" }}>
      <h1 style={{ position: "fixed" }}>useScroll</h1>
    </div>
  );
}

export default UseScroll;
