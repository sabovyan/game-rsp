export class GamePlayer {
	constructor(id) {
		this.id = id;
		this.className = `player player-${this.id}`;
		this.shape = '()';
		this.score = 0;
		this.isWinner = false;
	}
}
