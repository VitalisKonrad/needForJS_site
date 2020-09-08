const score = document.querySelector('.score'),
    start = document.querySelector('.start'),
    gameArea = document.querySelector('.gameArea'),
    car = document.createElement('div');

car.classList.add('car')
start.addEventListener('click', startGame)
document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false,
};

const setting = {
    start: false,
    score: 0,
    speed: 3,
};

function startGame() {
    start.classList.add('hide');
    setting.start = true;
    gameArea.appendChild(car);
    requestAnimationFrame(playGame);
}

function playGame() {
    console.log('The game has been started')
    if (setting.start){
        //Запускает рекурсию без большой нагрузки на ПК.
        requestAnimationFrame(playGame);
    }
}

function startRun(event) {
    //Для отмены дефолтного поведения браузера (нажатие на стрелочки клавы - прокрутка страницы)
    event.preventDefault();
    //Находим в снашем словаре кнопку которую нажали.
    keys[event.key] = true;

}

function stopRun(event) {
    event.preventDefault();
    keys[event.key] = false;
}