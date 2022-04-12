"use strict";
function helloString(message) {
    return message;
}
function helloNumber(message) {
    return message;
}
// 어떤 함수가 들어오는 인자와 나가는 return 타입이 일정한 규칙을 이루면서 같은 로직을 반복하는 
// 더 많은 반복된 함수들...
// any
function hello(message) {
    return message;
}
// Generic <T> = type
function helloGeneric(message) {
    return message;
}
// 에러는 안나지만 결과에 undefined가 나온다
console.log(hello("Mark").length);
console.log(hello(39).length);
console.log(helloGeneric('Mark').length);
// number는 length 사용 불가
console.log(helloGeneric(39));
console.log(helloGeneric(true));
