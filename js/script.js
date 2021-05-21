
function computeModulo(){
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    
    return number1 % number2;   
}

function displayModulo(){
    document.getElementById('result').innerHTML = computeModulo();    
}

