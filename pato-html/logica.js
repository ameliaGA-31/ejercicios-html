let resultado = calificacion (0,5);
console.log("resultado", resultado);
function calificacion(minimo, maximo) {
  let random= Math.random();
  let num= random * (maximo- minimo);
  let suma=num + minimo;
  let sumaTrunca= suma.toFixed(1);
  console.log("suma", suma);
  let textoValoracion= document.getElementById("calificacionHtml");
  textoValoracion.innerText = sumaTrunca.toString();
  return
}
function mostrarRespuesta(){
	console.log("respuesta");
	let listaHtml= document.getElementById("pregunta1"); 
	listaHtml.setAttribute("class", "nuevofondo");
}

