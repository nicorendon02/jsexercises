function exercise1()
{
    var nombre = prompt("Dime tu nombre: ");
    console.log("Tu nombre: "+nombre);
    return alert ("Ahora estas en la matrix, "+nombre);
}

function exercise2()
{
    var primerNumero = parseFloat(prompt("Digita un numero decimal: "));
    var segundoNumero = parseInt(prompt("Digita un numero entero: "));
    var suma = primerNumero+segundoNumero;
    console.log("Primer numero: "+primerNumero);
    console.log("Segundo numero: "+segundoNumero);
    return alert ("El resultado de la suma es: "+suma);
}

function exercise3()
{
    var primerNumero = parseInt(prompt("Digita el primer numero: "));
    var segundoNumero = parseInt(prompt("Digita el segundo numero: "));
    var suma = primerNumero+segundoNumero;
    console.log("Primer numero: "+primerNumero);
    console.log("Segundo numero: "+segundoNumero);
    console.log("El resultado de la suma es: "+suma);
    var tercerNumero = parseInt(prompt("Digita el tercer numero: "));
    console.log("Tercer numero: "+tercerNumero);
    var multiplicacion = suma*tercerNumero;
    return alert("Multiplicacion de la suma por el ultimo numero: "+multiplicacion);
}

function exercise4()
{
    var cantKm = parseInt(prompt("Digita cant Km recorridos: "));
    var litrCom = parseFloat(prompt("Digita litros combustible gastados: "));
    console.log("Kilometros recorridos: "+cantKm);
    console.log("Litros de combustible gastados: "+litrCom);
    var totalConsumo = cantKm/litrCom;
    return alert("El consumo por Kilometro es de: "+totalConsumo);
}

function exercise5()
{
    var tempFahr = parseFloat(prompt("Digita la temperatura en Fahrenheit: "));
    console.log("Temperatura en Fahrenheit: "+tempFahr);
    var tempCelcius = (5/9)*(tempFahr-32);
    return alert("Temperatura en Celcius: "+tempCelcius);
}

function exercise6()
{
    var primerNumero = parseFloat(prompt("Digita el primer numero: "));
    var segundoNumero = parseFloat(prompt("Digita el segundo numero: "));
    var tercerNumero = parseFloat(prompt("Digita el tercer numero: "));
    console.log("primer numero: "+primerNumero);
    console.log("segundo numero: "+segundoNumero);
    console.log("tercer numero: "+tercerNumero);
    var promedio = (primerNumero+segundoNumero+tercerNumero)/3;
    return alert("El promedio es: "+promedio);
}

function exercise7()
{
    var num = parseInt(prompt("Digita un numero: "));
    console.log("El numero es: "+num);
    num = (num/100)*85;
    return alert("Descontando el 15% queda: "+num);
}

function exercise8()
{
    var primeraPalabra = prompt("Ingresa la primera palabra: ");
    var segundaPalabra = prompt("Ingresa la segunda palabra: ");
    console.log("primera palabra: "+primeraPalabra);
    console.log("segunda palabra: "+segundaPalabra);
    var frase = primeraPalabra+" "+segundaPalabra;
    return alert(frase);
}

function exercise9()
{
    var texto = prompt("Ingresa un texto: ");
    alert("El primer caracter es: "+texto.charAt(0));
    console.log("El primer caracter es: "+texto.charAt(0));
    var indice = prompt("Ingresa un numero positivo menor a "+texto.length+": ");
    console.log("Numero positivo menor a "+texto.length+": "+indice);
    if(indice >=0 && indice < texto.length)
    {
        return alert("El caracter en la posicion ["+indice+"] es: "+texto.charAt(indice));
    }
    else{
        throw alert("El numero no es valido");
    }
}

function exercise10()
{
    var cantShows = parseInt(prompt("¿Cuantos shows viste el ultimo año?: "));
    console.log("Shows vistos el ultimo año: "+cantShows);
    var verdad = prompt("¿Es verdad? (si / no): ");
    if(verdad.toLowerCase() == "si" ? alert(true) : alert(false));
}

