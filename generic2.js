"use strict";
// 인자를 여러 개 넣을 수도 있다.
function helloBasic(message, comment) {
    return message;
}
// <>안에 type을 직접 지정할 수 있다
helloBasic("Mark", 36);
// type을 지정하지 않으면 추론된다.
helloBasic(36, 39);
