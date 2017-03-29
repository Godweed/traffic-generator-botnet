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
PRETENDER_wait(1)
PRETENDER_mousemove('ins:nth-child(1)');
//
// 3) СайдБар
//
PRETENDER_wait(getRandomInt(3, 6));
PRETENDER_mousemove(D_O_M.aside);
PRETENDER_wait(1)
PRETENDER_mousemove('ins:nth-child(2)');
PRETENDER_wait(getRandomInt(3, 6));
//
// 4) Выделение текста с последующим копированием
// 

//
// 5) Футер
// 
PRETENDER_mousemove(D_O_M.footer);
PRETENDER_wait(getRandomInt(2, 5));
PRETENDER_mousemove('ins:nth-child(3)');
PRETENDER_wait(getRandomInt(2, 5));
