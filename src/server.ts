interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: 'chandra',
  age: 23,
  gender: 'male'
};

const sayHi = ({ name, age, gender }: Human): string => {
  return `Hi ${name}, age ${age} and gender ${gender}!`;
};

console.log(sayHi(person));

export {};
