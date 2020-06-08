const buttonCol = document.querySelector('.buttonCol');
const bodyBcg = document.querySelector('body');

const colors = ['blue', 'yellow', 'orange', 'purple', 'ash', 'green', 'pink'];

buttonCol.addEventListener('click',changeColor);

function changeColor() {
    let random = Math.floor(Math.random()*colors.length)
    bodyBcg.style.backgroundColor = colors[random];
    }
