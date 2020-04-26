'use strict';

// localStorage.setItem('number', 1);
// console.log(localStorage.getItem('number'));
// localStorage.removeItem('number');
// localStorage.clear();

window.addEventListener('DOMContentLoaded', function () {

   let checkbox = document.getElementById('remember'),
      change = document.querySelector('button'),
      form = document.getElementsByTagName('form')[0];

   if (localStorage.getItem('isChecked') === 'true') {
      checkbox.checked = true;
   }

   if (localStorage.getItem('bg') === 'changed') {
      form.style.backgroundColor = '#ff3466';
   }

   checkbox.addEventListener('click', function () {
      localStorage.setItem('isChecked', true);
   });


   change.addEventListener('click', function () {
      localStorage.setItem('bg', 'changed');
      form.style.backgroundColor = '#ff3466';
   });

   let persone = {
      name: 'Alex',
      age: 26,
      tech: ["mobeli", "notebook"]
   };

   let serialized = JSON.stringify(persone);
   localStorage.setItem("Alex", serialized);

   console.log(JSON.parse(localStorage.getItem('Alex')));


});