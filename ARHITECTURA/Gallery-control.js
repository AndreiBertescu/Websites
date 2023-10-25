var timpAuto = 5;   //secunde
var timpManual = 5;   //secunde

var gall=[
	fct1,
	fct2,
	fct3,
	fct4,
	fct5,
	fct6
]
var i=1;
var key,key2;

function update1(){
	key = setInterval(update, timpAuto*1000);
}

function update(){
	if(i > gall.length)
		i=1;
	gall[i-1]();
	i++;
}

function f(x){
	clearInterval(key);
	clearTimeout(key2);
	
	i=x;
	gall[i-1]();
	i++;
	key2 = setTimeout(update1, timpManual*500);
}

function fct1(){
	document.getElementById("slideDiv").style.left = "0px";
}

function fct2(){
	document.getElementById("slideDiv").style.left = "-100%";
}

function fct3(){
	document.getElementById("slideDiv").style.left = "-200%";
}

function fct4(){
	document.getElementById("slideDiv").style.left = "-300%";
}

function fct5(){
	document.getElementById("slideDiv").style.left = "-400%";
}

function fct6(){
	document.getElementById("slideDiv").style.left = "-500%";
}

