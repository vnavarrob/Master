var r = prompt("Seleccione un juego: \n 1. Numero Mayor  \n 2. Sumatoria de 3 Numeros \n 3. Piedra papel o tijeras");

if (r == 1) {
    var x = prompt("Ingrese el primer numero");

    var y = prompt("Ingrese el segundo numero");
    var a;
    if (x > y)
        a = x;
    else 
        a = y;

    var y = prompt("Ingrese el tercer numero");

    if (y > a)
        a = y;

    alert("El valor mas grande es: " + a);

} else if (r == 2) {

    var s = parseInt(prompt("Ingrese el primer numero "));
    s = s + parseInt(prompt("Ingrese el segundo numero "));
    s = s + parseInt(prompt("Ingrese el tercer numero "));

    alert("El valor total es: " + s);
} else {

    var uno = prompt("Usuario 1 seleccione una opcion: \n 1. Piedra \n 2. Papel \n 3. Tijeras");
    var dos = prompt("Usuaro 2 sleccione una opcion: \n 1. Piedra \n 2. Papel \n 3. Tijeras");

    if (uno == dos)
        alert("Es un empate");
    else if (uno == 1 && dos == 2)
        alert("Piedra vs Papel :. Gana Usuario 2 ");
    else if (uno == 1 && dos == 3)
        alert("Piedra vs Tijeras :. Gana Usuario 1 ");
    else if (uno == 2 && dos == 1)
        alert("Papel vs Piedra :. Gana Usuario 1 ");
    else if (uno == 2 && dos == 3)
        alert("Papel vs Tijeras :. Gana Usuario 2 ");
    else if (uno == 3 && dos == 1)
        alert("Tijeras vs Piedra :. Gana Usuario 2 ");
    else if (uno == 3 && dos == 2)
        alert("Tijeras vs Papel :. Gana Usuario 1 ");
    else
        alert("No se ingresaron opciones validas");
}