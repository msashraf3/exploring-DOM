//post button

//step 1: add event listener to the post button
document.getElementById('post-button').addEventListener('click', function(){

//step 2: get the comment from inside the text area
const commentBox = document.getElementById('new-comment');
const newComment = commentBox.value;

//step 3: set the value inside the desired place
    //1. get the comment display
    //2. create a new element (p tag)
    //3. set the text as innerText inside the p tag
    //4. add the p tag using appendChild inside the comment display

const commentDisplay = document.getElementById('comment-display');
const p = document.createElement('p');
p.innerText = newComment;
commentDisplay.appendChild(p);

    //5.clear the comment area
commentBox.value='';

})
