// 클래스 이름 뒤에 제너릭 표시
class Person5<T, K> {
  private _name: T;
  private _age: K;

  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}

new Person5("Mark", 39);
// new Person5<string>(39); 에러