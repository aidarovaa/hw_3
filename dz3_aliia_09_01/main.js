const input = document.getElementById('input_task')
const btn = document.getElementById('tasks')
const newTask = [];

function deleteTask(e) {
    newTask.splice(e.target.id, 1)
    render();
}

function changeTask(e) {
    const promTask = prompt('Change task:', newTask[e.target.id].task)
    newTask[e.target.id].task = promTask;
    render();
}

function render() {
    document.querySelector('.lists').remove();

    const blockTask = document.createElement('div');
    blockTask.setAttribute('class', 'lists');

    for (let i = 0; i < newTask.length; i++) {
        const task = `
            <div class="task">
                <p>${newTask[i].task}</p>
                <div>
                    <button id="${i}" onclick="changeTask(event)">change</button>
                    <button id="${i}" onclick="deleteTask(event)">delete</button>
                </div>
            </div>`
        blockTask.innerHTML += task;
    }
    document.querySelector('.content').append(blockTask);
}

btn.onclick = () => {
    if (input.value.length <= 3){
        const elem = {
            id: taskList.length,
            task: input.value
        };
        newTask.push(elem);
        input.value = "";
        render();
    }
    else {
        alert('Введите минимум 3 символа!')
    }
}
render()

input.addEventListener('change', (e) => {
    if (e.target.value.length >= 3){
        const newTask2 = {
            id: newTask.length,
            task: e.target.value
        };
        newTask.push(newTask2);

        e.target.value = ''
        render()
    }
    else  {
        alert('Введите минимум 3 символа!')
    }
})

render()