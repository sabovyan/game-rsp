import React from 'react';
import styles from './App.module.css';
import Players from './components/Players/Players';

export default function App() {
	return (
		<div className={styles.game}>
			<h1 className={styles.game__title}>
				<span aria-label="rock" role="img">
					🤘🏼
				</span>
				<span aria-label="scissors" role="img">
					{' '}
					✂
				</span>
				<span aria-label="paper" role="img">
					{' '}
					🧻
				</span>
			</h1>
			<Players />
		</div>
	);
}
