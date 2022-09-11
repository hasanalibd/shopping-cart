
// function updateCaseNumber(increase){
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberString = caseNumberField.value;
//     const previousCaseNumber = parseFloat(caseNumberString);

//     let newCaseNumber;

//     if(increase === true){
//         newCaseNumber = previousCaseNumber + 1;
//     }
//     else{
//         newCaseNumber = previousCaseNumber - 1;
//     }

//     caseNumberField.value = newCaseNumber;

//     return newCaseNumber;
// };

// function updateCaseTotalPrice(newCaseNumber){
//     const caseTotalPrice = newCaseNumber * 59;
//     const caseTotalElement = document.getElementById('case-total');
//     caseTotalElement.innerText = caseTotalPrice;
// }

// // caseNumber update section
// document.getElementById('btn-case-plus').addEventListener('click', function(){
//     const newCaseNumber = updateCaseNumber(true);
//     updateCaseTotalPrice(newCaseNumber)
    
// });

// document.getElementById('btn-case-minus').addEventListener('click', function(){
//     const newCaseNumber = updateCaseNumber(false);
//     updateCaseTotalPrice(newCaseNumber)
// })

function updateCaseNumber(increase){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseFloat(caseNumberString);

    let newCaseNumber;

    if(increase === true){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1; 
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}



function getTextElementValueById(elementId){
    // calculate total
    const caseTotalElement = document.getElementById(elementId);
    const currentCaseTotalString = caseTotalElement.innerText;
    const currentCaseTotal = parseFloat(currentCaseTotalString);
    return currentCaseTotal;
}



document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true)
    updateCaseTotalPrice(newCaseNumber);

    calculateSubTotal()
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false)
    updateCaseTotalPrice(newCaseNumber)

    calculateSubTotal()
})