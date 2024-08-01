/* const items = document.getElementsByClassName('item');
for (const item of items) {
    item.addEventListener('click', function(event){
        event.target.parentNode.removeChild(event.target);
    })
} */

    //event delegation
document.getElementById('list-container').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target);
})

document.getElementById('btn-add-item').addEventListener('click', function(){
    const container = document.getElementById('list-container');
    const adding = document.createElement('li');
    adding.innerText = 'Brand New Item';
    adding.classList.add('item');
    container.appendChild(adding);
})