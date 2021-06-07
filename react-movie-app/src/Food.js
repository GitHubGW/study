import PropTypes from "prop-types";

const foodList = [
  {
    id: 1,
    name: "Chicken",
    rating: 3.2,
  },
  {
    id: 2,
    name: "Pizza",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Kimchi",
    rating: 5.5,
  },
];

const foodListMap = (food) => {
  return (
    <GetFood key={food.id} foodName={food.name} foodRating={food.rating} />
  );
};

const GetFood = ({ foodName, foodRating }) => {
  console.log(foodName, foodRating);
  return (
    <div>
      <h3>foodName: {foodName}</h3>
      <h3>foodRating: {foodRating}</h3>
    </div>
  );
};

GetFood.propTypes = {
  foodName: PropTypes.string.isRequired,
  foodRating: PropTypes.number.isRequired,
};

const Food = () => {
  return (
    <>
      <h1>Food</h1>
      {foodList.map(foodListMap)}
    </>
  );
};

export default Food;
