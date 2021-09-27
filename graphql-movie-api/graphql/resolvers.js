const dog = {
  name: "bulldog",
  age: 5,
  gender: "male",
};

const resolvers = {
  Query: {
    animal: () => dog,
  },
};

export default resolvers;
