import style from "./Test.module.css";

const Test = () => {
  console.log("style", style);

  return (
    <div className={style.container}>
      <h1 className={style.title}>Test</h1>
    </div>
  );
};

export default Test;
