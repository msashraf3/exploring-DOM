/**
 * objective: get base, height of a pentagon. Calculate the area by using the provided formula. And then display the area
 * step-1: get base value
 * step-2: added an id in the base input field
 * step-3: use getElementId to access the input field
 * step-4: get value from the input field. [value is string now]
 * step-5: convert the value to a number using parseFloat
 */
function pentagonCalculation(){
    //get pentagon base value
    const base = document.getElementById('pentagon-base');
    const pentagonBase = base.value;
    const pentagonValueChange = parseFloat(pentagonBase);
    console.log(pentagonValueChange);

    //get pentagon height value
    const height = document.getElementById('pentagon-height');
    const pentagonHeight = height.value;
    const pentagonHeightleValueChange = parseFloat(pentagonHeight);
    console.log(pentagonHeightleValueChange);

    //calculate pentagon area
    const pentagonArea = 0.5 * pentagonValueChange * pentagonHeightleValueChange;
    console.log('area of the pentagon is:', pentagonArea);

    //inserting the value to the p tag
    const answer = document.getElementById('pentagon-area');
    answer.innerText = pentagonArea;
}

coloring('effect-action4');
removeColoring('effect-action4');