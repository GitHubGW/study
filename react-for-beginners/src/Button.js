import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return (
    <div className={styles.container}>
      <button className={styles.btn}>{text}</button>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
