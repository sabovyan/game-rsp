import React, { Component } from 'react';
import './Players.css';
import Player from '../Player/Player';
import Limit from '../Limit/Limit';
import GameOver from '../GameOver/GameOver';
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
	}, 600);
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
			limit: 3,
			winnerName: 'Player 1',
			isOver: false,
			NoIsClicked: false,
		};
		// this.handleClick = this.handleClick.bind(this);
		// this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (e) => {
		this.setState({
			limit: e.target.value,
		});
	};

	handleClick = () => {
		const shapes = [randomShape(), randomShape()];
		hasWinner(shapes, player1, player2);
		let winnerScore;
		if (player1.isWinner) {
			this.setState((prevState) => ({
				player1Score: prevState.player1Score + 1,
			}));

			if (this.state.player1Score === this.state.limit - 1) {
				this.setState({
					winnerName: 'Player 1',
					isOver: true,
				});
			}

			winnerScore = document.querySelector('.player-1 > .player__score');
			spinWinnerScore(winnerScore);
		}
		if (player2.isWinner) {
			this.setState((prevState) => ({
				player2Score: prevState.player2Score + 1,
			}));

			if (this.state.player2Score === this.state.limit - 1) {
				this.setState({
					winnerName: 'Player 2',
					isOver: true,
				});
			}
			winnerScore = document.querySelector('.player-2 > .player__score');
			spinWinnerScore(winnerScore);
		}

		const shapeClasses = document.querySelectorAll('.player__shape');
		toggleClass(shapeClasses, 'player__shape--display');

		this.setState({ shapes });
	};

	handleModalSubmit = () => {
		window.location.reload();
	};
	handleModalReject = () => {
		this.setState({
			NoIsClicked: true,
		});
	};

	render() {
		const { shapes, player1Score, player2Score } = this.state;
		player1.shape = shapes[0];
		player2.shape = shapes[1];

		player1.score = player1Score;
		player2.score = player2Score;
		return (
			<>
				<Limit onchange={this.handleChange} />
				<Player {...player1} />
				<Player {...player2} />
				<button
					disabled={this.state.isOver}
					className={'game__button'}
					onClick={this.handleClick}
				>
					click
				</button>
				<GameOver
					playerScore1={this.state.player1Score}
					playerScore2={this.state.player2Score}
					winnerName={this.state.winnerName}
					isOver={this.state.isOver}
					onYes={this.handleModalSubmit}
					onNo={this.handleModalReject}
					NoIsClicked={this.state.NoIsClicked}
				/>
			</>
		);
	}
}
