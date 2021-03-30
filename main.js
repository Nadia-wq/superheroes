var canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object = "";
var block_image_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(150);
        block_image_object.scaleToHeight(140);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (e.shiftKey == true && keypressed == '80') {
        console.log("p & shiftKey is pressed");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey == true && keypressed == '77') {
        console.log("m & shiftKey is pressed");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (keypressed == '38') {
        console.log("up");
        up();
    }
    if (keypressed == '40') {
        console.log("down");
        down();
    }
    if (keypressed == '37') {
        console.log("left");
        left();
    }
    if (keypressed == '39') {
        console.log("right");
        right();
    }
    if (keypressed == '72') {
        new_image('hulkd_body.png');
        console.log("h");
    }
    if (keypressed == '83') {
        new_image('spiderman_legs.png');
        console.log("s");
    }
    if (keypressed == '70') {
        new_image('groot_head.jpeg');
        console.log("f");
    }
    if (keypressed == '84') {
        new_image('thor_right_hand.jpg');
        console.log("t");
    }
    if (keypressed == '67') {
        new_image('captain_america_left_hand.png');
        console.log("c");
    }
}

function up() {
    if (player_y >= 0) {
        player_y = player_y - block_image_height;
        console.log("block_image_height is :" + block_image_height);
        console.log("when up arrow is pressed, x=" + player_x + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if (player_y <= 500) {
        player_y = player_y + block_image_height;
        console.log("block_image_height is :" + block_image_height);
        console.log("when up arrow is pressed, x=" + player_x + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x >= 0) {
        player_x = player_x - block_image_width;
        console.log("block_image_width is :" + block_image_width);
        console.log("when up arrow is pressed, x=" + player_x + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_x <= 850) {
        player_x = player_x - block_image_width;
        console.log("block_image_width is :" + block_image_width);
        console.log("when up arrow is pressed, x=" + player_x + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}