var canvas= new fabric.Canvas("myCanvas");

block_height=30;
block_width=30;

player_x=10;
player_y=10;

var player_object="";

function update_player(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);

        player_object.set({
            top:player_y,left:player_x
        });

        canvas.add(player_object);
    });

}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object=Img;

        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);

        block_object.set({
            top:player_y,left:player_x
        });

        canvas.add(block_object);
    });
    
}

window.addEventListener("keydown", myKeydown);
function myKeydown(e){
    keyPressed= e.keyCode;
    console.log(keyPressed);

    if(keyPressed=="187"){
        console.log("+ Key is pressed");
        block_height =block_height+10;
        block_width= block_width+10;
        document.getElementById("cur_width").innerHTML=block_width;
        document.getElementById("cur_height").innerHTML=block_height;

    }

    if(keyPressed=="189"){
        console.log("- Key is pressed");
        block_height =block_height-10;
        block_width= block_width-10;
        document.getElementById("cur_width").innerHTML=block_width;
        document.getElementById("cur_height").innerHTML=block_height;
        
    }

    if(keyPressed=="37"){
        Left();
        console.log("Left Key is pressed");

    }

    if(keyPressed=="38"){
        Up();
        console.log("Up Key is pressed");
        
    }

    if(keyPressed=="39"){
        Right();
        console.log("Right Key is pressed");
        
    }

    if(keyPressed=="40"){
        Down();
        console.log("Down Key is pressed");
        
    }


    if(keyPressed=="67"){
        new_image("cloud.jpg");
        console.log("C");
    }

    if(keyPressed=="68"){
        new_image("dark_green.png");
        console.log("D");
    }

    if(keyPressed=="71"){
        new_image("ground.png");
        console.log("G");
    }

    if(keyPressed=="76"){
        new_image("light_green.png");
        console.log("L");
    }

    if(keyPressed=="82"){
        new_image("roof.jpg");
        console.log("R");
    }

    if(keyPressed=="84"){
        new_image("trunk.jpg");
        console.log("T");
    }

    if(keyPressed=="85"){
        new_image("unique.png");
        console.log("U");
    }

    if(keyPressed=="87"){
        new_image("wall.jpg");
        console.log("W");
    }

    if(keyPressed=="89"){
        new_image("yellow_wall.png");
        console.log("Y");
    }

    if(keyPressed=="8"){
        new_image("white.png");
        console.log("BackSpace");
    }
}

function Left(){
    if(player_x>=0){
        player_x=player_x-block_width;
        console.log("Block's Width is "+block_width);
        console.log("Player X= "+player_x+",Player Y= "+player_y);
        canvas.remove(player_object);
        update_player();
    }
}

function Right(){
    if(player_x<=800){
        player_x=player_x+block_width;
        console.log("Block's Width is "+block_width);
        console.log("Player X= "+player_x+",Player Y= "+player_y);
        canvas.remove(player_object);
        update_player();
    }
}

function Up(){
    if(player_y>=20){
        player_y=player_y-block_height;
        console.log("Block's Height is "+block_height);
        console.log("Player X= "+player_x+",Player Y= "+player_y);
        canvas.remove(player_object);
        update_player();
    }
}

function Down(){
    if(player_y<=500){
        player_y=player_y+block_height;
        console.log("Block's Height is "+block_height);
        console.log("Player X= "+player_x+",Player Y= "+player_y);
        canvas.remove(player_object);
        update_player();
    }
}