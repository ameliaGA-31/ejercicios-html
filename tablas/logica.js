let contenedor= document.getElementById('contenedor');
for(var n=1; n<=10; n++){
	let ol = document.createElement('ol');
 	let listas= '<h3>Tabla del '+  n +'</h3>';
	for (var i =1, resultado= 0, operacion='' ; i<=10; i++){
		resultado= i * n;
		//resultado = (numero + "x " + i + "= " + numero * i);
		operacion= n + 'x '  + i + '=' + resultado;
		listas += '<li class="resultado">'+ operacion +'</li>' 
	}
	ol.innerHTML= listas;
	contenedor.appendChild(ol); 

}

