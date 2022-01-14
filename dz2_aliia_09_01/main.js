//задание1,2
let cont1 = document.getElementById("container")
let cont2 = document.getElementById("container2")
document.getElementById("add-item-btn").addEventListener("click", () => {
    newElement(cont1, 'element')
});

function newElement(container, text) {
    let element = document.createElement("div");
    element.className = "element";
    element.innerText = text;
    container.appendChild(element);
}

let btnStart = document.getElementById("btn_start")
let btnStop = document.getElementById("stop")
let interval
btnStart.addEventListener('click', () => {
    interval = setInterval(() => {
    let ranNum = Math.floor(Math.random() * 20);
        newElement(cont2, ranNum)
    },1000)
})
btnStop.addEventListener('click', () => {
    clearInterval(interval)
})

// задание3
function tick() {
    seconds.textContent = (+seconds.textContent + 1).toString().padStart(2, "0");
    if (+seconds.textContent === 60) {
        minutes.textContent = (+minutes.textContent + 1).toString().padStart(2, "0");
        seconds.textContent = "00";
    }
}

let intervalId,
    minutes = document.getElementById("minutes"),
    seconds = document.getElementById("seconds"),
    start = document.getElementById("start"),
    pause = document.getElementById("pause"),
    reset = document.getElementById("reset");

start.addEventListener("click", start_click);
pause.addEventListener("click", pause_click);
reset.addEventListener("click", reset_click);
pause.disabled = true;
reset.disabled = true;

function start_click() {
    intervalId = setInterval(tick, 1000);
    start.disabled = true;
    pause.disabled = false;
    reset.disabled = false;
}

function pause_click() {
    clearInterval(intervalId);
    start.disabled = false;
    pause.disabled = true;
    reset.disabled = true;
    document.getElementById("start").classList.remove("disabled");
}

function reset_click() {
    clearInterval(intervalId);
    minutes.textContent = "00";
    seconds.textContent = "00";
    start.disabled = false;
    pause.disabled = true;
    reset.disabled = true;
}


// задание2
// задание4
//start
let form = document.forms[0]
let inputLogin = form[0]
let inputPassword = form[1]
let btn = form.childNodes[5]
let isLoginTrue, isPasswordTrue = false

inputLogin.addEventListener('keypress', () => {
    if (inputLogin.value.length >= 6) {
        isLoginTrue = true;
    } else if (inputLogin.value.length < 6) {
        btn.disabled = true;
    }
    if (isLoginTrue && isPasswordTrue) {
        btn.disabled = false;
    }
})
inputPassword.addEventListener('keypress', () => {

    isPasswordTrue = inputPassword.value.length >= 6 ? true : false

    if (isLoginTrue && isPasswordTrue) {
        btn.disabled = false;
    }
})
btn.addEventListener('click', () => {
    alert(`${inputLogin.value} ${inputPassword.value}`)
})


// задание5
document.querySelectorAll('.helper-answer').forEach((_) =>
    _.addEventListener('click', (e) => {
        let _e = e.target;

        changeQA(_e, ['Показать ответ', 'Скрыть ответ'], 'interaction');
    })
);

function changeQA(e, arr, toggle) {
    e.state = +!e.state;
    e.textContent = arr[e.state];

    e.nextElementSibling.classList.toggle(toggle);
}