//method 1
/* const placesList = document.querySelector('#places-list');

const li3 = document.createElement('li');
li3.innerText = "cox's bazar";

placesList.appendChild(li3); */

//method 2

//where you want to add
const placesList = document.getElementById('places-list');

//what you want to add
const li3 = document.createElement('li');
li3.innerText = "cox's bazar";

//add the child
placesList.appendChild(li3);


//adding full section

//1. where to add
const mainContainer = document.getElementById('main-container');

//2. what to add
const newSection = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
newSection.appendChild(h1);


const ul = document.createElement('ul');

const li4 = document.createElement('li');
li4.innerText = 'Biriyani';
ul.appendChild(li4);

const li5= document.createElement('li');
li5.innerText = 'Borhani';
ul.appendChild(li5);

const li6 = document.createElement('li');
li6.innerText = 'Salad';
ul.appendChild(li6);
newSection.appendChild(ul);

//3. add the child
mainContainer.appendChild(newSection)


//But there is a one liner to do that by using innerHTML

//1. where to add
const anotherSection = document.getElementById('main-container');

//2. what to add
const anotherNewSection = document.createElement('section');
anotherNewSection.innerHTML = `

<h1>My Favourite Dresses</h1>
    <ul>
        <li>T-Shirt</li>
        <li>Pant</li>
        <li>T-Sando Genji</li>
    </ul>
`

//3. add the child
anotherSection.appendChild(anotherNewSection);