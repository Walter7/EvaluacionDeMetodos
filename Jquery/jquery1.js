var x;
x=$(document);
x.ready (inicializarEventos);

function inicializarEventos(){
	var x;
	x=$("#publicidad");
	x.click(cambiarColor);
	x=$("#titulo1");
	x.ready(Titulo1)
} 
function cambiarColor(){
	var x;
	x=$("#publicidad");
	x.css("background-color","#ffffff");	
}
function Titulo1(){
	var x;
	x=$("#titulo1");
	x.css("color","#ffffff");
}

//Walter Esteban