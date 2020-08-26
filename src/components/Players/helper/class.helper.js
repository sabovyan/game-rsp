export class GamePlayer {
	constructor(id) {
		this.id = id;
		this.className = `player player-${this.id}`;
		this.shape = '()';
		this.shapeClass = 'player__shape';
		this.score = 0;
		this.scoreClass = 'player__score';
		this.isWinner = false;
	}
}
