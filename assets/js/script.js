function resumen() { 
    var cant,cat, calculo,resultado; 
    var precio = 200; 
    cant = document.getElementById("InputAmount").value; 
    cat = document.getElementById("CategorySelect").value;


switch (cat){
        case "Estudiante":
            {
            calculo = (precio*cant)-((precio * cant) *0.80);
            resultado = calculo;
            document.getElementById("OutputResultado").value=resultado;
            break;
            }

        case "Trainee":
            {
                calculo = (precio*cant)-((precio * cant) *0.50);
                resultado = calculo;
                document.getElementById("OutputResultado").value=resultado;
                break;
            }
        case "Junior":
            {
                    calculo = (precio*cant)-((precio * cant) *0.15);
                    resultado = calculo;
                    document.getElementById("OutputResultado").value=resultado;
                    break;
            }
        }
}

function limpiar(){
    document.getElementById("InputName").value="";
    document.getElementById("InputLastname").value="";
    document.getElementById("InputMail").value="";
    document.getElementById("InputAmount").value="";
    document.getElementsById("OutputResultado").value="";
}