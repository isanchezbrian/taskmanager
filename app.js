const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

document.getElementById("add").addEventListener("click", () => {
  const item = document.getElementById("item")
  createItem(item)
})

document.getElementById('item').addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        const item = document.getElementById('item')
        createItem(item)
    }
})

function displayDate() {
    let date = new Date()
    date = date.toString().split(' ')
    date = date[1] + ' ' + date[2] + ' ' + date[3]
    document.getElementById('date').innerHTML = date
}

function displayItems() {
    let items = ''
    for (let i = 0; i < itemsArray.length; i++){
        items += 
        `<div class='item'>
            <div class="input-controller">
                <textarea disabled>${itemsArray[i]}</textarea>
                <div class="edit-controller">
                    <i class="fa-solid fa-trash-can deleteBtn"></i>
                    <i class="fa-solid fa-pen-to-square editBtn"></i>
                </div>
            </div>
            <div class="update-controller">
                <button class="saveBtn">Save</button>
                <button class="cancelBtn">Cancel</button>
            </div>
        </div>`
    }
    document.getElementById('todos').innerHTML = items
    activateDeleteListeners();
}

function activateDeleteListeners() {
    let deleteBtn = document.querySelectorAll('.deleteBtn')
    deleteBtn.forEach((dB, i) => {
        dB.addEventListener('click', () => {
            deleteItem(i)
        })
    })
}

function createItem(item){
    itemsArray.push(item.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    location.reload();
}

function deleteItem(i){
    itemsArray.splice(i, 1)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    location.reload()
}


window.onload = function() {
    displayDate();
    displayItems();
}