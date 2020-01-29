/* 
This is a very basic program that moves the bolt forwards
*/

async function startProgram() {
	// This is the order that the bot will move in. 
	// Place the functions down sequentially

	// Rolls 0 degrees (also means forwards) at speed 100, for 2 seconds
	await roll(0, 100, 2);
	
	// Turns 90 degrees then rolls at speed 100 for 2 seconds
	await roll(90, 100, 2);

	// Turns 270 degrees then rolls at speed 141 for 2 seconds
	await roll(270, 141, 2);	
}

