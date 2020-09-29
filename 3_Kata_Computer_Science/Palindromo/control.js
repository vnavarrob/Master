function isPalindrome(str) {

    console.log(str);
    let longitud = str.length;
    let indey = str.length;

    for (let index = 0; index < str.length; index++) {
        const element = str[index];

        (index === 0 ) ? indey--: indey = longitud - index -1; // Ajuste de indice

        if (index === indey) {
            console.log(`Ok, Ultimo elemento ${str[index] + str[indey]} \n`);
            return "IsP";
        } else {
            if (str[index] === str[indey]) {
                console.log(`ok ${str[index] + str[indey]} \n`);
            } else {
                console.log("No es apalindromo");
                return "NaP";
            }
        }    //index === indey
    }
}

isPalindrome("isisisi");