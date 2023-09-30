const card = document.querySelector('.card')

let hitrandom = 0;
let timeval = 60;
let score = 0;
function makebubble(){
    let cluster = ''
    for (let index = 0; index <= 83; index++) {
        let vn = Math.floor(Math.random() * 10)
        cluster += `<div class="circle">${vn}</div>`
    }
    card.innerHTML = cluster
}


const timer = document.querySelector('.timer')

function time() {
   let interval =  setInterval(() => {
        if(timeval > 0){
            timeval--
            timer.textContent = timeval
        }
        else{
            clearInterval(interval)
            card.textContent = 'Game over!!!!'
        }
    }, 1000)
    console.log(timer)
}
time()

const hitval = document.querySelector('.hits-number')
function hits() {
    hitrandom = Math.floor(Math.random() * 10)
    hitval.textContent = hitrandom
}

const scoreinc = document.querySelector('.score')

function increassscore() {
    score += 10
    scoreinc.textContent = score
}

function bubbleevent() {
    card.addEventListener('click', (details) => {
        let ln = Number(details.target.textContent)
        if (ln === hitrandom) {
            hits()
            increassscore()
            makebubble()
        }
       
    })
}
hits()
makebubble()
bubbleevent()