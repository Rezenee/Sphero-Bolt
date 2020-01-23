/* 
This is a basic program that plays a staring animation, then a flame gif
after animation starts it moves forwards; does a 720; turns around; and moves 
back to the start position
*/

async function startProgram() {
	// This is the order that the bot will move in. 
	// Place the functions down sequentially
	//Plays Red screen, then sleeps for a second
	playMatrixAnimation(0, false);
	await delay(1);
	// Yellow Screen; sleep
	playMatrixAnimation(1, false);
	await delay(1);
	// Green Screen; sleep
	playMatrixAnimation(2, false);
	await delay(1);
	//Starts playing the fire animation. It is set to true, so it loops
	playMatrixAnimation(3, true);
	// Rolls 0 degrees (forwards) at speed 100 for 2 seconds
	await roll(0, 100, 2);
	// Spins 720 degrees in 4 seconds
	await spin(720, 4);
	// Turns around 180 degrees then rolls at speed 100 for 2 seconds
	await roll(180, 100, 2);
}

registerMatrixAnimation({
	// The way that this works is you have to define a color value for each pixel on the 8x8 matrix. 
	// In frames you have sets of 8 pixels the first set is the top row, the second set is the second row and so on
	// To define what color you want you need to make the palette variable. It is a large list and you need to
	// call the indice in the list. 0 calls the first color, 1 calls the second color
	frames: [[[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]],
	palette: [{ r: 255, g: 0, b: 0 }],
	fps: 10,
	transition: MatrixAnimationTransition.None
});
registerMatrixAnimation({
	frames: [[[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]],
	palette: [{ r: 255, g: 255, b: 0 }],
	fps: 10,
	transition: MatrixAnimationTransition.None
});
registerMatrixAnimation({
	frames: [[[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]],
	palette: [{ r: 0, g: 255, b: 0 }],
	fps: 10,
	transition: MatrixAnimationTransition.None
});
registerMatrixAnimation({
	frames: [[[0, 0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 1, 6, 6, 1, 0], [0, 0, 1, 6, 5, 1, 0, 0], [0, 0, 1, 5, 4, 5, 1, 0], [0, 1, 4, 4, 3, 3, 1, 0], [0, 1, 3, 2, 2, 15, 3, 1], [0, 0, 1, 15, 2, 15, 1, 0], [0, 0, 0, 1, 1, 1, 0, 0]],
		[[0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 6, 1, 0, 0], [0, 0, 0, 1, 5, 6, 1, 0], [0, 0, 1, 5, 5, 4, 1, 0], [0, 1, 3, 4, 3, 4, 1, 0], [0, 1, 3, 15, 2, 2, 3, 1], [0, 0, 1, 15, 2, 15, 1, 0], [0, 0, 0, 1, 1, 1, 0, 0]],
		[[0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 1, 6, 6, 1, 0, 0], [0, 0, 0, 1, 5, 6, 1, 0], [0, 0, 1, 5, 4, 5, 1, 0], [0, 1, 4, 4, 3, 4, 1, 0], [0, 1, 3, 3, 2, 13, 3, 1], [0, 0, 1, 2, 2, 3, 1, 0], [0, 0, 0, 1, 1, 1, 0, 0]],
		[[0, 0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 1, 1, 6, 1, 0], [0, 0, 0, 1, 6, 5, 1, 0], [0, 0, 1, 5, 4, 4, 1, 0], [0, 1, 2, 7, 3, 4, 1, 0], [0, 1, 2, 7, 7, 3, 3, 1], [0, 0, 1, 2, 2, 2, 1, 0], [0, 0, 0, 1, 1, 1, 0, 0]],
		[[0, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 1, 6, 1, 1, 0], [0, 0, 0, 1, 5, 6, 1, 0], [0, 0, 1, 6, 4, 5, 1, 0], [0, 1, 4, 4, 5, 3, 1, 0], [0, 1, 7, 2, 2, 7, 3, 1], [0, 0, 1, 7, 2, 3, 1, 0], [0, 0, 0, 1, 1, 1, 0, 0]]],
	palette: [{ r: 255, g: 255, b: 255}, { r: 0, g: 0, b: 255 }, { r: 255, g: 0, b: 0 }, { r: 255, g: 64, b: 0 }, 
                  { r: 255, g: 128, b: 0 },  { r: 255, g: 191, b: 0 }, { r: 255, g: 255, b: 0 }, { r: 255, g: 0, b: 255 }],
	fps: 30,

	transition: MatrixAnimationTransition.None
});
