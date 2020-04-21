'use strict';

// JSON
// let options = {
//    width: 1300,
//    height: 700,
//    background: 'red',
//    font: {
//       size: '14px',
//       color: '#fff'
//    }
// };

// console.log(JSON.stringify(options));

// console.log(JSON.parse(JSON.stringify(options)));

// AJAX

let inputRub = document.getElementById('rr'),
   inputUsd = document.getElementById('ss');

inputRub.addEventListener('input', () => {
   let request = new XMLHttpRequest();

   // request.open(method, url, async, login, pass);
   request.open('GET', 'current.json');
   request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
   request.send();

   //status
   //statusText
   //responseText / response
   //readyState

   request.addEventListener('readystatechange', function() {
      if(request.readyState === 4 && request.status == 200) {
         let data = JSON.parse(request.response);

         inputUsd.value = inputRub.value / data.usd;
      } else {
         inputUsd.value = 'Что-то пошло не так!';
      }
   });

});
