# MovieQL

#### schema.graphql

```js
type User {
  id: Int!
  name: String!
  age: Int!
  country: String!
}

type Query {
  getAllUsers: [User]!
  getUser(userId:Int!): User
}

type Mutation{
  createUser(name:String!, age:Int!, country:String!): Boolean!
  deleteUser(userId:Int!): Boolean!
}
```

#### resolvers.js

```js
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
```

#### db.js

```js
let users = [
  {
    id: 1,
    name: "sugar",
    age: 10,
    country: "kr",
  },
  {
    id: 2,
    name: "salt",
    age: 20,
    country: "us",
  },
  {
    id: 3,
    name: "pepper",
    age: 15,
    country: "uk",
  },
  {
    id: 4,
    name: "choco",
    age: 35,
    country: "ir",
  },
  {
    id: 5,
    name: "vanilla",
    age: 15,
    country: "us",
  },
];

export const handleGetAllUsers = () => {
  const allUsers = users;
  return allUsers;
};

export const handleGetUser = (userId) => {
  const foundUser = users.find((user) => user.id === userId);
  return foundUser;
};

export const handleCreateUser = (name, age, country) => {
  const newUser = { id: users.length + 1, name, age, country };
  users.push(newUser);

  if (newUser) {
    return true;
  }
  return false;
};

export const handleDeleteUser = (userId) => {
  const notDeletedUser = users.filter((user) => user.id !== userId);
  users = notDeletedUser;

  if (notDeletedUser.length > 0) {
    return true;
  }
  return false;
};
```
