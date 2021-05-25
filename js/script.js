/**
 * Compute the modulo of two numbers
 * @returns modulo
 */
function computeModulo(){
    // Get inputs
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;

    // Check if inputs are numbers. If not, the script is stopped
    if(isNaN(number1) || isNaN(number2)){
        return;
    }
    
    return number1 % number2;   
}

/**
 * Display modulo
 */
function displayModulo(){
    let result = computeModulo();
    let displaySpan = document.getElementById('result');
    if(result === undefined){
        displaySpan.innerHTML = "Saisissez deux nombres !";
    }else{
        displaySpan.innerHTML = result;    
    }
}

