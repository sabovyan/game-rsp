import React from 'react';
import './GameOver.css';

export default function GameOver(props) {
	return (
		<div className="gameOver__modal">
			<h2 className="gameOver__title">
				<span className="game__winner">{props.winnerName}</span> is the winner!
			</h2>
			<p className="gameOver__score">
				<span className="gameOver__number"> {props.playerScore1}</span> Vs
				<span className="gameOver__number"> {props.playerScore2}</span>
			</p>
			<div className="game__request-container"></div>
			<p className="game__request">Do you want to play again ?</p>
			<button className="request__button game__accept" onclick={props.onclick}>
				Yes
			</button>
			<button className="request__button game__reject" onclick={props.onclick}>
				No
			</button>
		</div>
	);
}
