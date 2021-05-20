
function calculerModulo(){
    var nombre1 = document.getElementById("nombre1").value;
    var nombre2 = document.getElementById("nombre2").value;
    
    return nombre1 % nombre2;   
}

function afficherModulo(){
    document.getElementById('resultat').innerHTML = calculerModulo();

    console.log(calculerModulo())
}

