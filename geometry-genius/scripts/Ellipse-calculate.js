function ellipseCalculation(){
    const a = getInputFieldId('ellipse-base');
    const b = getInputFieldId('ellipse-height');
    const area = 3.1416 * a * b;
    setInnerText('ellipse-area', area);
}

coloring('effect-action5');
removeColoring('effect-action5');