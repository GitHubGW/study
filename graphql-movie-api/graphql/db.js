const dogArray = [
  {
    id: 1,
    name: "bulldog",
    gender: "male",
    age: 25,
  },
  {
    id: 2,
    name: "pitbull",
    gender: "female",
    age: 37,
  },
  {
    id: 3,
    name: "poodle",
    gender: "female",
    age: 12,
  },
];

export const getById = (id) => {
  const filteredDog = dogArray.filter((dogObject) => {
    return dogObject.id === id;
  });
  return filteredDog[0];
};

export default dogArray;
