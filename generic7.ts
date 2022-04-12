interface IPerson {
  name: string;
  age: number;
}

const person: IPerson = {
  name: "Mark",
  age: 39,
};

// 어떤 객체에 keyof를 붙이면 type으로 나오는데 그 type은 key의 이름으로 된 문자열이다.
// type Keys = keyof IPerson;

// const keys: Keys = "name";

// IPerson[keyof IPerson]
// => IPerson ["name" | "age"]
// => IPerson["name"] | IPerson["age"]
// => string | number 

// IPerson이 T로 바뀜
function getProp<T, K extends keyof T>(obj: T, key: K): T[keyof T] {
  return obj[key];
}

getProp(person, 'age');

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

setProp(person, "name", "Anna");