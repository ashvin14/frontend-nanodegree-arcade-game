console.log("hello")// Enemies our player must avoid

var Player=function(x,y){
this.x=210;
this.y=400;

 this.sprite = 'images/char-boy.png';

};
var reset=function(){
player.x=210;
player.y=400;
}// 
var Enemy = function(x,y) {
    this.x=x;
    this.y=y;
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    this.speed=Math.floor(Math.random()*200+100);// a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    
};
// Update the enemy's position, required method for game
//Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    if(this.x<505)
    this.x+=this.speed*dt;// You should multiply any movement by the dt parameter
    else
    this.x=-2;// which will ensure the game runs at the same speed for
    // all computers.
    if(player.x >= this.x - 30 && player.x <= this.x + 30){
        if(player.y >= this.y - 30 && player.y <= this.y + 30){
            reset();
        }
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


Player.prototype.update=function(){
if(this.ctikey==='left'&&this.x<=500)
this.x=this.x-50;
else if(this.ctikey==='right'&&this.x>=-2)
	this.x=this.x+50;
else if (this.ctikey==='down'&&this.y<=600) 
	this.y=this.y+50;
	else if (this.ctikey==='up'&&this.y>=-2) 
		this.y=this.y-50;
	
	if(this.y<1)
	{
		alert("you won");
		reset();
	}

this.ctikey=null;
	

}

Player.prototype.handleInput=function(e){
	this.ctikey=e;

}
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var allEnemies=[new Enemy(-2,200),new Enemy(-2,100),new Enemy(-2,5)];
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
