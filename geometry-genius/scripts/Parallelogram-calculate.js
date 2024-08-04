/**
 * objective: get base, height of a parallelogram. Calculate the area by using the provided formula. And then display the area
 * step-1: get base value
 * step-2: added an id in the base input field
 * step-3: use getElementId to access the input field
 * step-4: get value from the input field. [value is string now]
 * step-5: convert the value to a number using parseFloat
 */

//this is one way to do it
/* function parallelogramCalculation(){
    //get parallelogram base value
    const base = document.getElementById('parallelogram-base');
    const parallelogramBase = base.value;
    const parallelogramValueChange = parseFloat(parallelogramBase);
    console.log(parallelogramValueChange);

    //get parallelogram height value
    const height = document.getElementById('parallelogram-height');
    const parallelogramHeight = height.value;
    const parallelogramHeightleValueChange = parseFloat(parallelogramHeight);
    console.log(parallelogramHeightleValueChange);

    //calculate parallelogram area
    const parallelogramArea = parallelogramValueChange * parallelogramHeightleValueChange;
    console.log('area of the parallelogram is:', parallelogramArea);

    //inserting the value to the p tag
    const answer = document.getElementById('parallelogram-area');
    answer.innerText = parallelogramArea;
}
 */

//another way to do it, this way will make sure that we don't repeat the same type code again and again. for instance: base and height code will be the same again and again. this will reduce the work.
function parallelogramCalculation(){

    const base = getInputFieldId('parallelogram-base');
    console.log('The Base of the parallelogram is: ', base);

    const height = getInputFieldId('parallelogram-height');
    console.log('The height of the parallelogram is: ', height);

    const area = base * height;
    console.log('The area is: ', area);

    setInnerText('parallelogram-area', area);

}

function getInputFieldId(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    // console.log(inputValue);
    return inputValue;
}

function setInnerText(areaText, area){
    const textField = document.getElementById(areaText);
    textField.innerText = area;
}

coloring('effect-action2');
removeColoring('effect-action2');