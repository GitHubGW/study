type TPerson = {
  name: string;
  age: number;
  gender: string;
};

interface IPerson {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "gw",
  age: 10,
  gender: "male",
};

const sayHi = (person: IPerson): string => {
  return `${person.name} / ${person.age} / ${person.gender}`;
};

sayHi(person);
