/**
 * objective: get base, height of a rhombus. Calculate the area by using the provided formula. And then display the area
 * step-1: get base value
 * step-2: added an id in the base input field
 * step-3: use getElementId to access the input field
 * step-4: get value from the input field. [value is string now]
 * step-5: convert the value to a number using parseFloat
 */
function rhombusCalculation(){
    //get rhombus base value
    const base = document.getElementById('rhombus-base');
    const rhombusBase = base.value;
    const rhombusValueChange = parseFloat(rhombusBase);
    console.log(rhombusValueChange);

    //get rhombus height value
    const height = document.getElementById('rhombus-height');
    const rhombusHeight = height.value;
    const rhombusHeightleValueChange = parseFloat(rhombusHeight);
    console.log(rhombusHeightleValueChange);

    //calculate rhombus area
    const rhombusArea = 0.5 * rhombusValueChange * rhombusHeightleValueChange;
    console.log('area of the rhombus is:', rhombusArea);

    //inserting the value to the p tag
    const answer = document.getElementById('rhombus-area');
    answer.innerText = rhombusArea;
}

coloring('effect-action3');
removeColoring('effect-action3');

