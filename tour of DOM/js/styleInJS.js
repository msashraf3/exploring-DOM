const styling = document.querySelectorAll('section');

for (const sections of styling) {
    sections.style.border = '2px solid blue';
    sections.style.marginBottom = '10px';
    sections.style.borderRadius = '20px';
    sections.style.paddingLeft = '20px';
    sections.style.backgroundColor = 'lightgray';
}

// const places = document.getElementById('places-container');
// places.style.backgroundColor = 'yellow';

const places = document.getElementById('places-container');
places.classList.add('text-center');
places.classList.remove('large-text');


const places1 = document.querySelector('#places-container ul');

const li = document.createElement('li');
li.innerText = "Hello it's me";

places1.appendChild(li);

const li2 = document.createElement('li');
li2.innerText = "Another one";

places1.appendChild(li2);