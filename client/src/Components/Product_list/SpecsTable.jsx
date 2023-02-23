import React from "react";
import styles from "./SpecsTable.module.css";

const SpecsTable = ({
	processor,
	OS,
	graphics_card,
	memory,
	storage,
	display,
}) => {
	return (
		<table className={styles.specs_table}>
			<tbody>
				<tr>
					<td>Processor</td>
					<td>{processor}</td>
				</tr>
				<tr>
					<td>OS</td>
					<td>{OS}</td>
				</tr>
				<tr>
					<td>Graphics</td>
					<td>{graphics_card}</td>
				</tr>
				<tr>
					<td>Memory</td>
					<td>{memory}</td>
				</tr>
				<tr>
					<td>Storage</td>
					<td>{storage}</td>
				</tr>
				<tr>
					<td>Display</td>
					<td>{display}</td>
				</tr>
			</tbody>
		</table>
	);
};

export default SpecsTable;
