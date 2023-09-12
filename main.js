let cuentas = [
    {nombre: "Roman", saldo: 300, contraseña: "123"},
    {nombre: "Laura", saldo: 250, contraseña: "456"},
    {nombre: "Diego", saldo: 200, contraseña: "789"}
];


let usuario = document.getElementById("usu").value
let consultar = document.getElementById ("btnConsultar")
let depositar = document.getElementById ("btnDepositar")
let retirar = document.getElementById ("btnRetirar")
let saldoInicial =  cuentas[i].saldo 
let loginExitoso = false;

function login() {
   let usuario = document.getElementById("usu").value;
   let password = document.getElementById("pass").value;
   let loginExitoso = false;

   for (let i = 0; i < cuentas.length; i++) {
        if (usuario === cuentas[i].nombre && password === cuentas[i].contraseña) {
            loginExitoso = true;
            localStorage.setItem("usuarioActual", usuario)
            break;
        }
   }
   if (loginExitoso == true) {
       window.location.href = "cajero.html";
   } else {
       alert("Verifica tus datos");
   }
}

let usuarioActual = localStorage.getItem("usuarioActual");

function consultaSaldo() {
    let usuarioActual = localStorage.getItem("usuarioActual");
    if (usuarioActual) {
        for (let i = 0; i < cuentas.length; i++) {
            if (usuarioActual === cuentas[i].nombre) {
                let saldoElement = document.getElementById("saldoUsuario");
                saldoElement.textContent = `${cuentas[i].saldo} MXN`;
                break;
            }
        }
    } else {
        alert("Debes iniciar sesión antes de consultar saldo.");
    }
}


function depositaDinero() {
    let montoIngresado = parseFloat(document.getElementById("monto").value);

    if (isNaN(montoIngresado) || montoIngresado <= 0) {
        alert("Por favor, ingrese un monto válido mayor que 0.");
        return;
    }

    let usuarioActual = localStorage.getItem("usuarioActual");

    let cuentaUsuario;
    for (let i = 0; i < cuentas.length; i++) {
        if (cuentas[i].nombre === usuarioActual) {
            cuentaUsuario = cuentas[i];
            break;
        }
    }

    let nuevoSaldo = cuentaUsuario.saldo + montoIngresado;

    if (nuevoSaldo > 990) {
        alert("El saldo no debe exceder los $990.");
        return;
    }

    cuentaUsuario.saldo = nuevoSaldo;

    let saldoUsuarioElement = document.getElementById("saldoUsuario");
    saldoUsuarioElement.textContent = `${nuevoSaldo} MXN`;

    alert(`Se depositaron $${montoIngresado} MXN en su cuenta. Nuevo saldo: $${nuevoSaldo} MXN.`);
}



function retiraDinero (){
    let montoIngresado1 = parseFloat(document.getElementById("monto1").value);

    if (isNaN(montoIngresado1) || montoIngresado1 <= 0) {
        alert("Por favor, ingrese un monto válido mayor que 0.");
        return;
    }

    let usuarioActual = localStorage.getItem("usuarioActual");

    let cuentaUsuario;
    for (let i = 0; i < cuentas.length; i++) {
        if (cuentas[i].nombre === usuarioActual) {
            cuentaUsuario = cuentas[i];
            break;
        }
    }

    let nuevoSaldo1 = cuentaUsuario.saldo - montoIngresado1;

    if (nuevoSaldo1 <10) {
        alert("El saldo no debe ser menor a $10.");
        return;
    }

    cuentaUsuario.saldo = nuevoSaldo1;

    let saldoUsuarioElement = document.getElementById("saldoUsuario");
    saldoUsuarioElement.textContent = `${nuevoSaldo1} MXN`;

    alert(`Se depositaron $${montoIngresado1} MXN en su cuenta. Nuevo saldo: $${nuevoSaldo1} MXN.`);
}


