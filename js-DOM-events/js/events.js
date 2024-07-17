console.log('This is a JavaScript Event');

//option 2
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

//option 3
const makingBlue = document.getElementById('make-blue');
makingBlue.onclick = colorBlue;

function colorBlue(){
    document.body.style.backgroundColor = 'blue';
}

//option 3.1
const makingPurple = document.getElementById('make-purple');
makingPurple.onclick = function makingPurpleFun(){
    document.body.style.backgroundColor = 'purple';
}

// option 4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink(){
    document.body.style.backgroundColor = 'pink';
}

//option 4.1
const cyanButton  = document.getElementById('make-cyan');
cyanButton.addEventListener('click', function makeCyan(){
    document.body.style.backgroundColor = 'cyan';
})

//option 5
document.getElementById('make-goldenRod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})