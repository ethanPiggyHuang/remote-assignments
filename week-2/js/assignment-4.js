/*-------歡迎訊息變動-------*/
const h1_container = document.getElementsByClassName('h1_container');
const message = document.getElementById('message');

h1_container[0].addEventListener("click", () => {
  message.textContent = 'Have a Good Time!'
});

/*-------Menu選單 顯示/隱藏-------*/
const menu_icon = document.getElementsByClassName('menu_icon');
const menu_expand = document.getElementsByClassName('menu_expand');
const menu_close = document.getElementsByClassName('menu_close');

menu_icon[0].addEventListener("click", (event) => {
  if(event.target.tagName === 'I'){
    menu_expand[0].style.display = 'block';
    menu_close[0].style.display = 'block';
  }
});

menu_close[0].addEventListener("click", (event) => {
  if(event.target.tagName === 'I'){
    menu_expand[0].style.display = 'none';
    menu_close[0].style.display = 'none';
  }
});

/*-------Box 顯示/隱藏-------*/
const click_button = document.getElementsByClassName('click_button');
const hidden = document.getElementsByClassName('hidden');

click_button[0].addEventListener("click", (event) => {
  if(event.target.tagName === 'BUTTON'){
    hidden[0].style.display = 'flex';
  }
});
