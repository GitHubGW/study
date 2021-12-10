export const users = [
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
  const deletedUser = users.filter((user) => user.id === userId);
  if (deletedUser.length > 0) {
    return true;
  }
  return false;
};
