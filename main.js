function preload() {
	world_start = loadSound("world_start.wav");
	mario_gameover = loadSound("gameover.wav")
	mario_jump = loadSound("jump.wav")
	mario_coin = loadSound("coin.wav")
	mario_die = loadSound("mariodie.wav")
	mario_kick = loadSound("kick.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas")
	instializeInSetup(mario);
	webcan = createCapture(VIDEO)
	webcan.size(400,400)
	webcan.parent("game-console")
	poseNet = ml5.poseNet(webcan, modelLoaded)
	poseNet.on("pose", gotPoses)
}

function draw() {
	game()
}
function modelLoaded(){
	console.log("modelo inicializado")
}
function gotPoses(results){
    if(results.length > 0){
       noseX = results[0].pose.nose.x
	   noseY = results[0].pose.nose.y
	}
}





