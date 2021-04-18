//-----Defino mis buttons y los vinculo con su respectivo ID
//Los botones de las opciones
var btn_piedra = document.getElementById("Piedra");
var btn_papel = document.getElementById("Papel");
var btn_tijeras = document.getElementById("Tijeras");
var btn_lagarto = document.getElementById("Lagarto");
var btn_spock = document.getElementById("Spock");
// El boton de confirmar seleccion
var btn_confirmar = document.getElementById("jugar");
//Las imagenes que variaran dependiendo de las selecciones
var img_user = document.getElementById("user");
var img_pc = document.getElementById("pc");
// y el resultado
var img_result = document.getElementById("result");
// Defino los marcadores
var marcador_user = document.getElementById("puntos_user").innerText;
var marcador_pc = document.getElementById("puntos_pc").innerText;

var Opcion_jugador;
var Opcion_pc;

//Necesito inicializar las imagenes de los botones
//Queda mas corto que en css
init_imagenes();

// Hacemos la funcion para poners las imagenes correspondientes 
//en nuestros botones
function init_imagenes() {
  btn_piedra.style.backgroundImage = " url('./assets/rockPPTLS.png')";
  btn_papel.style.backgroundImage = " url('./assets/paperPPTLS.png')";
  btn_tijeras.style.backgroundImage = "url('./assets/scissorsPPTLS.png')";
  btn_lagarto.style.backgroundImage = "url('./assets/lizardPPTLS.png')";
  btn_spock.style.backgroundImage = "url('./assets/spockPPTLS.png')";
}

//Definimos las funciones de cada boton
btn_confirmar.onclick = function () {
  console.log(Opcion_jugador, " opt_player");
  Opcion_pc = num_aleatorio();
  console.log(Opcion_pc, " opt pc");
  display_opcion_pc(Opcion_pc);
  game(Opcion_jugador, Opcion_pc);
};

btn_piedra.onclick = function () {
  Opcion_jugador = 0;
  img_user.src = "./assets/rockPPTLS.png";
  btn_confirmar.disabled = false;
};

btn_papel.onclick = function () {
  Opcion_jugador = 1;
  img_user.src = "./assets/paperPPTLS.png";
  btn_confirmar.disabled = false;
};

btn_tijeras.onclick = function () {
  Opcion_jugador = 2;
  img_user.src = "./assets/scissorsPPTLS.png";
  btn_confirmar.disabled = false;
};

btn_lagarto.onclick = function () {
  Opcion_jugador = 3;
  img_user.src = "./assets/lizardPPTLS.png";
  btn_confirmar.disabled = false;
};

btn_spock.onclick = function () {
  Opcion_jugador = 4;
  img_user.src = "./assets/spockPPTLS.png";
  btn_confirmar.disabled = false;
};

//Definimos la funcion que generara un numero 
//aleatorio entre el 1 y el 5 
function num_aleatorio() {
  return parseInt(Math.random() * 5);
}

// DEfinimos la funcion para mostrar la opcion del PC
function display_opcion_pc(opcion) {
  if (opcion === 0) {
    img_pc.src = "./assets/rockPPTLS.png";
  } else if (opcion === 1) {
    img_pc.src = "./assets/paperPPTLS.png";
  } else if (opcion === 2) {
    img_pc.src = "./assets/scissorsPPTLS.png";
  } else if (opcion === 3) {
    img_pc.src = "./assets/lizardPPTLS.png";
  } else {
    img_pc.src = "./assets/spockPPTLS.png";
  }
}


//Defino las Reglas del juego 
function game(opcion_jugador, opcion_pc) {
  var escenario_1; //Piedra 0 gana Tijeras 2
  var escenario_2; //Papel 1 gana Piedra 0
  var escenario_3; //Tijeras 2 gana Papel 1
  var escenario_4; //Piedra 0 gana Lagarto 3
  var escenario_5; //Papel 1 gana Spock 4
  var escenario_6; //Tijeras 2 gana Lagarto 3
  var escenario_7; //Lagarto 3 gana Spock 4
  var escenario_8; //Lagarto 3 gana Papel 1
  var escenario_9; //Spock 4 gana Tijeras 2
  var escenario_10; //Spock 4 gana Piedra 0
  var empate; /*---------------Con Switch-----------------*/
  /* --------------------Con IF -------------------
  if (opcion_jugador === opcion_pc) {
    empate = true;
  } else if (opcion_jugador === 0 && opcion_pc === 2) {
    escenario_1 = true;
  } else if (opcion_jugador === 1 && opcion_pc === 0) {
    escenario_2 = true;
  } else if (opcion_jugador === 2 && opcion_pc === 1) {
    escenario_3 = true;
  } else if (opcion_jugador === 0 && opcion_pc === 3) {
    escenario_4 = true;
  } else if (opcion_jugador === 1 && opcion_pc === 4) {
    escenario_5 = true;
  } else if (opcion_jugador === 2 && opcion_pc === 3) {
    escenario_6 = true;
  } else if (opcion_jugador === 3 && opcion_pc === 4) {
    escenario_7 = true;
  } else if (opcion_jugador === 3 && opcion_pc === 1) {
    escenario_8 = true;
  } else if (opcion_jugador === 4 && opcion_pc === 2) {
    escenario_9 = true;
  } else if (opcion_jugador === 4 && opcion_pc === 0) {
    escenario_10 = true;
  }
*/ switch (
    true
  ) {
    case opcion_jugador === opcion_pc:
      empate = true;
      break;
    case opcion_jugador === 0 && opcion_pc === 2:
      escenario_1 = true;
      break;
    case opcion_jugador === 1 && opcion_pc === 0:
      escenario_2 = true;
      break;
    case opcion_jugador === 2 && opcion_pc === 1:
      escenario_3 = true;
      break;
    case opcion_jugador === 0 && opcion_pc === 3:
      escenario_4 = true;
      break;
    case opcion_jugador === 1 && opcion_pc === 4:
      escenario_5 = true;
      break;
    case opcion_jugador === 2 && opcion_pc === 3:
      escenario_6 = true;
      break;
    case opcion_jugador === 3 && opcion_pc === 4:
      escenario_7 = true;
      break;
    case opcion_jugador === 3 && opcion_pc === 1:
      escenario_8 = true;
      break;
    case opcion_jugador === 4 && opcion_pc === 2:
      escenario_9 = true;
      break;
    case opcion_jugador === 4 && opcion_pc === 0:
      escenario_10 = true;
      break;
  }
//// Una vez determinado el escenario que ha sucedido procedemos 
//a sumar los puntos y mostrarle al usuario su resultado
// (Si Gano, perio o fue empate)
  if (
    escenario_1 ||
    escenario_2 ||
    escenario_3 ||
    escenario_4 ||
    escenario_5 ||
    escenario_6 ||
    escenario_7 ||
    escenario_8 ||
    escenario_9 ||
    escenario_10
  ) {
    //alert("user gana");
    img_result.src = "./assets/ganas_PPTLS.png";
    marcador_user++;
    document.getElementById("puntos_user").innerText = marcador_user;
  } else if (empate) {
    //alert("EMPATE");
    img_result.src = "./assets/empate_PPTLS.png";
  } else {
    //alert("pc gana");
    img_result.src = "./assets/pierdes_PPTLS.png";
    marcador_pc++;
    document.getElementById("puntos_pc").innerText = marcador_pc;
  }
}


