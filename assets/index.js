// Instanciando as 'variáveis de controle'
let hours = 0;
let minutes = 0;
let seconds = 0;

let intervalId;


// Função para escrever (atualizar) a alteração dos dígitos no formato hh:mm:ss (00:00:00)
// padStart é 
function updateDisplayTimer() {
    const timer = document.querySelector('.timer')
    timer.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

function startTimer() {
    intervalId = setInterval(() => {
    const timer = document.querySelector('.timer')
        timer.classList.remove('vermelho');
        seconds++;
        if (seconds === 60) {
          seconds = 0;
          minutes++;
          if (minutes === 60) {
            minutes = 0;
            hours++;
          }
        }
        updateDisplayTimer();
    }, 1000);
}


function stopTimer() {
    clearInterval(intervalId)
    const timer = document.querySelector('.timer')
    timer.classList.add('vermelho')
}

function zeroTimer() {
    clearInterval(intervalId)
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplayTimer();
    const timer = document.querySelector('.timer');
    timer.classList.remove('vermelho');
}

const go = document.querySelector('.go')
const stop = document.querySelector('.stop')
const zero = document.querySelector('.zero')

go.addEventListener('click', startTimer);

stop.addEventListener('click', stopTimer);
zero.addEventListener('click', zeroTimer);

updateDisplayTimer();