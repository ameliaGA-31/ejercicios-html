let resultado = calificacion (0,5);
let preguntaHtmlCollection = document.getElementsByClassName("li-pregunta");
let preguntaHtml = Array.from( preguntaHtmlCollection);
console.log("preguntaHtml", preguntaHtml);
//preguntaHtml.forEach(myFunction);
	for(let i=0; i<preguntaHtml.length; i++){
		myFunction(preguntaHtml[i],i);
	}


function myFunction(liHtml,index){
	liHtml.setAttribute("id", index);
	liHtml.addEventListener("click",()=> mostrarRespuesta (liHtml, index), false);
	//liHtml.addEventListener("click", mostrarRespuesta(liHtml,index), false);
}
function ocultarRespuestas(liHtml,index){
		let todasRespuestas= Array.from(liHtml.getElementsByTagName("p"));
		console.log("todas las respuestas", todasRespuestas[0]);
		 	console.log("todasLasRespuesta", todasRespuestas);
		 if(todasRespuestas[0] && todasRespuestas[0].classList.length==0 ){
		 	todasRespuestas[0].classList.add("ocultarTexto");
		 }
	}
function mostrarRespuesta(liHtml,index){
	console.log("index", index); 
	preguntaHtml.forEach(ocultarRespuestas);
	let respuesta= Array.from(liHtml.getElementsByTagName("p"));
		if(respuesta[0]){
			respuesta[0].classList.toggle("ocultarTexto");
			//respuesta[0].setAttribute("class","mostrarTexto");
		}
	console.log("respuesta", respuesta);
	//li.setAttribute("class", "mostrarTexto");
	//let respuesta= preguntaHtml[index].getElementsByTagName("p");
}

/*for(i=0; i<preguntaHtml.length; i++){
	preguntaHtml[i].onclick = function (e){
		let liNodoHtml= e.path[0].children[2];
		let spanNodoHtml = e.path[1].children[2];
		let iconNodoHtml = e.path[2].children[2];
			if(liNodoHtml){
				liNodoHtml.setAttribute("class", "mostrarTexto");
			}
			if (spanNodoHtml) {
				spanNodoHtml.setAttribute("class", "mostrarTexto");
			}
			if(iconNodoHtml){
				iconNodoHtml.setAttribute("class", "mostrarTexto");
			}

		//mostrarRespuesta(e);
		//console.log("e.path", e.path[1].children[2]);
		//console.log("e.path", e.path);
	}
}*/
/*preguntaHtml.onclick = function (e){ 
	mostrarRespuesta(e);

	 // function (e){ return mostrarRespuesta(e) };
	 // (e) => montrarRespuesta(e);

}*/

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
/*function mostrarRespuesta(e){
	console.log("evento", e);
	console.log("respuesta");
	let listaHtml= document.getElementById("pregunta1"); 
	listaHtml.setAttribute("class", "nuevofondo");
}
*/


