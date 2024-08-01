/* document.getElementById('item-2').addEventListener('click', function() {
    console.log('item-2 clicked');
})

document.getElementById('list-ul').addEventListener('click', function(){
    console.log('ul clicked');
})

document.getElementById('list-container').addEventListener('click', function(){
    console.log('section container clicked');
})

document.getElementById('body').addEventListener('click', function(){
    console.log('body of the html clicked');
}) */

//stop propagrating
/* document.getElementById('item-2').addEventListener('click', function(event) {
    console.log('item-2 clicked');
    event.stopPropagation();
})

document.getElementById('list-ul').addEventListener('click', function(){
    console.log('ul clicked');
})

document.getElementById('list-container').addEventListener('click', function(){
    console.log('section container clicked');
})

document.getElementById('body').addEventListener('click', function(){
    console.log('body of the html clicked');
}) */

//we can use multiple event handler to a single element

/* document.getElementById('item-2').addEventListener('click', function() {
    console.log('item-2 clicked');
})
document.getElementById('item-2').addEventListener('click', function() {
    console.log('item-2 second clicked');
})
document.getElementById('item-2').addEventListener('click', function() {
    console.log('item-2 third clicked');
})
document.getElementById('item-2').addEventListener('click', function() {
    console.log('item-2 fourth clicked');
})

document.getElementById('list-ul').addEventListener('click', function(){
    console.log('ul clicked');
})

document.getElementById('list-container').addEventListener('click', function(){
    console.log('section container clicked');
})

document.getElementById('body').addEventListener('click', function(){
    console.log('body of the html clicked');
}) */

//if we use stopPropagrating on item-2 then it will only work on the item-2 and ignoring rest of all

/* document.getElementById('item-2').addEventListener('click', function(event) {
    console.log('item-2 clicked');
    event.stopPropagation();
})
document.getElementById('item-2').addEventListener('click', function(event) {
    console.log('item-2 second clicked');
})
document.getElementById('item-2').addEventListener('click', function(event) {
    console.log('item-2 third clicked');
})
document.getElementById('item-2').addEventListener('click', function(event) {
    console.log('item-2 fourth clicked');
})

document.getElementById('list-ul').addEventListener('click', function(){
    console.log('ul clicked');
})

document.getElementById('list-container').addEventListener('click', function(){
    console.log('section container clicked');
})

document.getElementById('body').addEventListener('click', function(){
    console.log('body of the html clicked');
}) */

// But using stopPropagratingImmediatly will stop at the first one
document.getElementById('item-2').addEventListener('click', function(event) {
    console.log('item-2 clicked');
    event.stopImmediatePropagation();
})
document.getElementById('item-2').addEventListener('click', function(event) {
    console.log('item-2 second clicked');
})
document.getElementById('item-2').addEventListener('click', function(event) {
    console.log('item-2 third clicked');
})
document.getElementById('item-2').addEventListener('click', function(event) {
    console.log('item-2 fourth clicked');
})

document.getElementById('list-ul').addEventListener('click', function(){
    console.log('ul clicked');
})

document.getElementById('list-container').addEventListener('click', function(){
    console.log('section container clicked');
})

document.getElementById('body').addEventListener('click', function(){
    console.log('body of the html clicked');
})