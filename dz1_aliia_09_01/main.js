// задание№1
const id = document.getElementById('string-3');
const id2 = document.getElementById('string-5');
const id3 = document.getElementById('string-2');
const id4 = document.getElementById('string-6');
const id5 = document.getElementById('string-1');
const id6 = document.getElementById('string-3');
console.log(id.innerText+"\n"+id2.innerText+"\n"+id3.innerText+"\n"+id4.innerText+"\n"+id5.innerText+"\n"+id6.innerText);

// задание№2
const element = document.getElementsByClassName('element');

element[0].style.color = "red"
element[1].style.color = "red"
element[2].style.color = "red"
element[3].style.color = "green"
element[4].style.color = "green"
element[5].style.color = "green"

console.log(element)


// задание№3
const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
const todo = document.getElementById('todo-list');
for (let i=0; i < tasks.length; i++) {
    let li = document.createElement("li")
    li.innerHTML = tasks[i];
    li.className = "task"
    todo.append(li)
}


// задание№4
document.querySelectorAll('article>p').forEach((addHr) => {
    addHr.insertAdjacentHTML('afterend', '<hr/>');
})

