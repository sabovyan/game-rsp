import React from 'react';
import styles from './Player.module.css';
export function Player(props) {
	return (
		<div className={props.className}>
			<div className={props.scoreClass}>{props.score}</div>

			<h2 className={styles.player__title}>{`Player ${props.id}`}</h2>

			<div className={props.shapeClass}>{props.shape}</div>
		</div>
	);
}