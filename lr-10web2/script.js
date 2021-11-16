const url = 'https://api.coinlore.net/api/coin/markets/?id=90';

let input = document.getElementById('name');
let find = document.getElementById('find');
let answer = document.getElementById('answer');

// Вешаем событие на клик по кнопке "найти"
find.addEventListener('click', async _ => {
// Если в поле ввода текста пусто, то ничего не делаем и завершаем функцию
  if (input.value === '') return;
  // Отправляем запрос на ссылку API * + имя покемона
  // чтобы сервер отдал нам данные по
  // конкретному покемону
  let objJSON = await fetch(url + input.value);
  // так как ответ возвращается в формате json
  // чтобы с ним работать, как с обычным объектом
  // надо из него сделать обычный объект js
  // это и делает метод .json()
  let obj = await objJSON.json();
  
  // Здесь мы вставляем данные из объекта, полученного из API
  // в наш HTML документ
  answer.innerHTML = `Рост покемона: ${obj.height} <br>
  Id покемона: ${obj.id} <br>
  Вес покемона: ${obj.weight} <br>
  Имя покемона: ${obj.name}`;
  
  // Очищаем поле ввода
  input.value = '';
});