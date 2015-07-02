function draw(){
	drawContext = document.getElementById('drawBoard').getContext("2d");
	drawContext.fillStyle="yellow";
	drawContext.fillRect(0,0,drawBoard.width,drawBoard.height);
	drawContext.strokeStyle="#f00";
}


Template.quiztwo.rendered = function(){
	draw();
	redraw();
}

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;

function addClick(x, y, dragging){
	clickX.push(x);
	clickY.push(y);
	clickDrag.push(dragging);
}

function redraw(){
	drawContext.strokeStyle = "#000000";
	drawContext.lineJoin = "round";
	drawContext.lineWidth = 10;	
	for(var i=0; i < clickX.length; i++) {		
		drawContext.beginPath();
		if(clickDrag[i] && i){
			drawContext.moveTo(clickX[i-1], clickY[i-1]);
		}else{
			drawContext.moveTo(clickX[i]-1, clickY[i]);
		}
	drawContext.lineTo(clickX[i], clickY[i]);
	drawContext.closePath();
	drawContext.stroke();
  }
}


Template.quiztwo.events({
	'click #erase': function(){
		drawContext.clearRect(0, 0, drawContext.canvas.width, drawContext.canvas.height);
		draw();
	},
	'mousedown canvas': function(e){
		console.log("mousedown");
		var mouseX = e.pageX - this.offsetLeft;
		var mouseY = e.pageY - this.offsetTop;
			
		paint = true;
		addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
		redraw();
	},
	'mousemove canvas':function(e){
		console.log("move mouse");

		if(paint){
			addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
			redraw();
		}
	},
	'mouseup canvas': function(e){
		console.log("mouse up");

		paint = false;
	},
	'mouseleave canvas': function(e){
		console.log("mouse leave");

		paint = false;
	}
});

function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coor = "(" + x + ", " + y+")";
    console.log(x)
    document.getElementById("coordinates").innerHTML = coor;
    console.log(coor)

}







