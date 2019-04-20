//Declaración de variables
var nombreUsuario = "Paola Moreno";
var saldoCuenta = 2000000;
var limiteExtraccion = 300000;

var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;

var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;

var codigoSeguridad = 1234;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
  if (!iniciarSesion()) {
    document.getElementById("content").style.display = "none";
    return;
  }
  cargarNombreEnPantalla();
  actualizarSaldoEnPantalla();
  actualizarLimiteEnPantalla();
};

//Funciones que tenes que completar
function haySaldoDisponible(dineroExtraer) {
  return dineroExtraer <= saldoCuenta;
}

function sePuedeExtraer(dineroExtraer) {
  return dineroExtraer <= limiteExtraccion;
}

function sonBilletesDe100(dineroExtraer) {
  return dineroExtraer % 100 === 0;
}

function cambiarLimiteDeExtraccion() {
  var cantidadDinero = prompt("Ingrese el nuevo limite de extracción.");
  var dinero = parseFloat(cantidadDinero);

  if (cantidadDinero == undefined || cantidadDinero == 0 || Number.isNaN(dinero)) {
    alert("No ingreso un valor válido.");
  }
  else if (cantidadDinero !== undefined || cantidadDinero !== 0) {
    limiteExtraccion = dinero;

    actualizarLimiteEnPantalla();
  }
}

function extraerDinero() {
  var cantidadDineroExtraer = prompt("Ingrese la cantidad de dinero a extraer.");
  var dineroExtraer = parseInt(cantidadDineroExtraer);

  if (cantidadDineroExtraer == undefined || cantidadDineroExtraer == 0 || Number.isNaN(dineroExtraer)) {
    alert("Ingrese un valor válido.");
  }
  else if (cantidadDineroExtraer !== undefined || cantidadDineroExtraer !== 0) {
    
    if (!sonBilletesDe100(dineroExtraer)) {
      alert("Solo puedes extraer billetes de 100.");
      return;
    }    
    if (!haySaldoDisponible(dineroExtraer)) {
      alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.");
      return;
    }
    if (!sePuedeExtraer(dineroExtraer)) {
      alert("La cantidad de dinero que deseas extraer es mayor a tu limite de extracción.");
      return;
    }
    var saldoAnterior = saldoCuenta;
    var saldoActual = saldoCuenta - dineroExtraer;
    saldoCuenta = saldoActual;

    actualizarSaldoEnPantalla();

    alert(`Ha retirado: ${cantidadDineroExtraer}
Saldo anterior: ${saldoAnterior}
Saldo actual: ${saldoActual}`);
  }
}

function depositarDinero() {
  var cantidadDineroDepositar = prompt("Ingrese la cantidad de dinero a depositar.");
  var dineroDepositar = parseFloat(cantidadDineroDepositar);

  if (cantidadDineroDepositar == 0 || cantidadDineroDepositar == undefined || Number.isNaN(dineroDepositar)) {
    alert("Ingrese ningun valor válido.");
  }
  else if (cantidadDineroDepositar !== 0 || cantidadDineroDepositar !== undefined) {
    var saldoAnterior = saldoCuenta;
    var saldoActual = saldoCuenta + dineroDepositar;
    saldoCuenta = saldoActual;

    actualizarSaldoEnPantalla();

    alert(`Ha depositado: ${cantidadDineroDepositar}
  Saldo anterior: ${saldoAnterior}
  Saldo actual: ${saldoActual}`);
  }
}

