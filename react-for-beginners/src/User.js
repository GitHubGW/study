import { useEffect } from "react";

const User = () => {
  useEffect(() => {
    console.log("created");
    alert("created");

    return () => {
      console.log("destoryed");
      alert("destoryed");
    };
  }, []);

  return <h1>User</h1>;
};

export default User;
