import dogArray, { getById } from "./db";

const resolvers = {
  Query: {
    animal: () => dogArray,
    oneDog: (_, { id }) => getById(id),
  },
};

export default resolvers;