function exercise11()
{
    var fecha = parseInt(prompt("Ingresa una fecha DDMMAAAA: "));
    alert("Fecha en formato DDMMAAAA: "+fecha);
    console.log("Fecha en formato DDMMAAAA: "+fecha);
    var fechaStr = fecha.toString();
    var dia = fechaStr.charAt(0)+fechaStr.charAt(1);
    var mes = fechaStr.charAt(2)+fechaStr.charAt(3);
    var anio = fechaStr.charAt(4)+fechaStr.charAt(5)+fechaStr.charAt(6)
    +fechaStr.charAt(7); 
    return alert("Fecha: "+dia+"/"+mes+"/"+anio);  
}

function exercise12()
{
    var numero = parseInt(prompt("Ingresa un numero: "));
    console.log("Numero entero: "+numero);
    return alert((numero%2 == 0) ? true : false);
}

function exercise13()
{
    var edad = parseInt(prompt("Ingresa tu edad: "));
    var cantArt = parseInt(prompt("Ingresa cant articulos comprados: "));
    console.log("Tu edad: "+edad);
    console.log("Articulos comprados: "+cantArt);
    return alert((edad>18 && cantArt>1) ? true : false);
}

function exercise14()
{
    var texto = prompt("Ingresa un texto: ");
    console.log("frase: "+texto);
    return alert(((texto.length+1)%2 != 0) ? true : false);
}

function exercise15()
{
    var primeraPalabra = prompt("Ingresa la primera palabra: ");
    var segundaPalabra = prompt("Ingresa la segunda palabra: ");
    console.log("primera palabra: "+primeraPalabra);
    console.log("segunda palabra: "+segundaPalabra);
    return alert((primeraPalabra.length<segundaPalabra.length) ? true : false);
}

function exercise16()
{
    var nombre1 = prompt("Ingresa un nombre: ");
    var nombre2 = prompt("Ingresa otro nombre: ");
    console.log("primer nombre: "+nombre1);
    console.log(nombre1.length+" "+nombre2.length);
    console.log("segundo nombre: "+nombre2);
    return alert((nombre1.charAt(0)==nombre2.charAt(0) 
    || nombre1.charAt((nombre1.length)-1)==nombre2.charAt((nombre2.length)-1)) ? true : false);
}

function exercise17()
{
    var numero = parseInt(prompt("Ingresa un numero entero: "));
    console.log("numero entero: "+numero);
    return alert((numero >= 0) ? "valor absoluto: "+numero : "valor absoluto: "+(numero*(-1)));
}

function exercise18()
{
    var numero1 = parseInt(prompt("Ingresa un numero: "));
    var numero2 = parseInt(prompt("Ingresa otro numero: "));
    console.log("primer numero: "+numero1);
    console.log("segundo numero: "+numero2);
    if(numero1 == numero2)
    {
        return alert("Los numeros son iguales");
    }
    return alert((numero1>numero2) ? numero1+" es mayor" : numero2+" es mayor");
}

function exercise19()
{
    var letra = prompt("Ingresa una letra: ");
    if(letra.length > 1)
    {
        throw alert("No se puede procesar el dato.")
    }
    console.log("Letra: "+letra);
    var vocales = ["a","e","i","o","u"];
    return alert((vocales.includes(letra.toLowerCase())) ? letra.toUpperCase()+" es vocal"
     : letra.toUpperCase()+" no es vocal");
}

function exercise20()
{
    var numeros = [];
    var primerNumero = parseInt(prompt("Ingresa el primer numero: "));
    console.log("Primer numero: "+primerNumero);
    numeros.push(primerNumero);
    var segundoNumero = parseInt(prompt("Ingresa el segundo numero: "));
    console.log("Segundo numero: "+segundoNumero);
    numeros.push(segundoNumero);
    var tercerNumero = parseInt(prompt("Ingresa el tercer numero: "));
    console.log("Tercer numero: "+tercerNumero);
    numeros.push(tercerNumero);

    var numeroMenor = Math.min(...numeros);
    //console.log(numeroMenor);
    
    return alert("Menor: "+ numeroMenor);
}