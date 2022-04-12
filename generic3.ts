function helloArray<T>(message: T[]): T {
  return message[0];
}

function helloTuple<T, K>(message: [T, K]): T {
  return message[0];
}

// 위에 helloArray 함수의 리턴이 0번째 인덱스임으로 첫번째 인자만 출력된다.
helloArray(["Hello", "World"]);
helloArray(["Hello", 5]);


helloTuple(["Hello", "World"]);
helloTuple(["Hello", 5]);