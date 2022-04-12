// 기존의 함수의 제너릭 부분만 추가
// 1) type alias 사용 
type HelloFunctionGeneric1 = <T>(message: T) => T;

const helloFunction1: HelloFunctionGeneric1 = <T>(message: T): T => {
  return message;
};

// 2) type interface 사용 
interface HelloFunctionGeneric2 {
  <T>(message: T): T;
}

const helloFunction2: HelloFunctionGeneric2 = <T>(message: T): T => {
  return message;
};