function pagarServicio() {
  var opcion = prompt(`Ingrese el numero que corresponda con el servicio que quieres pagar
    1 - Agua
    2 - Luz
    3 - Internet
    4 - Teléfono`);
  var opcionSeleccionada = parseInt(opcion);

  if (opcion == undefined || opcion == 0 || Number.isNaN(opcionSeleccionada)) {
    alert("No ingreso un valor válido.");
  }
  else if (opcion !== undefined || opcion !== 0) {
    switch (opcionSeleccionada) {
      case 1:
        if (saldoCuenta > agua) {
          var saldoAnterior = saldoCuenta;
          var saldoActual = saldoCuenta - agua;
          saldoCuenta = saldoActual;

          actualizarSaldoEnPantalla();

          alert(`Ha pagado el servicio agua
Saldo anterior: ${saldoAnterior}
Dinero descontado: ${agua}
Saldo actual: ${saldoActual}`);
        }
        if (saldoCuenta < agua) {
          alert("No tiene suficiente dinero para pagar.");
          return;
        }
        break;
      case 2:
        if (saldoCuenta > luz) {
          var saldoAnterior = saldoCuenta;
          var saldoActual = saldoCuenta - luz;
          saldoCuenta = saldoActual;

          actualizarSaldoEnPantalla();

          alert(`Ha pagado el servicio luz
Saldo anterior: ${saldoAnterior}
Dinero descontado: ${luz}
Saldo actual: ${saldoActual}`);
        }
        if (saldoCuenta < luz) {
          alert("No tiene suficiente dinero para pagar.");
          return;
        }
        break;
      case 3:
        if (saldoCuenta > internet) {
          var saldoAnterior = saldoCuenta;
          var saldoActual = saldoCuenta - internet;
          saldoCuenta = saldoActual;

          actualizarSaldoEnPantalla();

          alert(`Ha pagado el servicio internet
Saldo anterior: ${saldoAnterior}
Dinero descontado: ${internet}
Saldo actual: ${saldoActual}`);
        }
        if (saldoCuenta < internet) {
          alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
          return;
        }
        break;
      case 4:
        if (saldoCuenta > telefono) {
          var saldoAnterior = saldoCuenta;
          var saldoActual = saldoCuenta - telefono;
          saldoCuenta = saldoActual;

          actualizarSaldoEnPantalla();

          alert(`Ha pagado el servicio telefono
Saldo anterior: ${saldoAnterior}
Dinero descontado: ${telefono}
Saldo actual: ${saldoActual}`);
        }
        if (saldoCuenta < telefono) {
          alert("No tiene suficiente dinero para pagar.");
          return;
        }
        break;
      default:
        alert("No existe el servicio que se ha seleccionado.");
        return;
    }
  }
}

function transferirDinero() {
  var montoTransferir = prompt("Ingresar el monto que quiere transferir");
  var monto = parseFloat(montoTransferir);

  if (montoTransferir == undefined || montoTransferir == 0 || Number.isNaN(monto)) {
    alert("Ingrese ningun valor válido.");
  }
  else if (montoTransferir !== undefined || montoTransferir !== 0) {

    if (saldoCuenta < monto) {
      alert("No puede transferirse esa cantidad de dinero, su saldo es insuficiente.");
      return;
    }
    if (saldoCuenta > monto) {
      var numeroCuenta = prompt("Ingrese el numero de cuenta a la que desea tranferir el dinero.");
      var cuenta = parseInt(numeroCuenta);

      if (numeroCuenta == undefined || numeroCuenta == 0 || Number.isNaN(cuenta)) {
        alert("No ingreso un valor válido.");
      }
      else if (numeroCuenta !== undefined || numeroCuenta !== 0) {

        if (cuenta == cuentaAmiga1 || cuenta == cuentaAmiga2) {
          saldoCuenta -= monto;

          actualizarSaldoEnPantalla();

          alert(`Se han transferido: ${monto}
Cuenta destino: ${cuenta}`);
        }
        if (cuenta != cuentaAmiga1 || cuenta == cuentaAmiga2) {
          alert("Solo puede transferirse dinero a una cuenta amiga.");
        }
      }
    }
  }
}

function iniciarSesion() {
  var codigoCuenta = prompt("Ingrese el codigo de su cuenta.");
  var codigo = parseInt(codigoCuenta);

  if (codigoCuenta == undefined || codigoCuenta == 0 || Number.isNaN(codigo)) {
    alert("Ingrese ningun valor válido.");
  }
  else if (codigoCuenta !== undefined || codigoCuenta !== 0) {

    if (codigoSeguridad == codigo) {
      alert(`Bienvenido/a ${nombreUsuario} ya puedes comenzar a realizar operaciones.`);
      return true;
    }
    if (codigoSeguridad != codigo) {
      saldoCuenta = 0;
      limiteExtraccion = 0;

      actualizarSaldoEnPantalla();

      alert("Codigo incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.");
    }
  }
  return false;
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
  document.getElementById("nombre").innerHTML =
    "Bienvenido/a <br>" + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
  document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
  document.getElementById("limite-extraccion").innerHTML =
    "Tu límite de extracción es: $" + limiteExtraccion;
}