let btn = document.querySelectorAll('button'),
   wrap = document.querySelector('.wrapper'),
   link = document.querySelector('a');

// btn[0].onclick = function() {
//    alert('Hello');
// };

// btn[0].addEventListener('click', function (event) {
//    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
// }); // Произошло событие: click на элементе [object HTMLButtonElement]


// btn[0].addEventListener('click', function (evetn) {
//    let target = event.target;          
//    target.style.display = 'none';
// });

// btn[0].addEventListener('click', function () {
//    alert("Привет");
// });

// btn[0].addEventListener('mouseenter', function () {
//    alert("Chelsea FC!!!");
// });
// wrap.addEventListener('click', function (event) {
//    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
// }); // Произошло событие: click на элементе [object HTMLButtonElement]

btn.forEach(function (item) {       //перебор каждого эдемента псевдомассива
   item.addEventListener('mouseleave', function () {
      console.log('Вышли!!!');
   });
});

// btn.forEach(item => {               // стрелочные функции
//    item.addEventListener('mouseleave', function () {
//       console.log('Вышли!!!');
//    });
// });

link.addEventListener('click', function (event) {
   event.preventDefault(); //удаляет стандартные функции link
   console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});