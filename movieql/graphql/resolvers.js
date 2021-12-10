import { handleCreateUser, handleDeleteUser, handleGetAllUsers, handleGetUser } from "./db";

const resolvers = {
  Query: {
    getAllUsers: () => handleGetAllUsers(),
    getUser: (_, { userId }) => handleGetUser(userId),
  },

  Mutation: {
    createUser: (_, { name, age, country }) => handleCreateUser(name, age, country),
    deleteUser: (_, { userId }) => handleDeleteUser(userId),
  },
};

export default resolvers;
