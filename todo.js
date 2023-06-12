const frm = document.querySelector('form');
const unList = document.querySelector('ul');
document.getElementById('clear').addEventListener('click', clearAll);

frm.addEventListener('submit', function(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if(input.value !== '') {
        addToList(input.value);
    }
    input.value = '';
});


function addToList(para) {
    const list = document.createElement('li');
    list.innerHTML = `
          <span class="todo-list">${para}</span>
          <button name="check" class="btn-list"><i class="fas fa-check"></i></button>
          <button name="delete" class="btn-list"><i class="fas fa-trash-alt"></i></button>
    `;
    list.classList.add('todo-list-item');
    unList.appendChild(list);
}

unList.addEventListener('click', function(e){
    if(e.target.name == 'check'){
        checkBtn(e)
    }
    if(e.target.name == 'delete'){
        deleteBtn(e)
    }
});

function checkBtn(e){
    let item = e.target.parentNode;
    if(item.style.textDecoration == 'line-through'){
        item.style.textDecoration = 'none'
    }else {
        item.style.textDecoration = 'line-through'
    }
}

function deleteBtn(e){
    let item = e.target.parentNode;
    item.classList.add('todo-list-item-fall');
    function doSome(){
        item.remove()
    }
    setTimeout(doSome, 400)
}

function clearAll(){
    let ulRemove = document.getElementById('remove');
    ulRemove.remove();
}