import React from 'react';

const Cell = (props) => (
	<td>
		<input name={props.cellType.name} rowid={props.rowid} type='text' value={props.data} onChange={props.editCell(props.rowid)} />
	</td>
);

export default Cell;
