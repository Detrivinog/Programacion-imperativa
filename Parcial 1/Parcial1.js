// año bisiesto

function esBisiesto(year){
    if ((year % 4 == 0) || (year % 100 == 0 )|| (year % 400 == 0)){
        return console.log(`El año ${year} es bisiesto`)
    } else {
        return console.log(`El año ${year} no es bisiseto`)
    }
} 

esBisiesto(2008)
esBisiesto(2003)