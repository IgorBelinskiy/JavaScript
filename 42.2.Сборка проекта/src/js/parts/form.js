function form() {
   let message = {
      loading: 'Загрузка',
      success: 'Спасибо! Скоро мы с вами свяжемся!',
      failur: 'Что-то пошло не так'
   };

   let form = document.querySelector('.main-form');
   let input = form.getElementsByTagName('input');
   let statusMessage = document.createElement('div');

   statusMessage.classList.add('status');

   form.addEventListener('submit', function (event) {
      event.preventDefault();
      form.appendChild(statusMessage);

      let request = new XMLHttpRequest();
      request.open('POST', 'server.php');
      // request.setRequestHeader('Content-type', 'application/x-www-urlencoded');
      request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

      let formData = new FormData(form); //Получаем все, что ответил пользователь в форме

      let obj = {};
      formData.forEach(function (value, key) { //заполнение obj значениями с formData
         obj[key] = value;
      });

      let json = JSON.stringify(obj);
      // request.send(formData);
      request.send(json);


      request.addEventListener('readystatechange', function () { //изменение параметров запроса
         if (request.readyState < 4) {
            statusMessage.innerHTML = message.loading;
         } else if (request.readyState === 4 && request.status == 200) {
            statusMessage.innerHTML = message.success;
         } else {
            statusMessage.innerHTML = message.failur;
         }
      });

      for (let i = 0; i < input.length; i++) {
         input[i].value = '';
      }
   });
}

module.exports = form;