function rectangleCalculation(){
    //get the rectangle width value
    const rectangleWidth = document.getElementById('rectangle-width').value;
    const convertingRectangleValue = parseFloat(rectangleWidth);
    console.log(convertingRectangleValue);

    //get the rectangle i value
    const rectangleI = document.getElementById('rectangle-i').value;
    const convertingRectangleIValue = parseFloat(rectangleI);
    console.log(convertingRectangleIValue);

    //calculating the area of the rectangle
    const areaOfRectangle = convertingRectangleValue * convertingRectangleIValue;
    console.log(areaOfRectangle);

    //inserting the value
    const rectangleAnswer = document.getElementById('rectangle-area');
    rectangleAnswer.innerText = areaOfRectangle;
}

coloring('effect-action1');
removeColoring('effect-action1');