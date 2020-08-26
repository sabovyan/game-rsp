export const hasWinner = ([firstShape, secondShape], player1, player2) => {
	player1.isWinner = false;
	player2.isWinner = false;
	if (firstShape === '✂' && secondShape === '🤘🏼') {
		player2.isWinner = true;
	} else if (firstShape === '✂' && secondShape === '🧻') {
		player1.isWinner = true;
	} else if (firstShape === '🤘🏼' && secondShape === '🧻') {
		player2.isWinner = true;
	} else if (firstShape === '🤘🏼' && secondShape === '✂') {
		player1.isWinner = true;
	} else if (firstShape === '🧻' && secondShape === '✂') {
		player2.isWinner = true;
	} else if (firstShape === '🧻' && secondShape === '🤘🏼') {
		player1.isWinner = true;
	}
};
