const name = 'chandra';
const age = 23;
const gender = 'male';

const sayHi = (name: string, age: number, gender?: string) => {
  console.log(`Hi ${name}, age ${age} and gender ${gender}`);
};

sayHi(name, age);

export {};
