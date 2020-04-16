let box = document.getElementById('box'),
   btn = document.getElementsByTagName('button'),
   circle = document.getElementsByClassName('circle'),
   heart = document.querySelectorAll('.heart'),   //  создается псевдомассив
   oneHeart = document.querySelector('.heart'), // обращение к первому селектору
   wrapper = document.querySelector('.wrapper');

console.log(box);
console.log(btn);
console.log(btn[0]);
console.log(circle[2]);
console.log(heart);
console.log(oneHeart);

box.style.backgroundColor = "blue";
btn[1].style.borderRadius = '80%';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
// heart[i].style.backgroundColor = 'blue';
// }

heart.forEach(function (item, i, hearts) {
   item.style.backgroundColor = 'blue';
});

// Создание переменной

let div = document.createElement('div'),
   text = document.createTextNode('Тут был я!');
console.log(div);
console.log(text);
div.classList.add('black');

// document.body.appendChild(div); // добавление элемента на страницу в конец родителя body

// wrapper.appendChild(div);

// div.innerHTML = '<h1>Hello</h1>';      //добавть текст
div.textContent = 'Hello world!';

document.body.insertBefore(div, circle[0]); // div перед circle[0]    div станет перед circle[0]
document.body.removeChild(circle[1]); //удалить элемент
wrapper.removeChild(heart[1]);

document.body.replaceChild(btn[1], circle[1]);     //    btn заменит circle