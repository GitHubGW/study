import PropTypes from "prop-types";

const Food = ({ foodName, foodImage, foodRating }) => {
  return (
    <div>
      <img src={foodImage} alt={foodName}></img>
      <h1>{foodName}</h1>
      <h1>{foodRating}</h1>
    </div>
  );
};

Food.propTypes = {
  foodName: PropTypes.string.isRequired,
  foodImage: PropTypes.string.isRequired,
  foodRating: PropTypes.number.isRequired,
};

export default Food;
