document.body.scrollTop = 0;
scrollTo(document.body, document.body.scrollHeight, 1250);
PRETENDER_wait(getRandomInt(5, 7));
scrollTo(document.body, 0, 1250);
//
// 1) Хэдер
//
PRETENDER_wait(getRandomInt(2, 4));
PRETENDER_mousemove(D_O_M.header);
PRETENDER_wait(getRandomInt(3, 6));
//
// 2) Контентная часть
//   
PRETENDER_mousemove(D_O_M.content);
//
// 3) СайдБар
//
PRETENDER_wait(getRandomInt(3, 6));
PRETENDER_mousemove(D_O_M.aside);
PRETENDER_wait(getRandomInt(3, 6));
//
// 4) Выделение текста с последующим копированием
// 

//
// 5) Футер
// 
PRETENDER_mousemove(D_O_M.footer);
PRETENDER_wait(getRandomInt(2, 5));

document.body.scrollTop = 0;
scrollTo(document.body, document.body.scrollHeight, 1250);
PRETENDER_wait(getRandomInt(5, 7));
scrollTo(document.body, 0, 1250);