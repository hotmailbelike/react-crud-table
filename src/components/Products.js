import React from 'react';

//Get components
import Row from './Row';
//console.log(Row);
export default class Products extends React.Component {
	state = {
		products: [
			{
				id: 1,
				category: 'Sporting Goods',
				price: '49.99',
				qty: 12,
				name: 'Football'
			},
			{
				id: 2,
				category: 'Sporting Goods',
				price: '9.99',
				qty: 15,
				name: 'Baseball'
			},
			{
				id: 3,
				category: 'Sporting Goods',
				price: '29.99',
				qty: 14,
				name: 'Basketball'
			},
			{
				id: 4,
				category: 'Electronics',
				price: '99.99',
				qty: 34,
				name: 'iPod Touch'
			},
			{
				id: 5,
				category: 'Electronics',
				price: '399.99',
				qty: 12,
				name: 'iPhone 5'
			},
			{
				id: 6,
				category: 'Electronics',
				price: '199.99',
				qty: 23,
				name: 'Nexus 7'
			}
		],
		searchResult: []
	};

	addRow = () => {
		const GenerateUniqueId = () =>
			'_' +
			Math.random()
				.toString(36)
				.substr(2, 9);

		let id = GenerateUniqueId();

		let newProduct = {
			id,
			name: 'Enter new Product Name',
			price: 'Enter new Product Price',
			category: 'Enter new Product Category',
			qty: 'Enter new Product Quantity'
		};

		let newProducts = this.state.products;
		newProducts.push(newProduct);

		this.setState((state) => ({ products: newProducts }));
	};

	editCell = (id) => (e) => {
		let data = e.target.value;
		let productId = id;
		let cellType = e.target.name;
		let index = this.state.products.findIndex((obj) => obj.id === productId);
		let newProducts = this.state.products;
		let newProduct = (newProducts[index][cellType] = data);
		this.setState(() => ({ products: newProducts }));
		// console.log(newProduct);
		// console.log('data:', data, 'productId:', productId, 'cellType:', cellType, 'index:', index, 'newProducts:', newProducts);
	};

	deleteRow = (productId) => {
		let index = this.state.products.findIndex((obj) => obj.id === productId);
		console.log(index);
		let newProducts = this.state.products;
		newProducts.splice(index, 1);
		this.setState(() => ({ products: newProducts }));
	};

	searchByName = (e) => {
		let searchTerm = e.target.value;
		let vanillaProducts = this.state.products;
		let searchValues;

		if (searchTerm) {
			searchValues = this.state.products.filter((product) => product.name.includes(searchTerm));
		} else {
			searchValues = [];
		}

		this.setState(
			(state) => ({ searchResult: searchValues }),
			() => {
				console.log('res:', this.state.searchResult);
			}
		);

		console.log(searchValues);

		// console.log('searchTerm: ', searchTerm);
	};

	render() {
		return (
			<div>
				<input type='search' onChange={this.searchByName} />
				<table border='1'>
					<thead>
						<tr>
							<th>Name</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Category</th>
						</tr>
					</thead>

					<tbody>
						{/* {this.state.products.map((product) => (
							<Row editCell={this.editCell} deleteRow={this.deleteRow} key={product.id} product={product}></Row>
						))} */}
						{this.state.searchResult.length > 0 ? this.state.searchResult.map((product) => <Row editCell={this.editCell} deleteRow={this.deleteRow} key={product.id} product={product}></Row>) : this.state.products.map((product) => <Row editCell={this.editCell} deleteRow={this.deleteRow} key={product.id} product={product}></Row>)}

						{/* <tr>
              <td>{this.state.products[0].name}</td>
              <td>{this.state.products[0].price}</td>
              <td>{this.state.products[0].qty}</td>
              <td>{this.state.products[0].category}</td>
            </tr> */}
					</tbody>
				</table>
				<br />
				<button onClick={this.addRow}>Add</button>
			</div>
		);
	}
}
