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

window.onload = function() {
    displayDate()
}