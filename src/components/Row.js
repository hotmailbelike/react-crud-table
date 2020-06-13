import React from 'react';

//Get components
import Cell from './Cell';

const Row = (props) => (
	<tr>
		<Cell cellType={{ name: 'name' }} rowid={props.product.id} editCell={props.editCell} data={props.product.name}></Cell>
		<Cell cellType={{ name: 'price' }} rowid={props.product.id} editCell={props.editCell} data={props.product.price}></Cell>
		<Cell cellType={{ name: 'qty' }} rowid={props.product.id} editCell={props.editCell} data={props.product.qty}></Cell>
		<Cell cellType={{ name: 'category' }} rowid={props.product.id} editCell={props.editCell} data={props.product.category}></Cell>
		<td>
			<input
				type='button'
				value='X'
				onClick={(e) => {
					props.deleteRow(props.product.id);
				}}
			/>
		</td>
	</tr>
);

export default Row;
