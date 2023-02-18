function nmax(a, b) {
    if (a > b) {
        console.log(a)
    }
    else {
        console.log(b)
    }
}

function iguales(a, b) {
    if (a === b) {
        console.log('son iguales');
    }
    else {
        console.log('No son iguales');
    }
}

function nmaxiguales(a, b) {

    console.log(nmax(a, b));
    console.log(iguales(a, b));

}

function nmin(a, b, c) {
    if (a < b && a < c) {
        console.log(a);
    }
    else if (c < b) {
        console.log(c);
    }
    else {
        console.log(b);
    }
}

function pp(p1, p2) {
    if (p1[altura] > p2[altura]) {
        console.log('P1 es mas alta que p2');
    }
    else {
        console.log('P2 es mas alta que p1');
    }
    if (p1[edad] > p2[edad]) {
        console.log('P1 es mas viejo que p2');
    }
    else {
        console.log('P2 es mas viejo que p1');
    }
}

// pp({nombre: 'Lucas', edad: 26, altura: 174},
//  {nombre: 'Martin', edad: 18, altura: 201})

function puedeConducir(nombre, edad, altura, vision) {
    if (edad < 18 || altura < 150 || vision < 8) {
        console.log(nombre + ' no puede conducir');
    }
    else {
        console.log(nombre + ' puede conducir');
    }
}

function ingreso(nombre, pase, entrada) {
    if (entrada == true) {
        let utilizarEntrada = prompt('Desea utilizar la entrada? s n')
        if (utilizarEntrada === 's') {
            console.log('Bienvenido ' + nombre);
        }
        else {
            console.log('No quisiste utilizar tu entrada');
        }
    }
    else if (nombre === 'Lucas' || pase == true) {
        console.log('Bienvenido ' + nombre);
    }
    else {
        console.log('Necesitas conseguir una entrada');
        let dinero = prompt('cuanto dinero posees?')
        if (dinero > 1000) {
            let comprarTicket = prompt('Deseas comprar una entrada? s n')
            if (comprarTicket === 's') {
                entrada == true
                console.log('Bienvenido ' + nombre);
            }
            else {
                console.log('No puedes ingresar sin una entrada, Adios');
            }
        }
        else {
            console.log('No puedes ingresar sin una entrada, Adios');
        }

    }

}

function adivinanza() {
    let number = 5
    let intentos = 0
    let intento = 0
    while (intentos !== 3 || intento == number)  {
        intento = prompt('Intenta adivinar el numero del 1 al 10')
        if (intento == number) {
            console.log('Adivinaste!');
        }
        else {
            intentos++
            console.log('Intenta de nuevo');
        }
    }
    console.log('No te quedan mas oportunidades, perdiste.');
}

