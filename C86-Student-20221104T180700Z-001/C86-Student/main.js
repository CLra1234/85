//criando canvas
var canvas = new fabric.Canvas("myCanvas")

//definindo coordenadas iniciais
var playerX = 10;
var playerY = 10;

var blockImageWidth = 30
var blockImageHeight = 30

var playerObject= "";
var blockImageObject= "";//variável para armazenar o obj da imagem dddd

//função para adicionar a imagem do jogador no canvaas
function playerUpdate() {
	//function para enviar imagem ao canvas
	fabric.Image.fromURL("player.png", function(Img) {
		playerObject = Img;
		playerObject.scaleToWidth(150)
		playerObject.scaleToHeight(140)
		playerObject.set({
			top:playerY ,//recebendo valor da variável já criada
			left:playerX 
		});
		//adicionar imagem ao canvas
		canvas.add(playerObject)
	});
}

//function  para adicionar as diferentes imagens de acordo com as
//teclas específicas pressionadas.
//última function a criar
function newImage(getImage){//parâmetro é a imagem passada ao chamar a function
	fabric.Image.fromURL(getImage, function(Img) {
		blockImageObject = Img;
		blockImageObject.scaleToWidth(blockImageWidth)
		blockImageObject.scaleToHeight(blockImageHeight)
		blockImageObject.set({
			top:playerY ,//recebendo valor da variável já criada
			left:playerX 
		});
		//adicionar imagem ao canvas
		canvas.add(blockImageObject)
	});

}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(e.shiftKey == true && keyPressed == '77') {
		blockImageWidth+=10	
		blockImageHeight+=10
		document.getElementById("currentWidth").innerHTML=blockImageWidth
		document.getElementById("currentHeight").innerHTML=blockImageHeight
	}	
	if(e.shiftKey && keyPressed == '78') {
		blockImageWidth-=10	
		blockImageHeight-=10
		document.getElementById("currentWidth").innerHTML=blockImageWidth
		document.getElementById("currentHeight").innerHTML=blockImageHeight
	}

	if(keyPressed == '38') {
		up();
		console.log("cima");
	}
	if(keyPressed == '40') {
		down();
		console.log("baixo");
	}
	if(keyPressed == '37') {
		left();
		console.log("esquerda");
	}
	if(keyPressed == '39') {
		right();
		console.log("direita");
	}
	if(keyPressed == '87') {
		newImage('wall.jpg'); 
		console.log("w");
	}
	if(keyPressed == '71') {
		newImage('ground.png'); 
		console.log("g");
	}
	if(keyPressed == '76') {
		newImage('light_green.png'); 
		console.log("l");
	}
	if(keyPressed == '84') {
		newImage('trunk.jpg'); 
		console.log("t");
	}
	if(keyPressed == '82') {
		newImage('roof.jpg'); 
		console.log("r");
	}
	if(keyPressed == '89') {
		newImage('yellow_wall.png'); 
		console.log("y");
	}
	if(keyPressed == '68') {
		newImage('dark_green.png'); 
		console.log("d");
	}
	if(keyPressed == '85') {
		newImage('unique.png'); 
		console.log("u");
	}
	if(keyPressed == '67') {
		newImage('cloud.jpg'); 
		console.log("c");
	}
	
}

function up() {
	if(playerY >=0) {
		playerY = playerY - blockImageHeight;
		canvas.remove(playerObject)
		playerUpdate()
	}
}

function down() {
	if(playerY <=500) {
		playerY = playerY + blockImageHeight;
		canvas.remove(playerObject)
		playerUpdate()
	}
}

function left() {
	if(playerX >0) {
		playerX = playerX - blockImageWidth
		canvas.remove(playerObject)	
		playerUpdate()
	}
}

function right() {
	if(playerX <=850) {
		playerX = playerX + blockImageWidth
		canvas.remove(playerObject)
		playerUpdate()
	}
}
