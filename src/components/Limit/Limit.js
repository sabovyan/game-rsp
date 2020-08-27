import React from 'react';
import styles from './Limit.module.css';

export default function Limit(props) {
	return (
		<div className={styles.select__container}>
			<select className={styles.select} onChange={props.onchange}>
				<option value="3">3</option>
				<option value="5">5</option>
				<option value="10">10</option>
			</select>
		</div>
	);
}
