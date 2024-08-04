/**
 * objective: get base, height of a triangle. Calculate the area by using the provided formula. And then display the area
 * step-1: get base value
 * step-2: added an id in the base input field
 * step-3: use getElementId to access the input field
 * step-4: get value from the input field. [value is string now]
 * step-5: convert the value to a number using parseFloat
 */
function triangleCalculation(){
    //get triangle base value
    const base = document.getElementById('triangle-base');
    const triangleBase = base.value;
    const triangleValueChange = parseFloat(triangleBase);
    console.log(triangleValueChange);

    //get triangle height value
    const height = document.getElementById('triangle-height');
    const triangleHeight = height.value;
    const triangHeightleValueChange = parseFloat(triangleHeight);
    console.log(triangHeightleValueChange);

    //calculate triangle area
    const triangleArea = 0.5 * triangleValueChange * triangHeightleValueChange;
    console.log('area of the triangle is:', triangleArea);

    //inserting the value to the p tag
    const answer = document.getElementById('area-answer');
    answer.innerText = triangleArea;
}

coloring('effect-action');
removeColoring('effect-action');

function coloring(eventColor){
    
    const coloring = document.getElementById(eventColor);
    coloring.addEventListener('mouseenter', function(){
        coloring.classList.add('hovering');
    })
}
function removeColoring(eventColorRemove){
    
    
    const removingColor = document.getElementById(eventColorRemove);
    removingColor.addEventListener('mouseleave', function(){
        removingColor.classList.remove('hovering');
    })
}

