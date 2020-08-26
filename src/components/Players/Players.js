import React, { Component } from 'react';
import './Players.css';
import { Player } from '../Player/Player';
import { GamePlayer } from './helper/class.helper';
// import { hasWinner } from './helper/function.helper';

// const texts = ['🤘🏼', '✂', '🧻'];

// function randomShape() {
// 	const random = Math.floor(Math.random() * texts.length);

// 	const text = texts[random];
// 	return text;
// }

const player1 = new GamePlayer(1);
const player2 = new GamePlayer(2);

export default class Players extends Component {
	constructor(props) {
		super(props);
		this.state = {
			initialShape: ['()', '()'],
		};
	}

	render() {
		return (
			<>
				<Player {...player1} />
				<Player {...player2} />
				<button className={'game__button'}>click</button>
			</>
		);
	}
}
/* export const Players = () => {
	const [initialShape, setShape] = useState(['()', '()']);
	player1.shape = initialShape[0];
	player2.shape = initialShape[1];

	const [initialScore, setScore] = useState([0, 0]);
	player1.score = initialScore[0];
	player2.score = initialScore[1];

	const changeState = () => {
		let shapes = [randomShape(), randomShape()];

		hasWinner(shapes, player1, player2);

		if (player1.isWinner) {
			initialScore[0] += 1;
			setScore([initialScore[0], initialScore[1]]);
		} else if (player2.isWinner) {
			initialScore[1] += 1;
			setScore([initialScore[0], initialScore[1]]);
		}
		setShape(shapes);
	};
}; 
onClick={changeState}
*/
