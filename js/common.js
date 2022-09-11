function getTextElementValueById(elementId){
    // calculate total
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseFloat(currentPhoneTotalString);
    return currentPhoneTotal;
}


function setTaxElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    // calculate subtotal
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTaxElementValueById('sub-total', currentSubTotal);
    

    // calculate tax
    const taxAmount = currentSubTotal * 0.1;
    setTaxElementValueById('tax-amount', taxAmount)

    const finalAmount = currentSubTotal + taxAmount;
    setTaxElementValueById('final-total', finalAmount);
}
