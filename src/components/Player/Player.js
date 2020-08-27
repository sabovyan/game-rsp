import React from 'react';
import styles from './Player.module.css';
export default function Player(props) {
	return (
		<div className={props.className}>
			<div className={props.scoreClass}>{props.score}</div>

			<h2 className={styles.player__title}>{props.titleName}</h2>

			<div className={props.shapeClass}>{props.shape}</div>
		</div>
	);
}
