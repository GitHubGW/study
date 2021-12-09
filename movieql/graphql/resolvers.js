const person = {
  name: "gw",
  age: 10,
  country: "kr",
};

const resolvers = {
  Query: {
    user: () => person,
  },
};

export default resolvers;
