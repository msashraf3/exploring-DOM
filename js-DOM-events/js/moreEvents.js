//this is called mousemove, this will execute something when mouse is moved inside the selected field.
/* document.getElementById('btn-more').addEventListener('mousemove', function(){
    console.log('hi');
}) */
//this is called mouseenter, this will execute when the mouse enter the selcted field
/* document.getElementById('btn-more').addEventListener('mouseenter', function(){
    console.log('hi');
}) */
//this is called focus, it will work when the selected field is in focus. for instance comment box or input field
/* document.getElementById('text-input').addEventListener('focus', function(){
    console.log('focus mode');
}) */
//this is called blur the oposite of the focus, this will work when we click the outside of the input field.
document.getElementById('text-input').addEventListener('blur', function(){
    console.log('blur mode');
})
//now lets move on to keyboard. we will use three keyboard things called keydown, keyup, keypress. keydown will register when we pressed the next key and same for keypress. Means one key less always. But keyup will always be this one (keyup) because it register per key. And we will use target and value to get the pressed key

//1. keydown
/* document.getElementById('text-input').addEventListener('keydown', function(event){
    console.log(event.target.value);
}) */
//2. keypress
/* document.getElementById('text-input').addEventListener('keypress', function(event){
    console.log(event.target.value);
}) */
//3. keyup
document.getElementById('text-input').addEventListener('keyup', function(event){
    console.log(event.target.value);
})