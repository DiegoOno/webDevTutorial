const weatherForm = document.querySelector('form');
const address = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', async(e) => {
  e.preventDefault();
  const location = address.value;
  const url = `http://localhost:3000/weather?address=${location}`;

  messageOne.textContent = 'Loading';

  fetch(url).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
        messageTwo.textContent = '';
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.report;
      }
    });
  });
});