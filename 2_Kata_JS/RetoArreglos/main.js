
// Crea un arreglo que contenga los siguientes platillos:
var yummy = ["Enchiladas","Taco","Tamal","Pozole","Barbacoa","Guacamole","Quesadilla de papa"];

//Mediante un ciclo FOR, muestra todos los platillos (recuerda la propiedad length)
for (x=0; x<yummy.length; x++ ){
     alert("El valor de x es: "+ yummy[x]);
}

//Mediante ciclo FOR y condicional IF, muestra solo el pozole y la barbacoa.
for (x=0; x<yummy.length; x++ ){
    if (yummy[x] === "Pozole" || yummy[x] === "Barbacoa" )
    alert("Mostrar solo Pozole y Barbacoa:. Yummy es: "+ yummy[x]);
}

//Mediante ciclo FOR y condicional IF, muestra solo los elementos impares.
//Mediante únicamente un ciclo FOR, muestra los elementos que sean pares.
for (x=0; x<=yummy.length; x++ ){
    var z = x%2;
    alert("Valor de X"+ x);
    if (x%2 >= 1)
    alert("El valor de Yummy es impar");
    else
    alert("El valor de Yummy es par");
}







