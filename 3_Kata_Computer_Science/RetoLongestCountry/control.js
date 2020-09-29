function longestCountry(...cntrys){
   let long = 0;
   let pais = "";
    for (let index = 0; index < cntrys.length; index++) {
        const paisActual = cntrys[index];

       if (cntrys[index].length >= long ) 
        { 
           long = cntrys[index].length; 
           pais = cntrys[index]; 
        } 
  
    }

    console.log(`Pais con nombre mas largo es: ${pais} con una longitud de: ${long}`);
    return pais;

}

longestCountry("Mexico","Holanda","Estados Unidos","Italia");