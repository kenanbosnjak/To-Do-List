

let addButton = document.querySelector('#submit-button');


addButton.addEventListener('click', () => {
    let inputContent = document.querySelector('input').value;
    let tasks = document.querySelector('.tasks');

    const task = document.createElement('div')
    task.classList.add('content')
    task.innerHTML = `<div class="content"><input id="task" type="text" readonly value="${inputContent}" />
    <button class="delete">Delete</button></div>`;
    document.querySelector('input').value = '';
    task.querySelector('.delete').addEventListener('click', () => task.remove())
    tasks.appendChild(task) ;
})



