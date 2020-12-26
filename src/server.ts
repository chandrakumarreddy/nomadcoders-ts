const name = 'chandra';
const age = 23;
const gender = 'male';

const sayHi = (name: string, age: number, gender?: string): string => {
  return `Hi ${name}, age ${age} and gender ${gender}!`;
};

console.log(sayHi(name, age, gender));

export {};
