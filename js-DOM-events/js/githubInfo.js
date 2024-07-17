//making sure if we type delete then the button would appear otherwise will be disabled
document.getElementById('text-input').addEventListener('keyup', function(event){
    const text = event.target.value;
    const buttonDisable = document.getElementById('btn-delete');
    if (text === 'delete') {
        buttonDisable.removeAttribute('disabled')
    } else {
        buttonDisable.setAttribute('disabled', true)
    }
})

//clicking the button will hide the display id
document.getElementById('btn-delete').addEventListener('click', function(){
    const display = document.getElementById('display');
    const inputField = document.getElementById('text-input');
    display.style.display = 'none';
})