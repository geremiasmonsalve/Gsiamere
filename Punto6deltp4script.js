function encriptar(){
  var numero = document.getElementById("numero").value;
  if(numero.lenght <=4){
    alert("El numero debe tener 4 digitos.");
    return;
  }
  var digitos = numero.split("");
  for(var i = 0; i <digitos.lenght; i++){
    var digito = parseInt(digitos[i]);
    var encriptado =(digito + 7) %10;
    digitos[i] = encriptado.toString();
  }
  var temp = digitos[0];
  digitos[0] = digitos[2]
  digitos[2] = temp;

  temp = digitos[1];
  digitos[1] = digitos[3];
  digitos[3] = temp;

  var numEncriptado = digitos.join("");
  document.getElementById("resultado").innerHTML ="numero encriptado" +  numEncriptado;
};
function desencriptar(){
  var numEncriptado = document.getElementById("numencriptado").value;
  if(numEncriptado.lenght < 4){
    alert("El numero debe tener 4 digitos.");
    return;
  }
  var digencriptado = numEncriptado.split("");
  var temp = digencriptado[0];
  digencriptado[0]= digencriptado[2];
  digencriptado[2]= temp;

  temp =digencriptado[1];
  digencriptado[1]=digencriptado[3];
  digencriptado[3]= temp ;
  for(var i = 0; i <digencriptado.lenght; i++){
    var digencriptado = parseInt(digencriptado[i]);
    var desencriptado =(digencriptado + 7) %10;
    digencriptado[i] = desencriptado.toString();
  }
  var numDesencriptado = digencriptado.join("");
  document.getElementById("resultado").innerHTML ="numero desencriptado" +  numDesencriptado;
}