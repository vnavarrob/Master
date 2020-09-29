let celcius = 0;
function farenheitTocelcius(farenheit){

    celcius = (farenheit - 32)*(.55);
    console.log(`Farenheit: ${farenheit} to Celcius: ${celcius}`);
    return celcius;

}

function numeroParametros(...params){
    let numero = params.length;
    console.log(`El numero de parametros es: ${numero}`);

}

farenheitTocelcius(50);

numeroParametros("uno", "dos", "tres", "cuatro", "cinco")