'use strict';

try {
   console.log("Good");
   console.log(a);
   console.log("Normal");
} catch (error) {
   console.log(error.name);
   console.log(error.message);
   console.log(error.stack);

   console.log(`Мы получили ошибку ${error.name}`);
} finally {
   console.log("Выполнюсь всегда!");
}

console.log('А я буду работать дальше');