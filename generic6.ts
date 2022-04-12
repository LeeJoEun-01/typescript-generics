// extends 뒤에 오는 타입들만 인자로 들어올 수 있다.
// <T>만 사용하면 나중에 실수할 확률이 높기 때문에 항상 가장 작은 단위로 정의해주는게 좋다.
class PersonExtends<T extends string | number> {
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}