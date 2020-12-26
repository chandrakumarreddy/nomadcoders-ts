class Human {
  public name: string;
  public age: number;
  public gender: string | undefined;
  constructor(name: string, age: number, gender?: string | undefined) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const person = new Human('chandra', 23, 'male');

const sayHi = ({ name, age, gender }: Human): string => {
  return `Hi ${name}, age ${age} and gender ${gender}!`;
};

console.log(sayHi(person));

export {};
