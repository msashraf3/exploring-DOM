//option 1
function makeGreen(){
    document.body.style.backgroundColor = 'green';
}

//option 2
document.getElementById('make-blue').addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue';
})

document.getElementById('email').addEventListener('keyup', function(event){
    console.log(event.target.value);
})