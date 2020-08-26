import React, { Component } from 'react';
import './Players.css';
import { Player } from '../Player/Player';
import { GamePlayer } from './helper/class.helper';
import { hasWinner } from './helper/function.helper';

const texts = ['🤘🏼', '✂', '🧻'];

function randomShape() {
	const random = Math.floor(Math.random() * texts.length);

	const text = texts[random];
	return text;
}

function toggleClass(shapeClasses, className) {
	shapeClasses.forEach((el) => {
		el.classList.add(className);
		setTimeout(() => {
			el.classList.remove(className);
		}, 500);
	});
}

function spinWinnerScore(scoreClass) {
	scoreClass.classList.add('player__score--display');
	setTimeout(() => {
		scoreClass.classList.remove('player__score--display');
	}, 500);
}

const player1 = new GamePlayer(1);
const player2 = new GamePlayer(2);

export default class Players extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shapes: ['()', '()'],
			player1Score: 0,
			player2Score: 0,
		};
		// this.handleClick = this.handleClick.bind(this);
	}
	handleClick = () => {
		const shapes = [randomShape(), randomShape()];
		hasWinner(shapes, player1, player2);
		let winnerScore;
		if (player1.isWinner) {
			this.setState((prevState) => ({
				player1Score: prevState.player1Score + 1,
			}));
			winnerScore = document.querySelector('.player-1 > .player__score');
			spinWinnerScore(winnerScore);
		}
		if (player2.isWinner) {
			this.setState((prevState) => ({
				player2Score: prevState.player2Score + 1,
			}));
			winnerScore = document.querySelector('.player-2 > .player__score');
			spinWinnerScore(winnerScore);
		}
		const shapeClasses = document.querySelectorAll('.player__shape');
		toggleClass(shapeClasses, 'player__shape--display');

		this.setState({ shapes });
	};

	render() {
		const { shapes, player1Score, player2Score } = this.state;

		player1.shape = shapes[0];
		player2.shape = shapes[1];

		player1.score = player1Score;
		player2.score = player2Score;
		return (
			<>
				<Player {...player1} />
				<Player {...player2} />
				<button className={'game__button'} onClick={this.handleClick}>
					click
				</button>
			</>
		);
	}
}
