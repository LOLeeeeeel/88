
var canvas= new fabric.Canvas('myCanvas')

ball_y="0";
ball_x="0";
hole_y="400";
hole_x="800";


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png",function(img){
        hole_obj= Img;
        hole_obj.scaleToWidth(50)
        hole_obj.scaleToHeight(50)
        hole_obj.set({
        top:hole_y,
        left:hole_x
        })
        canvas.add(hole_obj)
    })
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(img){
        block_image_object=img;
        block_image_object.scaleToWidth(50)
        block_image_object.scaleToHeight(50)
        block_image_object.set({
            top: ball_y,
            left: ball_x
        })
        canvas.add(ball.obj)
    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)

	keyPressed=e.keyCode;
	console.log(keyPressed);

	
        console.log(ball_x==hole_x)&&(ball_y==hole_y)
			canvas.remove("ball.obj")
       

    

	document.getElementById("hd3").innerHTML="you have hit the goal"
	document.getElementById("myCanvas").style.borderColor="red"
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up(ball_y >=0)
	{
		ball_y= ball_y-block_image_height
		 console.log("block_image_height =" - block_image_height)
		 console.log("When Down Arrow Key is Pressed,X="-ball_x+",Y="-ball_y)
	}

	
	function down(ball_y <=450)
	{
		 ball_y= ball_y+block_image_height
		 console.log("block_image_height =" + block_image_height)
		 console.log("When Down Arrow Key is Pressed,X="+ball_x+",Y="+ball_y)
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x= ball_x-block_image_width
			console.log("block_image_width ="+ block_image_width)
			console.log("When Left Arrow Key is Pressed,X"-ball_x+",Y="-ball_y)
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x= ball_x+block_image_width
			console.log("block_image_width ="+ block_image_width)
			console.log("When Left Arrow Key is Pressed,X"+ball_x+",Y="+ball_y)
		}
	}
	




